const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const [V, E] = input.shift().split(" ").map(Number);
    const K = +input.shift();
    const graph = Array.from({ length: V + 1 }, () => Array(V + 1).fill(0));
    const answer = [];

    input.map((item) => {
        let [u, v, w] = item.split(" ").map(Number);
        graph[u][v] = w;
    });
    
    dfs(K);

    function dfs(node,){

    }
}

console.log(solution(_input));
