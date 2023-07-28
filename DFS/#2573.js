const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input.shift().split(" ").map(Number);
    const graph = input.map((item) => item.split(" ").map(Number));
    let visited = [],
        height = [];
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    let answer = 0;

    while (1) {
        if (isMelt()) return 0;

        visited = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));
        height = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (graph[i][j]) oneYearLater(i, j);
            }
        }

        if (countIce()) return ++answer;
        answer++;
    }

    function oneYearLater(ny, nx) {
        let count = 0;
        height[ny][nx] = 1;

        for (let i = 0; i < dy.length; i++) {
            const [y, x] = [ny + dy[i], nx + dx[i]];
            if (y >= 0 && y < N && x >= 0 && x < M && !height[y][x] && !graph[y][x]) count++;
        }
        graph[ny][nx] = graph[ny][nx] - count > 0 ? graph[ny][nx] - count : 0;
    }

    function bfs(axis) {
        const needVisit = [];
        needVisit.push(axis);
        visited[axis[0]][axis[1]] = 1;

        while (needVisit.length) {
            const [ny, nx] = needVisit.shift();
            for (let i = 0; i < dy.length; i++) {
                const [y, x] = [ny + dy[i], nx + dx[i]];
                if (y >= 0 && y < N && x >= 0 && x < M && !visited[y][x] && graph[y][x]) {
                    needVisit.push([y, x]);
                    visited[y][x] = 1;
                }
            }
        }
    }

    function countIce() {
        let count = 0;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (graph[i][j] && !visited[i][j]) {
                    if (count === 1) return true;
                    count++;
                    bfs([i, j]);
                }
            }
        }
        return false;
    }

    function isMelt() {
        let sum = 0;
        for (let i = 0; i < N; i++) sum += graph[i].reduce((a, b) => a + b);

        return sum === 0 ? true : false;
    }
}

console.log(solution(_input));
