const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [R, C, K] = input.shift().split(" ").map(Number);
    const graph = input.map((item) => item.split(""));
    const visited = Array.from({ length: R }, () => Array.from({ length: C }, () => 0));
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    let answer = 0;

    visited[R - 1][0] = 1;
    DFS(R - 1, 0, 1);

    function DFS(ny, nx, count) {
        if (ny === 0 && nx === C - 1) {
            if (count === K) answer++;
            return;
        }

        for (let i = 0; i < dy.length; i++) {
            const [y, x] = [ny + dy[i], nx + dx[i]];
            if (y >= 0 && y < R && x >= 0 && x < C && !visited[y][x] && graph[y][x] !== "T") {
                visited[y][x] = 1;
                DFS(y, x, count + 1);
                visited[y][x] = 0;
            }
        }
    }

    return answer;
}

console.log(solution(_input));
