import sys

N, M = map(int, sys.stdin.readline().split())
board = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

K = int(sys.stdin.readline())
skill = [list(map(int, sys.stdin.readline().split())) for _ in range(K)]

for s in skill:
    answer = 0
    for i in range(s[0]-1, s[2]):
        for j in range(s[1]-1, s[3]):
            answer += board[i][j]
    print(answer)

