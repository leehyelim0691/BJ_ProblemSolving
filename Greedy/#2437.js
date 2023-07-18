const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const n = +input.shift();
    let target = 1;

    const nums = input[0]
        .split(" ")
        .map((item) => +item)
        .sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (target < nums[i]) break;
        target += nums[i];
    }
    return target;
}

console.log(solution(_input));
