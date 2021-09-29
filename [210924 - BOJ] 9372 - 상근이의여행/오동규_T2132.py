#%%
""" dfs recursive """

from sys import stdin
from collections import defaultdict

rl = input

def dfs_recursive(v, discovered):
    discovered.append(v)
    for w in graph[v]:
        if w not in discovered:
            graph['count'] += 1
            discovered = dfs_recursive(w, discovered)
    return discovered


for _ in range(int(rl())):
    
    N, M = map(int, rl().split())
    
    graph = defaultdict(set)
    graph['count'] = 0

    for _ in range(M):
        dep, des = map(int, rl().split())
        graph[dep].append(des)
        graph[des].append(dep)

    start = 1
    discovered = []
    dfs_recursive(start, discovered)

    print(graph['count'])


#%%
""" bfs """

from sys import stdin
from collections import defaultdict, deque

rl = input

for _ in range(int(rl())):
    
    N, M = map(int, rl().split())
    
    count = 0
    graph = defaultdict(set)

    for _ in range(M):
        dep, des = map(int, rl().split())
        graph[dep].add(des)
        graph[des].add(dep)
    
    start = 1
    queue = deque([start])
    discovered = [start]
    while queue :
        v = queue.popleft()
        for w in graph[v]:
            if w not in discovered:
                discovered.append(w)
                queue.append(w)
                count += 1
    
    print(count)
