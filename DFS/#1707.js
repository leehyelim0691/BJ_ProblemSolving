const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let T = +input.shift();
    let V, E, a, b;
    let graph = [],
        answer = [],
        visited = [];

    for (let i = 0; i < input.length; i++) {
        [V, E] = input[i].split(" ").map(Number);
        graph = Array.from({ length: V + 1 }, () => []);
        visited = Array.from({ length: V + 1 }, () => 0);

        for (let j = i + 1; j < i + E + 1; j++) {
            [a, b] = input[j].split(" ").map(Number);
            graph[a].push(b);
            graph[b].push(a);
        }

        const bfs = (start) => {
            let queue = [start];
            let check = 1;

            visited[start] = check;

            while (queue.length) {
                let node = queue.shift();

                if (visited[node] === 1) check = 2;
                else if (visited[node] === 2) check = 1;

                for (let i = 0; i < graph[node].length; i++) {
                    let next = graph[node][i];
                    if (!visited[next]) {
                        visited[next] = check;
                        queue.push(next);
                    } else if (visited[node] === visited[next]) {
                        return;
                    }
                }
            }
        };

        for (let i = 1; i <= V; i++) {
            if (!visited[i]) bfs(i);
        }

        const isBGraph = () => {
            for (let i = 1; i <= V; i++) {
                for (let j = 0; j < graph[i].length; j++) {
                    if (visited[i] === visited[graph[i][j]]) return "NO";
                }
            }
            return "YES";
        };

        answer.push(isBGraph());
        i += E;
    }

    return answer.join("\n");
}

console.log(solution(_input));
