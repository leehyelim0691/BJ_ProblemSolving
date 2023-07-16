const _input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {    
    const A = +input.split(" ")[0];
    let B = +input.split(" ")[1];
    let answer = 1;

    while(1){
        if(B === A) return answer
        else if(B < A) return -1;
        else if(B % 2 === 0) B /= 2;
        else{
            const str = B.toString();
            if(str[str.length-1] === '1') B = Math.floor(B / 10);
            else return -1;
        } 
        answer++;
    }
}

console.log(solution(_input));