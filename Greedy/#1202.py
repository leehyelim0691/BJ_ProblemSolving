import sys
import heapq

N, K = map(int, sys.stdin.readline().split())
jewelry = []
for _ in range(N):
    heapq.heappush(jewelry, list(map(int, sys.stdin.readline().split())))
bags = []
for _ in range(K):
    bags.append(int(sys.stdin.readline()))
bags.sort()

answer = 0
tmp_jew = []
for bag in bags:
    while jewelry and bag >= jewelry[0][0]:
        heapq.heappush(tmp_jew, -heapq.heappop(jewelry)[1])
    if tmp_jew:
        answer -= heapq.heappop(tmp_jew)
    elif not jewelry:
        break
print(answer)