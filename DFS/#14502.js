const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input.shift().split(" ").map(Number);

    const board = input.map((item) => item.split(" ").map(Number));
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    let answer = 0;

    dfs(0);
    return answer;

    function dfs(count) {
        if (count === 3) {
            let array = board.map((b) => [...b]);
            let countOfSafe = countingSafeZone(array);
            answer = Math.max(answer, countOfSafe);
            return;
        }

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (!board[i][j]) {
                    board[i][j] = 1;
                    dfs(count + 1);
                    board[i][j] = 0;
                }
            }
        }
    }

    function countingSafeZone(array) {
        let count = 0;
        let needVisit = [];

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (array[i][j] === 2) needVisit.push([i, j]);
            }
        }

        while (needVisit.length) {
            const [ny, nx] = needVisit.shift();

            for (let i = 0; i < dy.length; i++) {
                const [y, x] = [ny + dy[i], nx + dx[i]];

                if (y >= 0 && y < N && x >= 0 && x < M && !array[y][x]) {
                    array[y][x] = 2;
                    needVisit.push([y, x]);
                }
            }
        }

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (!array[i][j]) count += 1;
            }
        }
        return count;
    }
}

console.log(solution(_input));
