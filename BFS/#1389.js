const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input.shift().split(" ").map(Number);
    const graph = Array.from({ length: N + 1 }, () => []);
    const bacon = Array.from({ length: N + 1 }, () => 0);

    input.map((item) => {
        const [a, b] = [+item.split(" ")[0], +item.split(" ")[1]];
        graph[a].push(b);
        graph[b].push(a);
    });

    for (let i = 1; i <= N; i++) BFS(i);

    function BFS(start) {
        const visited = Array.from({ length: N + 1 }, () => false);
        const needVisit = [[start, 0]];

        while (needVisit.length) {
            let [node, count] = needVisit.shift();
            if (!visited[node]) {
                visited[node] = true;
                bacon[start] += count++;
                graph[node].forEach((item) => {
                    needVisit.push([item, count]);
                });
            }
        }
    }

    bacon.shift();
    return bacon.indexOf(Math.min(...bacon)) + 1;
}

console.log(solution(_input));
