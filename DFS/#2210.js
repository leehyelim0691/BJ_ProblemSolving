const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const graph = input.map((item) => item.split(" "));
    let answer = [];

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            DFS(i, j, "");
        }
    }

    return answer.length;

    function DFS(y, x, num) {
        if (num.length === 6) {
            if (!answer.includes(num)) answer.push(num);
            return;
        } else {
            if (y - 1 >= 0) DFS(y - 1, x, num + graph[y][x]);
            if (y + 1 <= 4) DFS(y + 1, x, num + graph[y][x]);
            if (x - 1 >= 0) DFS(y, x - 1, num + graph[y][x]);
            if (x + 1 <= 4) DFS(y, x + 1, num + graph[y][x]);
        }
    }
}

console.log(solution(_input));
