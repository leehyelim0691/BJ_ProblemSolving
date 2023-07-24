const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = +input.shift();
    const graph = Array.from({ length: N + 1 }, () => []);

    input.map((item) => {
        const a = +item.split(" ")[0];
        const b = +item.split(" ")[1];
        graph[a].push(b);
        graph[b].push(a);
    });

    const result = BFS(graph, N);
    return result.slice(2).join("\n");
}

const BFS = (graph, N) => {
    const visited = Array(N + 1).fill(0);
    const needVisit = [];

    needVisit.push(1);
    visited[1] = 1;

    while (needVisit.length) {
        const node = needVisit.shift();
        for (let i = 0; i < graph[node].length; i++) {
            if (!visited[graph[node][i]]) {
                needVisit.push(graph[node][i]);
                visited[graph[node][i]] = node;
            }
        }
    }
    return visited;
};

console.log(solution(_input));
