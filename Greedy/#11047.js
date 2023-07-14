const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    let answer = 0;
    let [num, sum] = input[0].split(" ").map((item) => {
        return Number(item);
    });

    const coin = input
        .slice(1, num + 1)
        .map((item) => {
            return Number(item);
        })
        .sort((a, b) => b - a);

    console.log(coin);

    coin.forEach((item) => {
        if (sum === 0) return;
        if (item <= sum) {
            answer += Math.floor(sum / item);
            sum -= Math.floor(sum / item) * item;
        }
    });

    return answer;
}

console.log(solution(_input));
