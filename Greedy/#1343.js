const _input = require("fs").readFileSync("sample.txt").toString().trim();

function solution(input) {
    const X = input.split(".");
    let count = 0;
    let answer = "";

    if (!input.includes("X")) return input;

    for (let i = 0; i < X.length; i++) {
        if (X[i] === "") count++;
        else {
            answer += ".".repeat(count);
            count = 1;
            let len = X[i].length;
            if (len % 2 !== 0) return -1;
            else {
                let index = 0;
                while (index < len) {
                    if (len - index >= 4) {
                        answer += "AAAA".repeat(Math.floor((len - index) / 4));
                        index += Math.floor((len - index) / 4) * 4;
                    } else {
                        answer += "BB";
                        break;
                    }
                }
            }
        }
    }
    return count > 1 ? answer + ".".repeat(count - 1) : answer;
}

console.log(solution(_input));
