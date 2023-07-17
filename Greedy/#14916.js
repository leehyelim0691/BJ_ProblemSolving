const _input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    let num = +input;
    let answer = 0;

    while(1){
        if (num === 0) return answer;
        else if (num < 2) return -1;
        else{
            if (num % 2 === 1 || num % 5 === 0) {
                answer += 1;
                num -= 5;
            } else if (num % 2 === 0) {
                answer += 1;
                num -= 2;
            }
        }
    }

    // while (1) {
    //     if (num === 0) return answer;
    //     else if (num < 2) return -1;
    //     else if (num % 7 === 0) return answer + (num / 7) * 2;
    //     else if (num % 5 === 0) return answer + num / 5;
    //     else {
    //         if (num >= 5 && (num - 5 >= 5 || (num - 5) % 7 === 0 || (num - 5) % 2 === 0)) {
    //             answer += 1;
    //             num -= 5;
    //         } else {
    //             answer += Math.floor(num / 2);
    //             num -= Math.floor(num / 2) * 2;
    //         }
    //     }
    // }
    return answer;
}

console.log(solution(_input));
