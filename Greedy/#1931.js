const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let answer = 0;
    let target = 0;
    let time = [];
    const sum = Number(input[0]);
    const meeting = input
        .slice(1)
        .map((item) => {
            return [Number(item.split(" ")[0]), Number(item.split(" ")[1])];
        })
        .sort((a, b) => {
            if (a[1] === b[1]) return a[0] - b[0];
            else return a[1] - b[1];
        });

    meeting.forEach((item, index) => {
        if (item[0] >= target) {
            answer++;
            target = item[1];
        }
    });

    return answer;
}

console.log(solution(_input));
