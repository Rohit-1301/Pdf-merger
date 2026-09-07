import subprocess
import time
import sys

print("Starting 3 Backend Worker Servers...")

# Start three identical instances on different ports
worker1 = subprocess.Popen([sys.executable, "worker_server.py", "60201"])
worker2 = subprocess.Popen([sys.executable, "worker_server.py", "60202"])
worker3 = subprocess.Popen([sys.executable, "worker_server.py", "60203"])

time.sleep(2)  # Give them a moment to bind to their ports

print("\nStarting Load Balancer (Least Connections Strategy)...\n")
lb = subprocess.Popen([sys.executable, "load_balancer.py"])

try:
    lb.wait()
    print("\nLoad Balancer finished successfully.")
except KeyboardInterrupt:
    print("\nCaught interrupt, stopping...")
finally:
    # Cleanup background workers
    worker1.terminate()
    worker2.terminate()
    worker3.terminate()
