const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [R, C] = input.shift().split(" ").map(Number);
    const graph = input.map((item) => item.split(""));
    const visited = Array.from({ length: R }, () => Array.from({ length: C }, () => 0));
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    let sheeps = 0,
        wolves = 0;
    let sheep, wolf;

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (!visited[i][j] && (graph[i][j] === "v" || graph[i][j] === "o")) {
                sheep = 0;
                wolf = 0;

                DFS(i, j);

                if (sheep > wolf) sheeps += sheep;
                else wolves += wolf;
            }
        }
    }

    function DFS(y, x) {
        visited[y][x] = 1;

        if (graph[y][x] === "v") wolf++;
        else if (graph[y][x] === "o") sheep++;

        for (let i = 0; i < dy.length; i++) {
            const [ny, nx] = [y + dy[i], x + dx[i]];
            if (ny >= 0 && ny < R && nx >= 0 && nx < C && !visited[ny][nx] && graph[ny][nx] !== "#") DFS(ny, nx);
        }
    }

    return sheeps + " " + wolves;
}

console.log(solution(_input));
