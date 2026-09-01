import time
import concurrent.futures
import sys
import grpc
from lamport_clock import LamportClock

# Set UTF-8 encoding for stdout on Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

def log(msg):
    print(msg, flush=True)

# Import generated gRPC code
import pdf_service_pb2
import pdf_service_pb2_grpc

class PDFServiceServicer(pdf_service_pb2_grpc.PDFServiceServicer):
    """
    gRPC Server implementation for PDF Service with Lamport Logical Clock Synchronization.
    """
    def __init__(self):
        # Initialize Server Lamport Clock
        self.clock = LamportClock(initial_value=0)
        log(f"[SERVER STARTUP] Server Initialized with {self.clock}")

    def MergePDF(self, request, context):
        rec_clock = request.lamport_clock
        clock_before = self.clock.get_clock()
        
        # Lamport Clock Rule 2: max(local_clock, received_clock) + 1
        updated_clock = self.clock.update(rec_clock)
        
        log(f"\n[SERVER EVENT] Received 'MergePDF' Request (Job ID: {request.job_id})")
        log(f"  |-- Incoming Client Lamport Clock : {rec_clock}")
        log(f"  |-- Server Clock Before Update    : {clock_before}")
        log(f"  |-- Server Clock After Update     : {updated_clock}  <-- max({clock_before}, {rec_clock}) + 1")

        # Simulate PDF Merging Logic
        files = list(request.file_names)
        output = request.output_file_name
        msg = f"Successfully merged {len(files)} PDFs ({', '.join(files)}) into '{output}'."
        
        send_clock = updated_clock
        log(f"  |-- Replying to Client with Server Lamport Clock: {send_clock}")

        return pdf_service_pb2.MergePDFResponse(
            job_id=request.job_id,
            success=True,
            message=msg,
            total_pages=len(files) * 5,
            lamport_clock=send_clock
        )

    def SplitPDF(self, request, context):
        rec_clock = request.lamport_clock
        clock_before = self.clock.get_clock()
        
        # Lamport Clock Rule 2: max(local_clock, received_clock) + 1
        updated_clock = self.clock.update(rec_clock)
        
        log(f"\n[SERVER EVENT] Received 'SplitPDF' Request (Job ID: {request.job_id})")
        log(f"  |-- Incoming Client Lamport Clock : {rec_clock}")
        log(f"  |-- Server Clock Before Update    : {clock_before}")
        log(f"  |-- Server Clock After Update     : {updated_clock}  <-- max({clock_before}, {rec_clock}) + 1")

        generated = [f"{request.file_name}_part1.pdf", f"{request.file_name}_part2.pdf"]
        msg = f"Split '{request.file_name}' using range '{request.page_range}' into {len(generated)} files."
        
        send_clock = updated_clock
        log(f"  |-- Replying to Client with Server Lamport Clock: {send_clock}")

        return pdf_service_pb2.SplitPDFResponse(
            job_id=request.job_id,
            success=True,
            message=msg,
            generated_files=generated,
            lamport_clock=send_clock
        )

    def CheckStatus(self, request, context):
        rec_clock = request.lamport_clock
        clock_before = self.clock.get_clock()
        
        # Lamport Clock Rule 2: max(local_clock, received_clock) + 1
        updated_clock = self.clock.update(rec_clock)
        
        log(f"\n[SERVER EVENT] Received 'CheckStatus' Request (Job ID: {request.job_id})")
        log(f"  |-- Incoming Client Lamport Clock : {rec_clock}")
        log(f"  |-- Server Clock Before Update    : {clock_before}")
        log(f"  |-- Server Clock After Update     : {updated_clock}  <-- max({clock_before}, {rec_clock}) + 1")

        send_clock = updated_clock
        log(f"  |-- Replying to Client with Server Lamport Clock: {send_clock}")

        return pdf_service_pb2.StatusResponse(
            job_id=request.job_id,
            status="COMPLETED",
            progress_percent=100,
            lamport_clock=send_clock
        )

def serve(port=50051):
    server = grpc.server(concurrent.futures.ThreadPoolExecutor(max_workers=10))
    pdf_service_pb2_grpc.add_PDFServiceServicer_to_server(PDFServiceServicer(), server)
    server.add_insecure_port(f"[::]:{port}")
    server.start()
    log(f"[+] PDF gRPC Server running on port {port}...")
    try:
        server.wait_for_termination()
    except KeyboardInterrupt:
        server.stop(0)

if __name__ == "__main__":
    serve()
