const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {    
    let answer = 0;
    const n = +input[0];
    const card = input.slice(1).map((item =>{
        return +item;
    })).sort((a, b) => a - b);

    if(n === 1) return card[0];

    for(let i = 0; i < n; i++){
        if(i === 0 || i === 1) answer += card[i] * (n - 1);
        else answer += card[i] * (n - i);
    }
    return answer;
}

console.log(solution(_input));
