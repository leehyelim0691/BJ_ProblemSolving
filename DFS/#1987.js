const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [R, C] = input.shift().split(" ").map(Number);
    const graph = input.map((item) => item.split(""));
    const visited = Array(26).fill(0);
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    let answer = 0;

    visited[graph[0][0].charCodeAt() - 65] = 1;
    dfs(0, 0, 1);

    function dfs(ny, nx, count) {
        answer = Math.max(answer, count);

        for (let i = 0; i < dy.length; i++) {
            const [y, x] = [ny + dy[i], nx + dx[i]];
            if (y >= 0 && y < R && x >= 0 && x < C && !visited[graph[y][x].charCodeAt() - 65]) {
                visited[graph[y][x].charCodeAt() - 65] = 1;
                dfs(y, x, count + 1);
                visited[graph[y][x].charCodeAt() - 65] = 0;
            }
        }
    }
    return answer;
}

console.log(solution(_input));
