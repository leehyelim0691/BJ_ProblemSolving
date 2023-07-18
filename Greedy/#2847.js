const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const n = +input.shift();
    const nums = input.map((item) => +item);
    let answer = 0;

    for (let i = n - 1; i > 0; i--) {
        if (nums[i - 1] >= nums[i]) {
            answer += nums[i - 1] - nums[i] + 1;
            nums[i - 1] = nums[i] - 1;
        }
    }
    return answer;
}

console.log(solution(_input));