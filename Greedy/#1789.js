const _input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    let sum = 0;
    let answer = 0;

    while (sum < +input) {
        answer++;
        sum += answer;
        if (sum > +input) answer--;
    }

    return answer;
}

console.log(solution(_input));
