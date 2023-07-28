const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const T = +input.shift();
    const graph = Array.from({ length: T + 1 }, () => []);
    const dist = Array.from({ length: T + 1 }, () => Array.from({ length: T + 1 }, () => 0));

    for (let i = 0; i < T; i++) {
        const tree = input[i].split(" ").map(Number);
        tree.pop();

        for (let j = 1; j < tree.length; j++) {
            graph[i + 1].push(tree[j]);
            dist[i + 1][tree[j]] = tree[j + 1];
            j++;
        }
    }
    return dist;
}

console.log(solution(_input));
