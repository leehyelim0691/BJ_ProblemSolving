const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const n = +input[0];
    const num = input
        .slice(1)
        .map((item) => +item)
        .sort((a, b) => b - a);
    const positive = num.filter((item) => item > 0);
    let answer = 0;

    for (let i = 0; i < positive.length; i++) {
        if (i === positive.length - 1) answer += num[i];
        else if (num[i] === 1 || num[i + 1] === 1) answer += num[i];
        else {
            answer += num[i] * num[i + 1];
            i++;
        }
    }

    for (let i = n - 1; i >= positive.length; i--) {
        if (i === positive.length) answer += num[i];
        else {
            answer += num[i] * num[i - 1];
            i--;
        }
    }
    return answer;
}

console.log(solution(_input));
