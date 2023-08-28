const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const N = +input.shift();
    const population = input.shift().split(" ").map(Number);
    const graph = Array.from({ length: N + 1 }, () => []);
    let answer = Number.MAX_SAFE_INTEGER;

    return 1 << N;
}

console.log(solution(_input));
