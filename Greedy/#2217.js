const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const n = +input[0];

    return Math.max(
        ...input
            .slice(1)
            .map((item) => {
                return +item;
            })
            .sort((a, b) => b - a)
            .map((item, index) => {
                return item * (index + 1);
            })
    );
}

console.log(solution(_input));
