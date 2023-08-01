const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const [N, E] = input.shift().split(" ").map(Number);
    const graph = Array.from({ length: N + 1 }, () => []);
    let hacking = [],
        answer = [];
    let count = 0;

    input.map((item) => {
        const [a, b] = item.split(" ").map(Number);
        graph[b].push(a);
    });

    for (let i = 1; i <= N; i++) {
        count = 0;
        const visited = Array.from({ length: N + 1 }, () => 0);
        DFS(i, visited);
        hacking.push([i, --count]);
    }

    function DFS(node, visited) {
        visited[node] = 1;
        count++;

        for (let i = 0; i < graph[node].length; i++) {
            DFS(graph[node][i], visited);
        }
    }

    hacking.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < hacking.length; i++) {
        if (hacking[i][1] >= hacking[0][1]) answer.push(i + 1);
    }

    return answer.join(" ");
}

console.log(solution(_input));
