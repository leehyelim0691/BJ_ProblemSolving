const _input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {    
    if(!input.includes('0')) return -1;
    const arr = input.split("").sort((a, b) => b - a).map((item => {return +item}));
    return arr.reduce((a, b) => a+b) % 3 === 0 ?  arr.join('') : -1
}

console.log(solution(_input));
