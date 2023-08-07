const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const n = +input.shift();
    const graph = input.map((item) => item.split(" ").map(Number));
    const dp = Array.from({ length: n }, () => Array(n).fill(-1));
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    let answer = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log("00");
            answer = Math.max(answer, dfs(i, j));
        }
    }
    return answer;

    function dfs(ny, nx) {
        console.log("0. ", graph[ny][nx]);
        if (dp[ny][nx] !== -1) {
            console.log("1. [", ny, ",", nx, "]");
            return dp[ny][nx];
        }

        let count = 0;

        for (let i = 0; i < dy.length; i++) {
            const [y, x] = [ny + dy[i], nx + dx[i]];

            if (y < 0 || y >= n || x < 0 || x >= n) continue;
            if (graph[ny][nx] < graph[y][x]) {
                console.log("11");
                count = Math.max(count, dfs(y, x));
            }
        }

        dp[ny][nx] = count + 1;
        console.log("dp[", ny, "][", nx, "] : ", count + 1);
        return dp[ny][nx];
    }
}

console.log(solution(_input));
