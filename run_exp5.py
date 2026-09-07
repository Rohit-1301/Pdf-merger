import subprocess
import time
import sys

detect = "detect" in sys.argv

print(f"Starting Lock Manager (Detection: {'ON' if detect else 'OFF'})...")
manager = subprocess.Popen([sys.executable, "lock_manager.py"] + (["detect"] if detect else []))
time.sleep(2)  # Wait for manager to start

print("\nStarting AutoSave (Node 1) and FinalSubmit (Node 2) concurrently...")
worker1 = subprocess.Popen([sys.executable, "worker.py", "1", "autosave"])
worker2 = subprocess.Popen([sys.executable, "worker.py", "2", "submission"])

try:
    # If it's a deadlock without detection, this will hang forever until you press Ctrl+C
    worker1.wait()
    worker2.wait()
    print("\nBoth workers finished successfully.")
except KeyboardInterrupt:
    print("\nCaught interrupt (Ctrl+C), stopping...")
finally:
    manager.terminate()
    worker1.terminate()
    worker2.terminate()
