const _input = require("fs").readFileSync("sample.txt").toString().trim().split("\n");

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    empty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap[0];
    }

    push(data) {
        this.heap.push(data);

        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = ~~((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    pop() {
        if (this.empty()) return;

        const value = this.peek();
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        this.heap.pop();
        this._heapify();
        return value;
    }

    _heapify() {
        const x = this.peek();
        const n = this.heap.length;
        let cur = 0;

        while (2 * cur + 1 < n) {
            const leftChild = 2 * cur + 1;
            const rightChild = leftChild + 1;
            const smallerChild = rightChild < n && this.heap[rightChild] < this.heap[leftChild] ? rightChild : leftChild;

            //루트 노드의 값이 더 큰 경우 swap
            if (x > this.heap[smallerChild]) {
                [this.heap[cur], this.heap[smallerChild]] = [this.heap[smallerChild], this.heap[cur]];
                cur = smallerChild;
            } else {
                break;
            }
        }
    }
}

function solution(input) {
    const [V, E] = input.shift().split(" ").map(Number);
    const K = +input.shift();
    const graph = Array.from({ length: V + 1 }, () => []);
    const visited = Array.from({ length: V + 1 }, () => 0);
    const dist = Array.from({ length: V + 1 }, () => Infinity);
    const answer = [];

    input.map((item) => {
        let [u, v, w] = item.split(" ").map(Number);
        graph[u].push([v, w]);
    });

    dijkstra(K);

    for (let i = 0; i <= V; i++) {
        if (!isFinite(dist[i])) dist[i] = "INF";
    }

    return dist.slice(1).join("\n");

    function dijkstra(start) {
        //시작 노드 초기화
        const pq = new PriorityQueue();
        pq.push([0, start]); //[거리, 노드]
        dist[start] = 0;

        while (!pq.empty()) {
            const [dist, cur] = pq.pop(); //현재 최단 거리가 가장 짧은 노드

            //최단 거리가 아닌 경우(방문한 적이 있는 경우) 스킵
            if (dist[cur] < dist) continue;

            for (const i of graph[cur]) {
                //인접 노드 탐색
                const node = i[0];
                const cost = dist + i[1];
                if (cost < dist[node]) {
                    pq.push([cost, node]);
                    d[node] = cost;
                }
            }
        }
    }

    // function getSmallestNode() {
    //     let min = Infinity,
    //         index = 0;

    //     for (let i = 1; i <= V; i++) {
    //         if (!visited[i] && min > dist[i]) {
    //             min = dist[i];
    //             index = i;
    //         }
    //     }
    //     return index;
    // }
}

console.log(solution(_input));
