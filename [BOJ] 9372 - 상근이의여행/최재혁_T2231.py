import sys
from collections import defaultdict

def dfs(start, graph):
    stack = [start]
    visited = []
    cnt = -1
    while stack:
        current = stack.pop()
        for i in graph[current]:
            if i not in visited:
                stack.append(i)
                visited.append(i)
                cnt += 1
    return cnt

T = int(sys.stdin.readline().rstrip())
for _ in range(T):
    N, M = map(int, sys.stdin.readline().split())
    graph = defaultdict(list)
    for i in range(M):
        a, b = map(int, sys.stdin.readline().split())
        graph[a].append(b)
        graph[b].append(a)
    print(dfs(1, graph))


#탐색하는 코드