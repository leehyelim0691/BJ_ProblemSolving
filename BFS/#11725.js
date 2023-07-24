const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const T = +input.shift();
    let answer = [];

    for (let i = 0; i < 3 * T; i++) {
        const L = +input[i];
        answer.push(
            BFS(
                L,
                input[i + 1].split(" ").map((item) => +item),
                input[i + 2].split(" ").map((item) => +item)
            )
        );
        i += 2;
    }
    return answer.join("\n");
}

const BFS = (L, start, end) => {
    const dy = [-2, -1, 1, 2, 2, 1, -1, -2];
    const dx = [1, 2, 2, 1, -1, -2, -2, -1];
    const visited = Array.from(Array(L), () => Array(L).fill(0));
    const needVisit = [];
    let count = 0;

    visited[start[0]][start[1]] = 1;
    needVisit.push(start);

    while (needVisit.length) {
        const size = needVisit.length;
        for (let j = 0; j < size; j++) {
            const [ny, nx] = needVisit.shift();
            if (ny === end[0] && nx === end[1]) return count;
            for (let i = 0; i < dy.length; i++) {
                const y = ny + dy[i];
                const x = nx + dx[i];

                if (y >= 0 && y < L && x >= 0 && x < L && !visited[y][x]) {
                    needVisit.push([y, x]);
                    visited[y][x] = 1;
                }
            }
        }
        count++;
    }
    return count;
};
console.log(solution(_input));
