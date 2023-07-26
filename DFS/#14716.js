const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [M, N] = input.shift().split(" ").map(Number);
    const graph = input.map((item) => item.split(" ").map(Number));
    const visited = Array.from({ length: M }, () => Array.from({ length: N }, () => 0));
    const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dx = [0, 1, 1, 1, 0, -1, -1, -1];
    let answer = 0;

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][j] === 1) {
                answer++;
                DFS(i, j);
            }
        }
    }

    function DFS(y, x) {
        graph[y][x] = 0;
        visited[y][x] = 1;

        for (let i = 0; i < dy.length; i++) {
            const [ny, nx] = [y + dy[i], x + dx[i]];
            if (ny >= 0 && ny < M && nx >= 0 && nx < N && !visited[ny][nx] && graph[ny][nx]) DFS(ny, nx);
        }
    }

    return answer;
}

console.log(solution(_input));
