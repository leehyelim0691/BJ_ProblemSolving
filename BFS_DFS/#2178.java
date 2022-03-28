import java.util.*;

public class Main {
  static int n, m;
  static int[] dx = {0, 1, 0, -1}; 
  static int[] dy = {1, 0, -1, 0};
  static int[][] road; 
  static int[][] visit;
  
  public static void main(String[] args)  {
  Scanner sc = new Scanner(System.in);
  n = sc.nextInt();
  m = sc.nextInt();
  road = new int[n][m];
  visit = new int[n][m];
  
   for(int i = 0; i < n; i++){
      String input = sc.next();
      for(int j = 0; j < m; j++){
         road[i][j] = input.charAt(j) - '0';
      }
    }
  bfs();
  System.out.print(road[n-1][m-1]); 
  }
  
  public static void bfs() {
    Queue<Integer> queue_x = new LinkedList<Integer>(); 
    Queue<Integer> queue_y = new LinkedList<Integer>(); 
    
    queue_x.offer(0); 
    queue_y.offer(0);
    
    visit[0][0] = 1;
    
    while(!queue_x.isEmpty()) {
      int x = queue_x.poll();
      int y = queue_y.poll();
      
      for(int k = 0; k < 4;k++) {
        int temp_x = x + dx[k];
        int temp_y = y + dy[k];
        
        if(temp_x >= 0 && temp_y >= 0 && temp_x < n && temp_y < m) {
          if(road[temp_x][temp_y] == 1 && visit[temp_x][temp_y] == 0) {
            queue_x.offer(temp_x);
            queue_y.offer(temp_y);
            
            visit[temp_x][temp_y] = 1;
            
            road[temp_x][temp_y] = road[x][y] + 1;
          }
        }
      }
    }
  }
}
