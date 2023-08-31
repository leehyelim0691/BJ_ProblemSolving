const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    const [N, L, R] = input.shift().split(" ").map(Number);
    const graph = [];
    let answer = 0;

    input.map((item) => {
        const row = item.split(" ").map(Number);
        graph.push(row);
    });
    const visited = Array.from({ length: N }, () => Array(N).fill(0));
    const result = isPossible(visited);

    while (1) {
        const visited = Array.from({ length: N }, () => Array(N).fill(0));
        const result = isPossible(visited);
        // console.log("visited: ", visited);
        if (result === -1) return answer;

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (visited[i][j] === 2) graph[i][j] = result;
            }
        }

        answer++;
    }

    // return answer;

    function isPossible(visited) {
        const needVisit = [[0, 0]];

        let count = 1,
            sum = graph[0][0],
            flag = false;
        // visited[0][0] = 1;

        while (needVisit.length) {
            const [ny, nx] = needVisit.shift();
            for (let i = 0; i < dy.length; i++) {
                const [y, x] = [ny + dy[i], nx + dx[i]];
                if (y >= 0 && y < N && x >= 0 && x < N && !visited[y][x]) {
                    if (Math.abs(graph[ny][nx] - graph[y][x]) >= L && Math.abs(graph[ny][nx] - graph[y][x]) <= R) {
                        console.log("graph[", ny, "][", nx, "] : ", graph[ny][nx], " graph[", y, "][", x, "] : ", graph[y][x]);
                        flag = true;
                        count++;
                        sum += graph[y][x];
                        visited[y][x] = 2;
                    } else visited[y][x] = 1;
                    needVisit.push([y, x]);
                }
            }
        }
        return flag ? Math.floor(sum / count) : -1;
        // return visited;
    }

    return answer;
}

console.log(solution(_input));
