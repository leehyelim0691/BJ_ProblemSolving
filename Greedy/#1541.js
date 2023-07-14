const _input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    let expression = [];

    input.split("-").forEach((item, index) => {
        let sum = 0;
        item.split("+").forEach((num, idx) => {
            sum += Number(num);
        });
        expression.push(sum);
    });

    return expression.reduce((a, b) => a - b);
}

console.log(solution(_input));
