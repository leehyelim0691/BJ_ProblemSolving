const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const num = +input.shift();
    const count = input.map((item) => +item).sort((a, b) => a - b);
    let answer = 0;

    for (let i = 0; i < num; i++) answer += Math.abs(count[i] - (i + 1));

    return answer;
}

console.log(solution(_input));
