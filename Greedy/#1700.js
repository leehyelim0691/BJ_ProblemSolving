const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const p_num = +input.shift().split(" ")[0];
    let plug = [];
    let answer = 0;
    const item = input[0].split(" ").map((item) => +item);

    for (let i = 0; i < item.length; i++) {
        if (plug.includes(item[i])) continue;
        if (plug.length < p_num) plug.push(item[i]);
        else {
            let target;
            let value = 0;

            plug.forEach((p) => {
                let next = Infinity;
                for (let j = i + 1; j < item.length; j++) {
                    if (item[j] === p) {
                        next = j;
                        break;
                    }
                }
                if (value < next) {
                    target = p;
                    value = next;
                }
            });
            plug = plug.filter((p) => p != target);
            plug.push(item[i]);
            answer++;
        }
    }
    return answer;
}

console.log(solution(_input));
