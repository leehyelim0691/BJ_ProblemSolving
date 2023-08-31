const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input.shift().split(" ").map(Number);
    const graph = input.map((item) => item.split(" ").map(Number));
    const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));
    let answer = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] && !visited[i][j]) answer.push(BFS(N, M, graph, visited, [i, j]));
        }
    }
    return answer.length === 0 ? "0\n0" : answer.length + "\n" + Math.max(...answer);
}

const BFS = (N, M, graph, visited, axis) => {
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    const needVisit = [];
    let count = 1;

    needVisit.push(axis);
    visited[axis[0]][axis[1]] = 1;

    while (needVisit.length) {
        const [ny, nx] = needVisit.shift();
        for (let i = 0; i < dy.length; i++) {
            const [y, x] = [ny + dy[i], nx + dx[i]];
            if (y >= 0 && y < N && x >= 0 && x < M && graph[y][x] && !visited[y][x]) {
                needVisit.push([y, x]);
                visited[y][x] = 1;
                count++;
                console.log("hi. y : ", y, "x : ", x);
            }
        }
    }
    return count;
};

console.log(solution(_input));
