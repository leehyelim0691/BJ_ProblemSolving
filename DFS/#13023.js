const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input.shift().split(" ").map(Number);
    const graph = Array.from({ length: N }, () => []);
    const visited = Array.from({ length: N }, () => 0);
    let flag = 0;

    input.map((item) => {
        const [a, b] = item.split(" ").map((n) => +n);
        graph[a].push(b);
        graph[b].push(a);
    });

    for (let i = 0; i < N; i++) dfs(i, 0);

    return flag;

    function dfs(node, count) {
        if (flag) return;

        visited[node] = 1;

        if (count === 4) {
            flag = 1;
            return;
        }

        for (let i = 0; i < graph[node].length; i++) {
            if (!visited[graph[node][i]]) dfs(graph[node][i], count + 1);
        }

        visited[node] = 0;
    }
}

console.log(solution(_input));
