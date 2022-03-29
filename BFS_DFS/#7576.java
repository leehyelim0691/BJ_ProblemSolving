import java.util.*;
import java.io.*;

public class Main {
  static int m, n;
  static int tomato[][];
  static int maxValue;

  public static void bfs(){
    Queue<Integer> queue_x = new LinkedList<Integer>();
    Queue<Integer> queue_y = new LinkedList<Integer>();
    int dx[] = {-1, 1, 0, 0};
    int dy[] = {0, 0, -1, 1};

    for(int i = 0; i < n; i++){
      for(int j = 0; j < m; j++){
        if(tomato[i][j] == 1 ){
          queue_x.offer(i);
          queue_y.offer(j);
        }
      }
    }

    // queue_x.offer(0);
    // queue_y.offer(0);

    while(!queue_x.isEmpty()){
      int x = queue_x.poll();
      int y = queue_y.poll();
      
      for(int i = 0; i < 4; i++){
        int now_x = x + dx[i];
        int now_y = y + dy[i];
        if(tomato[now_x][now_y] == 0 && now_x >= 0 && now_y >= 0 && now_x < n && now_y < m){
          queue_x.offer(now_x);
          queue_y.offer(now_y);
          tomato[now_x][now_y] = tomato[x][y] + 1;
        }
      }
    }

  }
  
  public static void main(String[] args)  throws NumberFormatException, IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
    
		m = Integer.parseInt(st.nextToken());
		n = Integer.parseInt(st.nextToken());
		tomato = new int[n][m];
    
		for(int i=0; i<n; i++) {
			st = new StringTokenizer(br.readLine());
			for(int j=0; j<m; j++) {
				tomato[i][j] = Integer.parseInt(st.nextToken());
			}
		}

    
    bfs();

 }
} 
