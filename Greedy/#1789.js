const _input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    let sum = 0;
    let i = 1;

    for (i = 1; i < +input; i++) {
        sum += i;
        if (sum > +input) break;
    }
    return i - 1;
}

console.log(solution(_input));
