const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const [N, K] = input
        .shift()
        .split(" ")
        .map((item) => +item);
    const answer = input[0].split("").map((item) => +item);
    let index = 0;

    while (answer.length > N - K) {
        if (answer[index] < answer[index + 1]) {
            answer.splice(index, 1);
            index = 0;
        } else index++;
    }
    return answer.join("");
}

console.log(solution(_input));
