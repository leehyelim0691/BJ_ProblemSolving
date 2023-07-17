const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let a = input[0].split(" ")[0],
        b = input[0].split(" ")[1];
    const min = +a.replace(/6/g, "5") + +b.replace(/6/g, "5");
    const max = +a.replace(/5/g, "6") + +b.replace(/5/g, "6");

    return [min, max].join(" ");
}

console.log(solution(_input));
