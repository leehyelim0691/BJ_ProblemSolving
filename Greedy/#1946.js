const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {    
    const test = +input.shift();
    const answer = [];
    let target = 0;

    for(let i = 0; i < test; i++){
        const num = +input[target];
        const score = input.slice(target+1, target+num+1).map((item) => {
            return [+item.split(" ")[0], +item.split(" ")[1]]
        }).sort((a, b) => a[0] - b[0]);

        answer.push(getWinner(score));
        target += num + 1;

    }

    return answer.join('\n');
}

const getWinner = (score) => {
    let count = 1;
    let min = score[0][1];

    for(let i = 1; i < score.length; i++)
        if(score[i][1] < min){
            min = score[i][1];
            count++;
        }
    
    return count;
}

console.log(solution(_input));