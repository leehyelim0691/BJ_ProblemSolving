const { kMaxLength } = require("buffer");

const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const num = +input[0].split(" ")[0];
    const list = input.slice(1);

    const package = Math.min(...list.map((item) => +item.split(" ")[0]));
    const piece = Math.min(...list.map((item) => +item.split(" ")[1]));

    const quotient = Math.floor(num / 6);
    const remainder = num % 6;

    return Math.min(quotient * package, quotient * 6 * piece) + Math.min(package, remainder * piece);
}

console.log(solution(_input));