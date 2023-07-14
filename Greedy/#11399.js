const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let answer = 0;
    const time = input[1]
        .split(" ")
        .map((item) => {
            return Number(item);
        })
        .sort((a, b) => a - b);

    for (let i = 0; i < time.length; i++) answer += time[i] * (time.length - i);

    return answer;
}

console.log(solution(_input));
