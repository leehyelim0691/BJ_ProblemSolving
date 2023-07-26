const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [M, N, K] = input.shift().split(" ").map(Number);
    const graph = Array.from({ length: M }, () => Array.from({ length: N }, () => 0));
    const visited = Array.from({ length: M }, () => Array.from({ length: N }, () => 0));
    let max = 0,
        count = 0;

    input.map((item) => {
        const [a, b] = item.split(" ").map(Number);
        graph[a - 1][b - 1] = 1;
    });

    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][j] && !visited[i][j]) {
                count = 0;
                DFS(i, j);
                if (max < count) max = count;
            }
        }
    }

    function DFS(y, x) {
        visited[y][x] = 1;
        count++;

        for (let i = 0; i < dy.length; i++) {
            const [ny, nx] = [y + dy[i], x + dx[i]];
            if (ny >= 0 && ny < M && nx >= 0 && nx < N && !visited[ny][nx] && graph[ny][nx]) DFS(ny, nx);
        }
    }

    return max;
}

console.log(solution(_input));
