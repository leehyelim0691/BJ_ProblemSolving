const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [M, N, K] = input.shift().split(" ").map(Number);
    const graph = Array.from(Array(M), () => Array(N).fill(0));
    const visited = Array.from(Array(M), () => Array(N).fill(0));
    let answer = [];

    for (let i = 0; i < K; i++) {
        const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
        for (let y = y1; y < y2; y++) {
            for (let x = x1; x < x2; x++) {
                graph[y][x] = 1;
            }
        }
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (!graph[i][j] && !visited[i][j]) answer.push(BFS(M, N, graph, visited, [i, j]));
        }
    }
    return answer.length + "\n" + answer.sort((a, b) => a - b).join(" ");
}

const BFS = (M, N, graph, visited, axis) => {
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    const needVisit = [];
    let count = 1;

    needVisit.push(axis);
    visited[axis[0]][axis[1]] = 1;

    while (needVisit.length) {
        const [ny, nx] = needVisit.shift();
        for (let i = 0; i < dy.length; i++) {
            const y = ny + dy[i];
            const x = nx + dx[i];

            if (y >= 0 && y < M && x >= 0 && x < N && !visited[y][x] && !graph[y][x]) {
                needVisit.push([y, x]);
                visited[y][x] = 1;
                count++;
            }
        }
    }
    return count;
};

console.log(solution(_input));
