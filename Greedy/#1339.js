const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {    
    const num = +input[0];
    let count = {};
    const alphabet = input.slice(1);
    let max = 10;
    const answer = [];

    for(let i = 0; i < num; i++){
        for(let j = 0; j < alphabet[i].length; j++){
            const digit = alphabet[i].length - 1 - j;
            if(count.hasOwnProperty(alphabet[i][j])) count[alphabet[i][j]] += Math.pow(10, digit);
            else count[alphabet[i][j]] = Math.pow(10, digit);
        }
    }
    
    Object.entries(count).sort((a, b) => b[1] - a[1]).map((item => {
        return [item[0], --max];
    })).forEach((item => {
        count[item[0]] = item[1] 
    }));

    for(let i = 0; i < num; i++){
        let sum = 0;
        for(let j = 0; j < alphabet[i].length; j++){
            const digit = alphabet[i].length - 1 - j;
            sum += Math.pow(10, digit) * count[alphabet[i][j]];
        }
        answer.push(sum);
    }
    return answer.reduce((a, b) => a+b);
}

console.log(solution(_input));