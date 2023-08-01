const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input.shift().split(" ").map(Number);
    let X,
        answer = 0;
    const graph = Array.from({ length: N + 1 }, () => []);
    const visited = Array.from({ length: N + 1 }, () => 0);

    for (let i = 0; i <= M; i++) {
        if (i === M) X = +input[i];
        else {
            let [a, b] = input[i].split(" ").map(Number);
            graph[b].push(a);
        }
    }
    DFS(X);
    return answer;

    function DFS(node) {
        visited[node] = 1;

        if (!graph[node].length) return;

        for (let i = 0; i < graph[node].length; i++) {
            if (!visited[graph[node][i]]) {
                answer++;
                DFS(graph[node][i]);
            }
        }
    }
}

console.log(solution(_input));
