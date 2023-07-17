const _input = require("fs").readFileSync("sample.txt").toString().trim();

function solution(input) {
    const isPalindrome = (str) => {
        let start = 0;
        let end = str.length - 1;

        while (start <= end) {
            if (str[start++] !== str[end--]) return false;
        }
    };

    for (let i = 0; i < input.length; i++) {
        if(isPalindrome(input.substring(i, input.length))) return input.length + i;
        else return "I'm Sorry Hansoo"
    }
}

console.log(solution(_input));
