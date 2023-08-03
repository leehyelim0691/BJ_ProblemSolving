class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(parentIndex) {
        return parentIndex * 2 + 1;
    }

    getRightChildIndex(parentIndex) {
        return parentIndex * 2 + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    empty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap[0];
    }

    push(data) {
        this.heap.push(data);
        this.heapifyUp();
    }

    // 최근에 삽입된 노드가 제 자리를 찾아갈 수 있도록 하는 메소드
    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex][1] > this.heap[index][1]) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else break;
        }
    }

    pop() {
        const len = this.heap.length;
        const rootNode = this.peek();

        if (len <= 0) return;
        if (len === 1) this.heap = [];
        else {
            this.heap[0] = this.heap.pop(); // 끝에 있는 노드를 루트노드로 변경
            this.heapifyDown();
        }
        return rootNode;
    }

    // 변경된 루트노드가 제 자리를 찾아가도록 하는 메소드
    heapifyDown() {
        let index = 0;
        const len = this.heap.length;
        const rootNode = this.peek();

        while (this.getLeftChildIndex(index) < len) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            const smallerChildIndex = rightChildIndex < len && this.heap[rightChildIndex][1] < this.heap[leftChildIndex][1] ? rightChildIndex : leftChildIndex;

            // 자식 노드의 키 값이 루트노드보다 작다면 위로 끌어올린다.
            if (this.heap[smallerChildIndex][1] <= rootNode[1]) {
                [this.heap[index], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[index]];
                index = smallerChildIndex;
            } else break;
        }
    }
}

const _input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [V, E] = input.shift().split(" ").map(Number);
    const K = +input.shift();
    const graph = Array.from({ length: V + 1 }, () => []);
    const dist = Array.from({ length: V + 1 }, () => Infinity);

    for (let i = 0; i < E; i++) {
        let [u, v, w] = input[i].split(" ").map(Number);
        graph[u].push([v, w]);
    }

    dijkstra(K);

    function dijkstra(start) {
        const pq = new PriorityQueue();
        pq.push([start, 0]);
        dist[start] = 0;

        while (!pq.empty()) {
            const [pqNode, pqCost] = pq.pop();

            if (dist[pqNode] < pqCost) continue;

            for (const target of graph[pqNode]) {
                const node = target[0];
                const cost = target[1] + dist[pqNode];

                if (dist[node] > cost) {
                    pq.push([node, cost]);
                    dist[node] = cost;
                }
            }
        }
    }

    for (let i = 1; i <= V; i++) {
        if (dist[i] === Infinity) dist[i] = "INF";
    }

    return dist.slice(1).join("\n");
}

console.log(solution(_input));
