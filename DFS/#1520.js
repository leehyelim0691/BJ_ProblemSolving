const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const [M, N] = input.shift().split(" ").map(Number);
    const graph = input.map((item) => item.split(" ").map(Number));
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    const dp = Array.from({ length: M }, () => Array.from({ length: N }, () => -1));

    dp[M - 1][N - 1] = 1;

    function dfs(y, x) {
        console.log("=================");
        console.log("0. [", y, ",", x, "]");
        if (dp[y][x] !== -1) {
            console.log("1. [", y, ",", x, "]");
            return dp[y][x];
        }
        let count = 0;

        for (let i = 0; i < dy.length; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            console.log("2. [", ny, ",", nx, "]");

            if (ny >= 0 && ny < M && nx >= 0 && nx < N && graph[y][x] > graph[ny][nx]) {
                console.log("3. [", ny, ",", nx, "]");

                count += dfs(ny, nx);
                console.log("hi. [", ny, ",", nx, "]");
            }
        }
        console.log("4. [", y, ",", x, "]", " count : ", count);

        dp[y][x] = count;
        console.log("5. [", y, ",", x, "]");

        return count;
    }

    return dfs(0, 0);
}

console.log(solution(_input));
