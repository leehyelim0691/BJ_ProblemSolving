const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M, R] = input.shift().split(" ").map(Number);
    const graph = Array.from({ length: N + 1 }, () => []);
    const visited = Array.from({ length: N + 1 }, () => 0);
    let order = 0;

    input.map((item) => {
        const [a, b] = item.split(" ").map(Number);
        graph[a].push(b);
        graph[b].push(a);
    });

    graph.map((item) => {
        item.sort((a, b) => b - a);
    });

    DFS(R);

    return visited.slice(1).join("\n");

    function DFS(node) {
        visited[node] = ++order;

        for (let i = 0; i < graph[node].length; i++) if (visited[graph[node][i]] === 0) DFS(graph[node][i]);
    }
}

console.log(solution(_input));
