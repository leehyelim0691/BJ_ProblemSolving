const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const V = +input.shift();
    const E = +input.shift();
    const graph = Array.from(Array(V + 1), () => []);
    let answer = 0;

    input.map((item) => {
        const a = +item.split(" ")[0];
        const b = +item.split(" ")[1];
        graph[a].push(b);
        graph[b].push(a);
    });

    let needVisit = [1];
    const visited = Array.from({ length: V + 1 }).fill(0);

    while (needVisit.length) {
        const node = needVisit.shift();
        if (visited[node] === 0) {
            visited[node] = 1;
            needVisit = [...needVisit, ...graph[node]];
            answer++;
        }
    }
    return answer - 1;
}

console.log(solution(_input));
