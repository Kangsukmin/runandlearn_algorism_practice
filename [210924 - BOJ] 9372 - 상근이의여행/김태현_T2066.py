import sys

T = int(sys.stdin.readline())
result = []
for i in range(T):
    N, M = map(int, sys.stdin.readline().split())
    result.append(N-1)
    
    for j in range(M):
        a, b= map(int, sys.stdin.readline().split())

for r in result:
    print(r)