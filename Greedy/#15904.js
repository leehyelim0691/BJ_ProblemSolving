const _input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    const word = "UCPC";
    let target = 0;

    for (let i = 0; i < word.length; i++) {
        let index = input.indexOf(word[i], target);
        if (index < 0) return "I hate UCPC";
        else target = index;
    }
    return "I love UCPC";
}

console.log(solution(_input));
