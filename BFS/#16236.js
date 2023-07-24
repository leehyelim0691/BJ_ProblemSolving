// const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

// function solution(input) {
//     const N = input.shift().split(" ").map(Number);
//     const graph = [];
//     let axis = [];
//     let sum = 0;

//     input.map((item, index) => {
//         const row = item.split(" ").map(Number);
//         graph.push(row);
//         if (row.indexOf(9) !== -1) axis = [index, row.indexOf(9)];
//         sum += row.reduce((a, b) => a + b);
//     });

//     if (sum === 9) return 0;

//     return BFS(N, graph, axis);
// }

// const BFS = (N, graph, axis) => {
//     const eats = new Array(7).fill(0);
//     const dy = [-1, 0, 0, 1];
//     const dx = [0, -1, 1, 0];
//     let level = 2;
//     let dist = 0;

//     while (1) {
//         const needVisit = [];
//         const visited = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));
//         const position = [];
//         let moveCount = 0;

//         needVisit.push([...axis, 0]); // 좌표 + 이동거리

//         while (needVisit.length) {
//             const [ny, nx, count] = needVisit.shift();

//             if (graph[ny][nx] < level && graph[ny][nx] !== 0) position.push([ny, nx, count]); // 먹이 발견

//             for (let i = 0; i < dy.length; i++) {
//                 const y = ny + dy[i];
//                 const x = nx + dx[i];

//                 if (y < 0 || y >= N || x < 0 || x >= N) continue;
//                 if (graph[y][x] > level) continue;
//                 if (visited[y][x]) continue;

//                 needVisit.push([y, x, count + 1]);
//                 visited[y][x] = 1;
//             }
//         }

//         if (position.length) {
//             position.sort((a, b) => {
//                 if (a[2] !== b[2]) return a[2] - b[2];
//                 else {
//                     if (a[0] !== b[0]) return a[0] - b[0];
//                     else return a[1] - b[1];
//                 }
//             });

//             const [ny, nx, ncount] = position[0];

//             graph[ny][nx] = 0;
//             eats[level]++;

//             if (eats[level] === level) level++;
//             axis = [ny, nx];
//             moveCount = ncount;
//         } else return dist;

//         dist += moveCount;
//     }
// };

// console.log(solution(_input));

// const readFileSyncAddress = '/dev/stdin';
const readFileSyncAddress = "sample.txt";

let input = require("fs").readFileSync(readFileSyncAddress).toString().split("\n");

const N = Number(input.shift());

const map = input.map((v) => v.split(" ").map(Number));

const dy = [-1, 0, 0, 1];
const dx = [0, -1, 1, 0];

const eats = new Array(7).fill(0);

function bfs() {
    // 시작 위치 찾기.
    let cur = [];
    let lv = 2;
    let dist = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (map[i][j] === 9) {
                cur = [i, j];
                map[i][j] = 0;
            }
        }
    }

    while (true) {
        const q = [];
        const visited = Array.from({ length: N }, () => new Array(N).fill(false));
        // 먹이들의 위치를 담을 배열 => 상, 좌 순으로만 탐색해서는 제대로 비교할 수 없음.
        const smallq = [];
        let movCnt = 0;

        // [y, x, 이동거리]
        q.push([...cur, 0]);

        // 실질적인 BFS
        while (q.length) {
            const [y, x, cnt] = q.shift();

            // 먹이 발견
            if (map[y][x] < lv && map[y][x] !== 0) {
                smallq.push([y, x, cnt]);
            }

            for (let i = 0; i < 4; i++) {
                const ny = y + dy[i];
                const nx = x + dx[i];

                // 범위 체크
                if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;

                // 물고기 레벨 체크
                if (map[ny][nx] > lv) continue;

                // 방문 체크
                if (visited[ny][nx]) continue;

                q.push([ny, nx, cnt + 1]);
                visited[ny][nx] = true;
            }
        }

        if (smallq.length) {
            // 거리 => 위쪽 => 왼쪽으로 정렬.
            smallq.sort((a, b) => {
                if (a[2] !== b[2]) {
                    return a[2] - b[2];
                } else {
                    if (a[0] !== b[0]) {
                        return a[0] - b[0];
                    } else {
                        return a[1] - b[1];
                    }
                }
            });

            // feed의 위치와 거리
            const [fy, fx, fCnt] = smallq[0];

            map[fy][fx] = 0;
            eats[lv]++;

            // 레벨 업
            if (eats[lv] === lv) {
                lv++;
            }
            cur = [fy, fx];
            movCnt = fCnt;
        }
        // 종료 조건 => 먹이 큐가 빈 경우.
        else {
            return dist;
        }

        dist += movCnt;
    }
}

console.log(bfs());
