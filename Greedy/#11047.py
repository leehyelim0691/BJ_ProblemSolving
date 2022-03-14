n, k = map(int, input().split())
coin = []
count = 0

for i in range(n):
    coin.append(int(input()))

for i in reversed(range(n)):
    count += k // coin[i]
    k %= coin[i]


print(count)
