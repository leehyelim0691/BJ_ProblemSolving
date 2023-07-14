const _input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    let answer = 0;

    if (input % 5 === 0) return input / 5;
    while (1) {
        input = input - 3;
        answer++;

        if (input % 5 === 0) return answer + input / 5;
        if (input === 1 || input === 2) return -1;
    }
}

console.log(solution(_input));
