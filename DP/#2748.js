const _input = require("fs").readFileSync("sample.txt").toString().trim();

function solution(input) {
    const N = +input;
    const dp = Array.from({ length: N + 1 }, () => 0);

    dp[1] = 1;

    for (let i = 2; i <= N; i++) dp[i] = dp[i - 2] + dp[i - 1];
    return dp[N];
}

console.log(solution(_input));
