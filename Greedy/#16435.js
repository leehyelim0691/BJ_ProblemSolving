const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let [N, L] = input
        .shift()
        .split(" ")
        .map((item) => +item);
    const fruits = input[0]
        .split(" ")
        .map((item) => +item)
        .sort((a, b) => a - b);

    for (let i = 0; i < N; i++) {
        if (L >= fruits[i]) L++;
        else break;
    }
    return L;
}

console.log(solution(_input));
