const _input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    const [N, K] = input.split(" ").map((item) => +item);
    const needVisit = [];
    const visited = Array.from(Array(100001).fill(0));

    needVisit.push([N, 0]);
    visited[N] = 1;

    while (needVisit.length) {
        const [node, time] = needVisit.shift();
        if (node === K) return time;
        for (next of [node * 2, node + 1, node - 1]) {
            if (!visited[next] && next >= 0 && next <= 100000) {
                needVisit.push([next, time + 1]);
                visited[next] = 1;
            }
        }
    }
}

console.log(solution(_input));
