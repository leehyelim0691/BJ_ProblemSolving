const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [M, N] = input
        .shift()
        .split(" ")
        .map((item) => +item);
    const graph = [];
    let answer = 0;
    let needVisit = [];

    input.map((item) => {
        const row = item.split(" ").map((r) => +r);
        graph.push(row);
    });

    for (let i = 0; i < N; i++) for (let j = 0; j < M; j++) if (graph[i][j] === 1) needVisit.push([i, j]);

    answer = BFS(graph, N, M, needVisit);

    for (let i = 0; i < N; i++) if (graph[i].indexOf(0) !== -1) return -1;

    return answer;
}

const BFS = (graph, N, M, needVisit) => {
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    const visited = Array.from(Array(N), () => Array(M).fill(0));
    let count = 0;
    let index = 0;

    // while (needVisit.length) {
    while (needVisit.length != index) {
        const size = needVisit.length;
        const idx = index;
        for (let j = idx; j < size; j++) {
            // const [ny, nx] = needVisit.shift();
            const [ny, nx] = needVisit[j];
            index++;
            for (let i = 0; i < dy.length; i++) {
                const y = ny + dy[i];
                const x = nx + dx[i];
                if (y >= 0 && y < N && x >= 0 && x < M && !visited[y][x] && graph[y][x] === 0) {
                    needVisit.push([y, x]);
                    visited[y][x] = 1;
                    graph[y][x] = 1;
                }
            }
        }
        count++;
    }
    return --count;
};

console.log(solution(_input));
