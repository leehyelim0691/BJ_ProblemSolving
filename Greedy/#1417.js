const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const num = +input.shift();
    let target = +input.shift();
    const count = input.map((item) => +item);
    let answer = 0;
    
    while(1){
        const max = Math.max(...count);
        if(target > max) break;
        count[count.indexOf(max)]--;
        answer++;
        target++;
    }

    return answer;
}

console.log(solution(_input));
