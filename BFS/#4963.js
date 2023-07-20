const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let W,
        H,
        target = 0;
    let row = [];
    let graph = [];
    let answer = [];

    for (let i = 0; i < input.length; i++) {
        if (i === 0 || i === target) {
            if (graph.length > 0) answer.push(countBFS(graph, H, W));
            graph = [];
            [W, H] = input[i].split(" ").map((item) => +item);
            target += H + 1;
        } else {
            row = input[i].split(" ").map((item) => +item);
            graph.push(row);
        }
    }
    return answer.join("\n");
}

const countBFS = (graph, H, W) => {
    let count = 0;
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (graph[i][j]) {
                BFS(graph, H, W, [i, j]);
                count++;
            }
        }
    }
    return count;
};

const BFS = (graph, H, W, axis) => {
    const dy = [0, 0, 1, -1, 1, -1, -1, 1];
    const dx = [1, -1, 0, 0, 1, 1, -1, -1];
    const visited = Array.from(Array(H), () => Array(W).fill(0));
    const needVisit = [];

    needVisit.push(axis);
    visited[axis[0]][axis[1]] = 1;
    graph[axis[0]][axis[1]] = 0;

    while (needVisit.length) {
        const [ny, nx] = needVisit.shift();
        for (let i = 0; i < dy.length; i++) {
            const y = ny + dy[i];
            const x = nx + dx[i];
            if (y >= 0 && y < H && x >= 0 && x < W && !visited[y][x] && graph[y][x]) {
                needVisit.push([y, x]);
                visited[y][x] = 1;
                graph[y][x] = 0;
            }
        }
    }
};

console.log(solution(_input));
