const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const T = +input.shift();
    const answer = [];

    for (let i = 0; i < T; i++) {
        let count = 0;
        const [M, N, K] = input
            .shift()
            .split(" ")
            .map((item) => +item);
        let graph = Array.from(Array(N), () => Array(M).fill(0));

        const point = input.splice(0, K).map((item) => {
            const y = +item.split(" ")[1];
            const x = +item.split(" ")[0];
            graph[y][x] = 1;
            return [y, x];
        });

        for (let j = 0; j < K; j++) {
            if (graph[point[j][0]][point[j][1]] === 1) {
                count++;
                BFS(graph, N, M, [point[j][0], point[j][1]]);
            }
        }
        answer.push(count);
    }
    return answer.join("\n");
}

const BFS = (graph, N, M, axis) => {
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    const visited = Array.from(Array(N), () => Array(M).fill(0));
    let needVisit = [];

    needVisit.push(axis);
    visited[axis[0]][axis[1]] = 1;
    graph[axis[0]][axis[1]] = -1;

    while (needVisit.length) {
        const [ny, nx] = needVisit.shift();
        for (let i = 0; i < dy.length; i++) {
            const y = ny + dy[i];
            const x = nx + dx[i];
            if (y >= 0 && y < N && x >= 0 && x < M && !visited[y][x] && graph[y][x] === 1) {
                needVisit.push([y, x]);
                visited[y][x] = 1;
                graph[y][x] = -1;
            }
        }
    }
};

console.log(solution(_input));
