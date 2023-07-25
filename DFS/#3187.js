const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [R, C] = input.shift().split(" ").map(Number);
    const graph = input.map((item) => item.split(""));
    const visited = Array.from({ length: R }, () => Array.from({ length: C }, () => 0));
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    let sheep, wolf;
    let sheeps = 0,
        wolves = 0;

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (graph[i][j] === "v" || graph[i][j] === "k") {
                sheep = 0;
                wolf = 0;

                DFS(i, j);

                if (wolf >= sheep) wolves += wolf;
                else sheeps += sheep;
            }
        }
    }

    function DFS(y, x) {
        if (!visited[y][x]) {
            if (graph[y][x] === "k") sheep++;
            else if (graph[y][x] === "v") wolf++;
        }

        visited[y][x] = 1;

        for (let i = 0; i < dy.length; i++) {
            const [ny, nx] = [y + dy[i], x + dx[i]];
            if (ny >= 0 && ny < R && nx >= 0 && nx < C && !visited[ny][nx] && graph[ny][nx] !== "#") DFS(ny, nx);
        }
    }

    return sheeps + " " + wolves;
}

console.log(solution(_input));
