const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const N = +input.shift();
    const graph = Array.from({ length: N + 1 }, () => []);

    if (N === 1) return 0;

    input.map((item) => {
        const [a, b, c] = item.split(" ").map(Number);
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    });

    graph.sort((a, b) => a[0] - b[0]);

    function BFS(start) {
        const visited = Array.from({ length: N + 1 }, () => 0);
        const needVisit = [];

        needVisit.push([start, 0]);

        let max = { node: 0, dist: 0 };

        while (needVisit.length) {
            const [node, dist] = needVisit.shift();
            if (visited[node]) continue;
            visited[node] = 1;
            if (max.dist < dist) max = { node, dist };
            for (let [nextNode, nextDist] of graph[node]) {
                needVisit.push([nextNode, dist + nextDist]);
            }
        }
        return max;
    }
    return BFS(1).dist;
    // return BFS(BFS(1).node).dist;
}

console.log(solution(_input));
