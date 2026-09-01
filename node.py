import sys
import time
import threading
from concurrent import futures
import grpc

import pdf_service_pb2
import pdf_service_pb2_grpc

# Set UTF-8 encoding for stdout on Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

PEERS = {
    1: "localhost:60051",
    2: "localhost:60052",
    3: "localhost:60053"
}

class Node:
    """
    Ricart-Agrawala Peer Process Node over gRPC.
    Manages state transitions (RELEASED -> WANTED -> HELD), Lamport clock updates,
    and deferred RPC response handling for mutual exclusion.
    """
    def __init__(self, node_id: int):
        self.id = node_id
        self.peers = {nid: addr for nid, addr in PEERS.items() if nid != node_id}
        self.clock = 0
        self.state = "RELEASED"  # States: RELEASED -> WANTED -> HELD
        self.request_time = None
        self.lock = threading.Lock()
        self.deferred = []  # threading.Event objects for deferred peer requests

    def tick(self) -> int:
        with self.lock:
            self.clock += 1
            return self.clock

    def update(self, received_ts: int) -> int:
        with self.lock:
            self.clock = max(self.clock, received_ts) + 1
            return self.clock

    def serve(self):
        server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
        pdf_service_pb2_grpc.add_MutexServiceServicer_to_server(_Servicer(self), server)
        server.add_insecure_port(PEERS[self.id])
        server.start()
        print(f"[Node-{self.id}] gRPC Mutex Server started on {PEERS[self.id]}", flush=True)
        return server

    def _call_with_retry(self, addr: str, my_ts: int, max_wait: float = 30.0):
        """
        Calls peer stub RequestAccess. Retries on connection errors until peer starts up.
        """
        deadline = time.time() + max_wait
        while time.time() < deadline:
            try:
                with grpc.insecure_channel(addr) as channel:
                    stub = pdf_service_pb2_grpc.MutexServiceStub(channel)
                    return stub.RequestAccess(
                        pdf_service_pb2.AccessRequest(node_id=self.id, timestamp=my_ts),
                        timeout=max_wait
                    )
            except grpc.RpcError:
                time.sleep(0.5)
        raise RuntimeError(f"[Node-{self.id}] Could not reach peer at {addr}")

    def request_cs(self):
        my_ts = self.tick()
        with self.lock:
            self.state = "WANTED"
            self.request_time = my_ts

        print(f"\n[Node-{self.id}] WANTS critical section (timestamp={my_ts})", flush=True)

        # Contact each peer to request access
        for peer_id, addr in self.peers.items():
            print(f"[Node-{self.id}] Requesting access from Peer-{peer_id} at {addr} (my_ts={my_ts})...", flush=True)
            reply = self._call_with_retry(addr, my_ts)
            self.update(reply.timestamp)
            print(f"[Node-{self.id}] Received GRANT reply from Peer-{peer_id} (reply_ts={reply.timestamp})", flush=True)

        with self.lock:
            self.state = "HELD"

        print(f"\n>>> [Node-{self.id}] ENTERED critical section (timestamp={my_ts}) <<<", flush=True)
        time.sleep(1.0)  # Simulate critical section work (e.g. Featured Submission slot)
        print(f"<<< [Node-{self.id}] LEAVING critical section >>>\n", flush=True)

        self.release_cs()

    def release_cs(self):
        with self.lock:
            self.state = "RELEASED"
            to_release, self.deferred = self.deferred, []

        print(f"[Node-{self.id}] EXITED critical section. Unblocking {len(to_release)} deferred peer request(s).", flush=True)
        for event in to_release:
            event.set()  # Let deferred peer RPC handlers return AccessReply


class _Servicer(pdf_service_pb2_grpc.MutexServiceServicer):
    """
    gRPC Servicer for MutexService handling incoming RequestAccess RPCs.
    Implements Ricart-Agrawala decision logic:
    - Grant immediately if node is RELEASED or has lower priority.
    - Defer (block RPC handler) if node is HELD or has higher priority.
    """
    def __init__(self, node: Node):
        self.node = node

    def RequestAccess(self, request, context):
        node = self.node
        node.update(request.timestamp)

        with node.lock:
            defer = (
                node.state == "HELD"
                or (
                    node.state == "WANTED"
                    and (node.request_time, node.id) < (request.timestamp, request.node_id)
                )
            )

        if defer:
            print(f"[Node-{node.id}] DEFERS request from Node-{request.node_id} (req_ts={request.timestamp})", flush=True)
            event = threading.Event()
            with node.lock:
                node.deferred.append(event)
            event.wait()  # Blocks the RPC response — this IS the deferral!
            print(f"[Node-{node.id}] GRANTS (post-deferral) request to Node-{request.node_id}", flush=True)
        else:
            print(f"[Node-{node.id}] GRANTS request to Node-{request.node_id} (req_ts={request.timestamp})", flush=True)

        send_ts = node.tick()
        return pdf_service_pb2.AccessReply(node_id=node.id, timestamp=send_ts)


def main():
    if len(sys.argv) < 2:
        print("Usage: python node.py <node_id> [startup_delay_seconds]")
        sys.exit(1)

    node_id = int(sys.argv[1])
    startup_delay = float(sys.argv[2]) if len(sys.argv) > 2 else 6.0

    node = Node(node_id)
    server = node.serve()

    print(f"[Node-{node_id}] Waiting {startup_delay}s for all nodes to initialize...", flush=True)
    time.sleep(startup_delay)

    node.request_cs()

    time.sleep(2.0)
    server.stop(0)
    print(f"[Node-{node_id}] Server stopped cleanly.", flush=True)


if __name__ == "__main__":
    main()
