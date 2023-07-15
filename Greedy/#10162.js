const _input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    const seconds = [300, 60, 10];
    const answer = [];

    for(let i = 0; i < 3; i++){
        if(seconds[i] > input) answer.push(0);
        else{
            const num = Math.floor(input / seconds[i]);
            answer.push(num);
            input -= num * seconds[i];
        }
    }

    return input === 0 ? answer.join(' ') : -1 
}

console.log(solution(_input));
