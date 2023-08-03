const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = +input.shift();
    const graph = Array.from({ length: N }, () => []);
    const K = +input[1];
    let rootIndex,
        answer = 0;

    input[0].split(" ").map((item, index) => {
        item = +item;
        if (item === -1) rootIndex = index;
        else graph[item].push(index);
    });

    return dfs(rootIndex);

    function dfs(node) {
        if (rootIndex == K) return 0;
        if (!graph[node].length) {
            answer++;
            return;
        }

        graph[node].forEach((n) => {
            if (n === K) {
                if (graph[node].length === 1) answer++;
                return;
            }
            dfs(n);
        });
        return answer;
    }
}

console.log(solution(_input));
