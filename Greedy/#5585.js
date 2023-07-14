const _input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    let change = 1000 - Number(input);
    const money = [500, 100, 50, 10, 5, 1];
    let answer = 0;

    for (let i = 0; i < money.length; i++) {
        if (change < money[i]) continue;
        const target = Math.floor(change / money[i]);
        answer += target;
        change -= money[i] * target;
    }

    return answer;
}

console.log(solution(_input));
