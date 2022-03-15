import java.util.*;

class Main {
  static int n, m, v;
  static int check[][];
  static boolean visited[];
  
  public static void dfs(int i) {
    visited[i] = true;
    System.out.print(i + " ");
    
    for(int j = 1; j <= n; j++) {
      if(check[i][j] == 1 && visited[j] == false) {
        dfs(j);
      }
    }
  }

  public static void bfs(){
    Queue<Integer> queue = new LinkedList<Integer>();
    queue.offer(v); //시작점도 Queue에 넣어야 함
    visited[v] = true;
    System.out.print(v + " ");
    
    while(!queue.isEmpty()) {
      int q = queue.poll();
      
      for(int j = 1; j <= n; j++) {
        if(check[q][j] == 1 && visited[j] == false) {
          queue.offer(j);
          visited[j] = true;
          System.out.print(j + " ");
        }
      }
    }
  }

  
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    check = new int[1001][1001]; 
    visited = new boolean[1001];

    n = sc.nextInt();
    m = sc.nextInt();
    v = sc.nextInt();
    
    for(int i = 0; i < m; i++){
      int x = sc.nextInt();
      int y = sc.nextInt();

      check[x][y] = check[y][x] = 1;
    }

    dfs(v);

    visited = new boolean[1001]; 
    System.out.println(); 
    
    bfs();
  }
}
