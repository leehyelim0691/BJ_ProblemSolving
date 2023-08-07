const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = +input.shift();
    const graph = input.map((item) => item.split(" ").map(Number));
    const answer = Array.from({ length: N }, () => Array(N).fill(0));

    for (let i = 0; i < N; i++) {
        const visited = Array(N).fill(0);
        dfs(i, i, visited);
    }

    function dfs(node, start, visited) {
        for (let i = 0; i < N; i++) {
            if (graph[node][i] && !visited[i]) {
                visited[i] = 1;
                answer[start][i] = 1;
                dfs(i, start, visited);
            }
        }
    }

    return answer.map((item) => item.join(" ")).join("\n");
}

console.log(solution(_input));
