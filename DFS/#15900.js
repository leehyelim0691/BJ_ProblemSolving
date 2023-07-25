const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const N = +input.shift();
    const graph = Array.from({ length: N + 1 }, () => []);
    const visited = Array.from({ length: N + 1 }, () => 0);
    let heightSum = 0;

    input.map((item) => {
        const [a, b] = item.split(" ").map(Number);
        graph[a].push(b);
        graph[b].push(a);
    });

    DFS(1, 0);
    return heightSum % 2 !== 0 ? "Yes" : "No";

    function DFS(node, height) {
        visited[node] = 1;
        let isLeaf = true;

        for (let i = 0; i < graph[node].length; i++) {
            if (!visited[graph[node][i]]) {
                isLeaf = false;
                DFS(graph[node][i], height + 1);
            }
        }
        if (isLeaf) {
            heightSum += height;
        }
    }
}

console.log(solution(_input));
