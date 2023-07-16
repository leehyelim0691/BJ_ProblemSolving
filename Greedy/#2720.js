const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {    
    const num = +input[0];
    const money = [25, 10, 5, 1];
    const answer = [];

    for(let i = 1; i <= num; i++){
        let change = +input[i];
        const count = [];
        for(let m = 0; m < money.length; m++){
            if(change < money[m]) count.push(0);
            else{
                const division = Math.floor(change / money[m]);
                count.push(division);
                change -= division * money[m];
            }
        }
        answer.push(count.join(" "));
    }
    
    return answer.join("\n");
}

console.log(solution(_input));