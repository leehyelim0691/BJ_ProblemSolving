const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const [N, E] = input.shift().split(" ").map(Number);
    const graph = Array.from({ length: N + 1 }, () => []);
    let answer = [];

    input.map((item) => {
        const [a, b] = item.split(" ").map(Number);
        graph[b].push(a);
    });

    for (let i = 1; i <= N; i++) {
        answer.push([i, DFS(graph, i)]);
    }
}

const DFS = (graph, start) => {
    const visited = [];
    visited.push(start);

    while (needVisit.length) {
        for (let i = 0; i < graph[start].length; i++) {
            if (!visited.includes(graph[start][i])) visited.push(graph[start][i]);
        }
    }
};

console.log(solution(_input));
