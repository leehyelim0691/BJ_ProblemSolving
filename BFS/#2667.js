const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = +input.shift();
    const map = [];
    let answer = [];

    input.map((item, index) => {
        const row = item.split("").map((item) => +item);
        map.push(row);
    });

    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if (map[i][j] === 1) answer.push(BFS(N, map, [i, j]));

    return answer.length + "\n" + answer.sort((a, b) => a - b).join("\n");
}

const BFS = (N, map, axis) => {
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    const visited = Array.from(Array(N), () => Array(N).fill(0));
    let needVisit = [];
    let count = 1;

    needVisit.push(axis);
    visited[axis[0]][axis[1]] = 1;
    map[axis[0]][axis[1]] = -1;

    while (needVisit.length) {
        const [ny, nx] = needVisit.shift();
        for (let i = 0; i < dy.length; i++) {
            const y = ny + dy[i];
            const x = nx + dx[i];
            if (y >= 0 && y < N && x >= 0 && x < N && !visited[y][x] && map[y][x] === 1) {
                needVisit.push([y, x]);
                visited[y][x] = 1;
                map[y][x] = -1;
                count++;
            }
        }
    }
    return count;
};

console.log(solution(_input));
