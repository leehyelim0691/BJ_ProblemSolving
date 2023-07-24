const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const n = +input.shift();
    const [a, b] = input.shift().split(" ").map(Number);
    const m = +input.shift();
    const visited = Array.from({ length: n + 1 }, () => 0);
    const graph = Array.from({ length: n + 1 }, () => []);

    input.map((item) => {
        const [x, y] = item.split(" ").map(Number);
        graph[x].push(y);
        graph[y].push(x);
    });

    const needVisit = [];
    needVisit.push([a, b, 0]);

    function DFS() {
        while (needVisit.length) {
            const [start, end, count] = needVisit.shift();
            if (start === end) return count;
            for (let i = 0; i < graph[start].length; i++) {
                if (!visited[graph[start][i]]) {
                    visited[graph[start][i]] = 1;
                    needVisit.push([graph[start][i], end, count + 1]);
                }
            }
        }
        return -1;
    }

    return DFS();
}

console.log(solution(_input));
