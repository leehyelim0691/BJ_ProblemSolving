const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

function solution(input) {
    const [A, B, C] = input.shift().split(" ").map(Number);
    const visited = Array.from({ length: 201 }, () => Array(201).fill(0));
    const water = Array.from({ length: 201 }, () => 0);
    const answer = [];

    dfs(0, 0, C);

    for (let i = 0; i < 201; i++) {
        if (water[i]) answer.push(i);
    }

    return answer.join(" ");

    function dfs(a, b, c) {
        if (visited[a][b]) return;
        if (a === 0) water[c] = 1;

        visited[a][b] = 1;

        // a->b
        if (a + b > B) dfs(a + b - B, B, c);
        else dfs(0, a + b, c);

        // b->a
        if (b + a > A) dfs(A, b + a - A, c);
        else dfs(b + a, 0, c);

        // c->a
        if (c + a > A) dfs(A, b, c + a - A);
        else dfs(c + a, b, 0);

        // c->b
        if (c + b > B) dfs(a, B, c + b - B);
        else dfs(a, c + b, 0);

        // b->c, a->c
        // a+b=c 이므로 c 가 넘칠일이 없음
        dfs(a, 0, b + c);
        dfs(0, b, a + c);
    }
}

console.log(solution(_input));
