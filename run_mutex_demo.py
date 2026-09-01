import subprocess
import sys
import time
import os
import threading

def stream_output(process, prefix):
    for line in iter(process.stdout.readline, ''):
        if line:
            print(f"[{prefix}] {line.rstrip()}", flush=True)

def run_mutex_demo():
    print("=========================================================================")
    print("  EXPERIMENT 4: RICART-AGRAWALA MUTUAL EXCLUSION OVER gRPC")
    print("  Goal: Distributed mutual exclusion among 3 peer processes without coordinator")
    print("=========================================================================\n")

    env = os.environ.copy()
    env["PYTHONUNBUFFERED"] = "1"

    processes = []
    threads = []

    # Startup delay for nodes: 5 seconds breathing room
    delay = "5.0"

    print("[RUNNER] Starting Node 1, Node 2, Node 3 almost simultaneously...")
    for node_id in [1, 2, 3]:
        p = subprocess.Popen(
            [sys.executable, "node.py", str(node_id), delay],
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            env=env,
            bufsize=1
        )
        processes.append(p)
        t = threading.Thread(target=stream_output, args=(p, f"NODE-{node_id}"))
        t.daemon = True
        t.start()
        threads.append(t)
        time.sleep(0.2)  # Launch very close to each other (~200ms apart)

    for p in processes:
        p.wait()

    for t in threads:
        t.join(timeout=2.0)

    print("\n=========================================================================")
    print("  EXPERIMENT 4 DEMONSTRATION COMPLETED SUCCESSFULLY")
    print("=========================================================================")

if __name__ == "__main__":
    run_mutex_demo()
