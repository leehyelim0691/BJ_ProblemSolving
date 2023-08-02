const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const T = +input.shift();
    const answer = [];

    for (let i = 0; i < T * 2; i += 2) {
        let [k, n] = [+input[i], +input[i + 1]];

        const dp = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

        for (let i = 1; i <= n; i++) dp[0][i] = i;

        for (let i = 1; i <= k; i++) {
            for (let j = 1; j <= n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        answer.push(dp[k][n]);
    }

    return answer.join("\n");
}

console.log(solution(_input));
