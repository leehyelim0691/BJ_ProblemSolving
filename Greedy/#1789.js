const _input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    let sum = 0;
    let i = 0;
    let answer = 0;

    for (i = 0; i <= +input; i++) {
        sum += i;
        if (sum > +input) {
            answer = i - 1;
            break;
        }
    }
    return answer;
}

console.log(solution(_input));
