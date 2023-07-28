const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const [n, m] = input.shift().split(" ").map(Number);
    const nums = input
        .shift()
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);

    for (let i = 0; i < m; i++) {
        const sum = nums[0] + nums[1];
        nums[0] = sum;
        nums[1] = sum;
        nums.sort((a, b) => a - b);
    }
    return nums.reduce((a, b) => a + b);
}

console.log(solution(_input));
