const _input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {    
    const num0 = input.split("1").filter((item => {
        return item!==''
    })).length;
    const num1 = input.split("0").filter((item => {
        return item!==''
    })).length;

    return Math.min(num0, num1)
}

console.log(solution(_input));