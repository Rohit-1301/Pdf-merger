import threading

class LamportClock:
    """
    Thread-safe implementation of Lamport Logical Clock Algorithm.
    Used to maintain consistent logical ordering of distributed events.
    """
    def __init__(self, initial_value: int = 0):
        self._clock = initial_value
        self._lock = threading.Lock()

    def increment(self) -> int:
        """
        Increments the clock by 1 for local events or before sending a message.
        Rule 1: L_i = L_i + 1
        """
        with self._lock:
            self._clock += 1
            return self._clock

    def update(self, received_clock: int) -> int:
        """
        Updates clock upon receiving a message with timestamp 'received_clock'.
        Rule 2: L_i = max(L_i, L_received) + 1
        """
        with self._lock:
            self._clock = max(self._clock, received_clock) + 1
            return self._clock

    def get_clock(self) -> int:
        """
        Returns the current logical clock value.
        """
        with self._lock:
            return self._clock

    def __str__(self) -> str:
        return f"LamportClock(time={self._clock})"
