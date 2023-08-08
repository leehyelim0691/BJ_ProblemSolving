const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    const [N, M] = input.shift().split(" ").map(Number);
    const graph = input.map((item) => item.split(" ").map(Number));
    let answer = 0;
    // 0: 내부공기, 1: 치즈, 2: 외부공기, 3: 녹은상태

    while (1) {
        let isMelt = false;

        checkInOutAir();

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (graph[i][j] === 1) {
                    // 치즈일 경우
                    let count = 0; // 외부공기 접촉 변의 수
                    for (let k = 0; k < dy.length; k++) {
                        const [y, x] = [i + dy[k], j + dx[k]];
                        if (y < 0 || y >= N || x < 0 || x >= M) continue;
                        if (graph[y][x] === 2) count++;
                    }
                    if (count >= 2) {
                        graph[i][j] = 3; // 녹은 상태
                        isMelt = true;
                    }
                }
            }
        }

        if (isMelt) {
            graph.forEach((element) =>
                element.forEach((item) => {
                    if (item === 3) item = 2;
                })
            );
        }

        answer++;

        let hasCheese = 0;

        graph.forEach((element) =>
            element.forEach((item) => {
                if (item === 1) hasCheese = 1;
            })
        );
        if (!hasCheese) break;
    }

    return answer;

    function checkInOutAir() {
        const visited = Array.from({ length: N }, () => Array(M).fill(0));
        const needVisit = [];

        needVisit.push([0, 0]);

        while (needVisit.length) {
            const [ny, nx] = needVisit.shift();

            for (let i = 0; i < dy.length; i++) {
                const [y, x] = [ny + dy[i], nx + dx[i]];
                if (y < 0 || y >= N || x < 0 || x >= M) continue;
                if (!visited[y][x] && graph[y][x] !== 1) {
                    visited[y][x] = 1;
                    graph[y][x] = 2; // 외부공기로 변환
                    needVisit.push([y, x]);
                }
            }
        }
    }
}

console.log(solution(_input));
