const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let answer = 0;

    const a = input[1]
        .split(" ")
        .map((item) => {
            return +item;
        })
        .sort((a, b) => b - a);
    const b = input[2]
        .split(" ")
        .map((item) => {
            return +item;
        })
        .sort((a, b) => a - b);

    for (let i = 0; i < +input[0]; i++) answer += a[i] * b[i];

    return answer;
}

console.log(solution(_input));
