from collections import deque

class MyStack:

    def __init__(self):
        self.que1 = deque([])
        self.que2 = deque([])

    def push(self, x: int) -> None:
        if len(self.que1) == 0:
            self.que2.append(x)
        else:
            self.que1.append(x)

    def pop(self) -> int:
        # que1 que2 모두 비어있으면
        if len(self.que1) == 0 and len(self.que2) == 0:
            return None
        
        # que1이 비어 있으면 que2에서 1개 빼고 que2로 옮김
        if len(self.que1) == 0:
            for _ in range(len(self.que2)-1):
                self.que1.append(self.que2.popleft())
            return self.que2.popleft()
        # que2가 비어 있으면 que1에서 1개 빼고 que2로 옮김
        else:
            for _ in range(len(self.que1)-1):
                self.que2.append(self.que1.popleft())
            return self.que1.popleft()

    def top(self) -> int:
        if len(self.que1) != 0:
            return self.que1[-1]
        elif len(self.que2) != 0:
            return self.que2[-1]
        else:
            return None

    def empty(self) -> bool:
        return not (len(self.que1) or len(self.que2))