import grpc
import time
import sys
from lamport_clock import LamportClock

# Set UTF-8 encoding for stdout on Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

import pdf_service_pb2
import pdf_service_pb2_grpc

class PDFClient:
    """
    gRPC Client for PDF Service with Lamport Logical Clock Synchronization.
    """
    def __init__(self, host="localhost", port=50051):
        self.channel = grpc.insecure_channel(f"{host}:{port}")
        self.stub = pdf_service_pb2_grpc.PDFServiceStub(self.channel)
        # Initialize Client Lamport Clock
        self.clock = LamportClock(initial_value=0)
        print(f"[CLIENT STARTUP] Client Initialized with {self.clock}")

    def merge_pdf(self, job_id, file_names, output_name):
        # Lamport Clock Rule 1: Increment before sending request
        send_clock = self.clock.increment()
        
        print(f"\n[CLIENT EVENT] Sending 'MergePDF' Request (Job ID: {job_id})")
        print(f"  |-- Sent Request with Lamport Clock: {send_clock}")

        req = pdf_service_pb2.MergePDFRequest(
            job_id=job_id,
            file_names=file_names,
            output_file_name=output_name,
            lamport_clock=send_clock
        )

        response = self.stub.MergePDF(req)

        # Lamport Clock Rule 2: Update upon receiving response
        clock_before = self.clock.get_clock()
        updated_clock = self.clock.update(response.lamport_clock)
        
        print(f"[CLIENT EVENT] Received 'MergePDF' Response")
        print(f"  |-- Response Message             : {response.message}")
        print(f"  |-- Received Server Lamport Clock: {response.lamport_clock}")
        print(f"  |-- Client Clock Before Update   : {clock_before}")
        print(f"  |-- Client Clock After Update    : {updated_clock}  <-- max({clock_before}, {response.lamport_clock}) + 1")
        return response

    def split_pdf(self, job_id, file_name, page_range):
        # Lamport Clock Rule 1: Increment before sending request
        send_clock = self.clock.increment()
        
        print(f"\n[CLIENT EVENT] Sending 'SplitPDF' Request (Job ID: {job_id})")
        print(f"  |-- Sent Request with Lamport Clock: {send_clock}")

        req = pdf_service_pb2.SplitPDFRequest(
            job_id=job_id,
            file_name=file_name,
            page_range=page_range,
            lamport_clock=send_clock
        )

        response = self.stub.SplitPDF(req)

        # Lamport Clock Rule 2: Update upon receiving response
        clock_before = self.clock.get_clock()
        updated_clock = self.clock.update(response.lamport_clock)
        
        print(f"[CLIENT EVENT] Received 'SplitPDF' Response")
        print(f"  |-- Response Message             : {response.message}")
        print(f"  |-- Received Server Lamport Clock: {response.lamport_clock}")
        print(f"  |-- Client Clock Before Update   : {clock_before}")
        print(f"  |-- Client Clock After Update    : {updated_clock}  <-- max({clock_before}, {response.lamport_clock}) + 1")
        return response

    def check_status(self, job_id):
        # Lamport Clock Rule 1: Increment before sending request
        send_clock = self.clock.increment()
        
        print(f"\n[CLIENT EVENT] Sending 'CheckStatus' Request (Job ID: {job_id})")
        print(f"  |-- Sent Request with Lamport Clock: {send_clock}")

        req = pdf_service_pb2.StatusRequest(
            job_id=job_id,
            lamport_clock=send_clock
        )

        response = self.stub.CheckStatus(req)

        # Lamport Clock Rule 2: Update upon receiving response
        clock_before = self.clock.get_clock()
        updated_clock = self.clock.update(response.lamport_clock)
        
        print(f"[CLIENT EVENT] Received 'CheckStatus' Response")
        print(f"  |-- Job Status                   : {response.status} ({response.progress_percent}%)")
        print(f"  |-- Received Server Lamport Clock: {response.lamport_clock}")
        print(f"  |-- Client Clock Before Update   : {clock_before}")
        print(f"  |-- Client Clock After Update    : {updated_clock}  <-- max({clock_before}, {response.lamport_clock}) + 1")
        return response

    def close(self):
        self.channel.close()

def main():
    print("=" * 65)
    print("  EXPERIMENT 2 & 3: gRPC RPC APIs & LAMPORT LOGICAL CLOCKS DEMO")
    print("=" * 65)
    
    client = PDFClient()

    # Call 1: Merge PDF
    client.merge_pdf(
        job_id="JOB-PDF-001",
        file_names=["annual_report_p1.pdf", "annual_report_p2.pdf"],
        output_name="annual_report_complete.pdf"
    )

    time.sleep(0.5)

    # Call 2: Split PDF
    client.split_pdf(
        job_id="JOB-PDF-002",
        file_name="annual_report_complete.pdf",
        page_range="1-5"
    )

    time.sleep(0.5)

    # Call 3: Check Status
    client.check_status(job_id="JOB-PDF-001")

    client.close()
    print("\n" + "=" * 65)
    print("  ALL RPC CALLS COMPLETED WITH LOGICAL CLOCK SYNCHRONIZATION")
    print("=" * 65)

if __name__ == "__main__":
    main()
