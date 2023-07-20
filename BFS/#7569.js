const { count } = require("console");

const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [M, N, H] = input
        .shift()
        .split(" ")
        .map((item) => +item);
    const graph = Array.from({ length: H }, () => []);
    const visited = Array.from({ length: H }, () => []);
    const needVisit = [];
    let checked = 0;

    for (let i = 0; i < H; i++) visited[i] = Array.from(Array(N), () => Array(M).fill(0));

    input.map((item, index) => {
        const row = item.split(" ").map((t) => +t);
        graph[Math.floor(index / N)].push(row);
        if (row.includes(0)) checked++;
    });

    if (!checked) return 0;
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < N; j++) {
            for (let k = 0; k < M; k++) {
                if (graph[i][j][k] === 1) {
                    needVisit.push([i, j, k]);
                    visited[i][j][k] = 1;
                }
            }
        }
    }
    return BFS(graph, H, N, M, visited, needVisit);
}

const BFS = (graph, H, N, M, visited, needVisit) => {
    const dz = [1, -1, 0, 0, 0, 0];
    const dy = [0, 0, 0, 0, 1, -1];
    const dx = [0, 0, 1, -1, 0, 0];
    let count = 0,
        index = 0;

    while (needVisit.length !== index) {
        const size = needVisit.length;
        const idx = index;
        for (let j = idx; j < size; j++) {
            const [nz, ny, nx] = needVisit[j];
            index++;

            for (let i = 0; i < dz.length; i++) {
                const z = nz + dz[i];
                const y = ny + dy[i];
                const x = nx + dx[i];

                if (z >= 0 && z < H && y >= 0 && y < N && x >= 0 && x < M && !visited[z][y][x] && graph[z][y][x] === 0) {
                    needVisit.push([z, y, x]);
                    visited[z][y][x] = 1;
                    graph[z][y][x] = 1;
                }
            }
        }
        count++;
    }
    for (let i = 0; i < H; i++) for (let j = 0; j < N; j++) if (graph[i][j].includes(0)) return -1;

    return --count;
};

console.log(solution(_input));
