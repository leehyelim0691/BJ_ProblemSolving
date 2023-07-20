const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = +input.shift();
    const graph = [];
    const visited_false = Array.from(Array(N), () => Array(N).fill(0));
    const visited_true = Array.from(Array(N), () => Array(N).fill(0));
    let answer = [0, 0];

    input.map((item) => {
        const row = item.split("");
        graph.push(row);
    });

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited_false[i][j]) {
                answer[0]++;
                BFS(graph, visited_false, N, [i, j], graph[i][j], false);
            }
            if (!visited_true[i][j]) {
                answer[1]++;
                BFS(graph, visited_true, N, [i, j], graph[i][j], true);
            }
        }
    }
    return answer.join(" ");
}

const BFS = (graph, visited, N, axis, type, rg) => {
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
            if (y >= 0 && y < N && x >= 0 && x < N && !visited[y][x]) {
                if ((!rg || (rg && type === "B")) && graph[y][x] === type) {
                    needVisit.push([y, x]);
                    visited[y][x] = 1;
                } else if (rg && type !== "B" && graph[y][x] !== "B") {
                    needVisit.push([y, x]);
                    visited[y][x] = 1;
                }
            }
        }
    }
};

console.log(solution(_input));
