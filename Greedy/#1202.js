const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    let answer = 0;
    const jNum = +input[0].split(" ")[0];
    const bNum = +input[0].split(" ")[1];

    const jewelry = input
        .slice(1, input.length - bNum)
        .map((item) => {
            return [+item.split(" ")[0], +item.split(" ")[1]];
        })
        .sort((a, b) => {
            return b[1] - a[1];
        });

    const bag = input
        .slice(1 + jNum)
        .map((item) => {
            return +item;
        })
        .sort((a, b) => {
            return b - a;
        });

    for (let i = 0; i < bNum; i++) {
        let j = 0;
        while(1){
            if (jewelry[j][0]!== -1 && bag[i] >= jewelry[j][0]) {
                answer += jewelry[j][1];
                jewelry[j][0] = -1;
                break;
            }
            j++;
        }
    }
    return answer;
}

console.log(solution(_input));
