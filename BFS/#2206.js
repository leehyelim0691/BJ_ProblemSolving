const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input
        .shift()
        .split(" ")
        .map((item) => +item);
    const graph = [];

    input.map((item) => {
        const row = item.split("").map((e) => +e);
        graph.push(row);
    });

    return BFS(graph, N, M);
}

const BFS = (graph, N, M) => {
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => Array.from({ length: 2 }, () => 0)));
    const needVisit = [];
    let index = 0;

    needVisit.push([0, 0, 0]);
    visited[0][0][0] = 1;

    while (index !== needVisit.length) {
        const [ny, nx, nbreak] = needVisit[index];
        if (ny === N - 1 && nx === M - 1) return visited[ny][nx][nbreak];

        for (let i = 0; i < dy.length; i++) {
            const y = ny + dy[i];
            const x = nx + dx[i];

            if (y >= 0 && y < N && x >= 0 && x < M) {
                if (graph[y][x] === 0 && visited[y][x][nbreak] === 0) {
                    visited[y][x][nbreak] = visited[ny][nx][nbreak] + 1;
                    needVisit.push([y, x, nbreak]);
                } else if (graph[y][x] === 1 && nbreak === 0) {
                    visited[y][x][nbreak + 1] = visited[ny][nx][nbreak] + 1;
                    needVisit.push([y, x, nbreak + 1]);
                }
            }
        }
        index++;
    }
    return -1;
};
console.log(solution(_input));
