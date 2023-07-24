const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = +input.shift();
    const graph = [];
    let max = 0;
    let answer = 0;
    let visited = Array.from(Array(N), () => Array(N).fill(0));

    input.map((item) => {
        const row = item.split(" ").map((e) => +e);
        graph.push(row);
        if (Math.max(...row) > max) max = Math.max(...row);
    });

    for (let i = 0; i < max; i++) {
        let count = 0;
        visited = Array.from(Array(N), () => Array(N).fill(0));
        for (let j = 0; j < N; j++) {
            for (let k = 0; k < N; k++) {
                if (graph[j][k] > i && !visited[j][k]) {
                    count++;
                    BFS(N, graph, visited, i, [j, k]);
                }
            }
        }
        if (answer < count) answer = count;
    }
    return answer;
}

const BFS = (N, graph, visited, limit, axis) => {
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    const needVisit = [];

    needVisit.push(axis);
    visited[axis[0]][axis[1]] = 1;
    while (needVisit.length) {
        const [ny, nx] = needVisit.shift();
        for (let i = 0; i < dy.length; i++) {
            const y = ny + dy[i];
            const x = nx + dx[i];
            if (y >= 0 && y < N && x >= 0 && x < N && !visited[y][x] && graph[y][x] > limit) {
                needVisit.push([y, x]);
                visited[y][x] = 1;
            }
        }
    }
};

console.log(solution(_input));
