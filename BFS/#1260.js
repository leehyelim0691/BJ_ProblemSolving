const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M, V] = input
        .shift()
        .split(" ")
        .map((item) => +item);
    const graph = Array.from({ length: N + 1 }, () => []);

    input.map((item, index) => {
        const [a, b] = [+item.split(" ")[0], +item.split(" ")[1]];
        graph[a].push(b);
        graph[b].push(a);
    });

    graph.map((item) => {
        item.sort((a, b) => a - b);
    });

    const visited = [];
    const dfs = DFS(graph, V, visited);
    const bfs = BFS(graph, V);
    return dfs + "\n" + bfs;
}

const DFS = (graph, v, visited) => {
    visited.push(v);
    for (let i = 0; i < graph[v].length; i++) {
        if (!visited.includes(graph[v][i])) DFS(graph, graph[v][i], visited);
    }
    return visited.join(" ");
};

const BFS = (graph, v) => {
    const visited = [];
    let needVisit = [v];

    while (needVisit.length) {
        const node = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            needVisit = [...needVisit, ...graph[node]];
        }
    }
    return visited.join(" ");
};

console.log(solution(_input));
