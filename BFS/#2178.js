const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input
        .shift()
        .split(" ")
        .map((item) => +item);
    const graph = [];
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    let answer = 0;

    input.map((item, index) => {
        const row = item.split("").map((item) => +item);
        graph.push(row);
    });

    const visited = Array.from(Array(N), () => Array(M).fill(0)); // 행렬
    const needVisit = []; // [[a, b], [c, d]]

    needVisit.push([0, 0]);
    visited[0][0] = 1;

    while (needVisit.length) {
        const size = needVisit.length;
        for (let j = 0; j < size; j++) {
            const [ny, nx] = needVisit.shift();

            for (let i = 0; i < dy.length; i++) {
                const y = ny + dy[i];
                const x = nx + dx[i];

                if (y >= 0 && y < N && x >= 0 && x < M && !visited[y][x] && graph[y][x] === 1) {
                    needVisit.push([y, x]);
                    visited[y][x] = visited[ny][nx] + 1;
                }
            }
        }
    }
    return visited[N - 1][M - 1];
}

console.log(solution(_input));
