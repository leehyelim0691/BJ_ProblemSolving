const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let won = 0;
    let answer = 0;
    const n = +input[0];
    const km = input[1].split(" ").map((item) => {
        return +item;
    });
    const price = input[2].split(" ").map((item) => {
        return +item;
    });

    for (let i = 0; i < n - 1; i++) {
        if (i === 0) won = price[0];
        else if (price[i] < won) won = price[i];
        answer += won * km[i];
    }

    return answer;
}

console.log(solution(_input));
