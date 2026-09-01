import subprocess
import sys
import time
import os
from run_mutex_demo import run_mutex_demo

def run_exp2_3():
    print("=========================================================================")
    print("  EXPERIMENT 2 & 3: DISTRIBUTED COMPUTING DEMONSTRATION")
    print("  Application: PDF Merger & Processing Service")
    print("  Features: gRPC RPC APIs & Lamport Logical Clock Synchronization")
    print("=========================================================================\n")

    env = os.environ.copy()
    env["PYTHONUNBUFFERED"] = "1"

    # Step 1: Start PDF gRPC Server process
    print("[RUNNER] Starting PDF gRPC Server process (pdf_server.py)...")
    server_process = subprocess.Popen(
        [sys.executable, "pdf_server.py"],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        env=env,
        bufsize=1
    )

    # Wait briefly for server to bind port
    time.sleep(1.5)

    # Step 2: Run PDF gRPC Client process
    print("[RUNNER] Starting PDF gRPC Client process (pdf_client.py)...")
    client_process = subprocess.run(
        [sys.executable, "pdf_client.py"],
        capture_output=True,
        text=True,
        env=env
    )

    # Step 3: Terminate server after client finishes
    time.sleep(0.5)
    server_process.terminate()
    server_stdout, _ = server_process.communicate()

    # Step 4: Display Output Logs
    print("\n" + "=" * 35 + " SERVER LOGS " + "=" * 35)
    print(server_stdout)
    
    print("=" * 35 + " CLIENT LOGS " + "=" * 35)
    print(client_process.stdout)

    if client_process.stderr:
        print("=" * 35 + " CLIENT ERRORS " + "=" * 35)
        print(client_process.stderr)

    print("\n=========================================================================")
    print("  EXPERIMENT 2 & 3 COMPLETED SUCCESSFULLY")
    print("=========================================================================\n")

if __name__ == "__main__":
    run_exp2_3()
    time.sleep(1.0)
    run_mutex_demo()
