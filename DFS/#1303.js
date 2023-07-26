const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input.shift().split(" ").map(Number);
    const graph = input.map((item) => item.split(""));
    const visited = Array.from({ length: M }, () => Array.from({ length: N }, () => 0));
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];
    let B = 0,
        W = 0;
    let count = 0;

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j]) {
                count = 0;
                if (graph[i][j] === "B") {
                    DFS(i, j, "B");
                    B += Math.pow(count, 2);
                } else {
                    DFS(i, j, "W");
                    W += Math.pow(count, 2);
                }
            }
        }
    }

    function DFS(y, x, type) {
        visited[y][x] = 1;
        count++;

        for (let i = 0; i < dy.length; i++) {
            const [ny, nx] = [y + dy[i], x + dx[i]];
            if (ny >= 0 && ny < M && nx >= 0 && nx < N && !visited[ny][nx] && graph[ny][nx] === type) DFS(ny, nx, type);
        }
    }

    return W + " " + B;
}

console.log(solution(_input));
