import java.util.*;
import java.io.*;

public class Main {
  static int m, n, group;
  static int connect[][];
  static boolean visit[];

  public static void dfs(int v){
    visit[v] = true;

    for(int i = 1; i <= n; i++){
      if(connect[v][i] == 1 && !visit[i]){
        dfs(i);
      }
    }
  }

  public static void main(String[] args)  {
    Scanner sc = new Scanner(System.in);

    n = sc.nextInt();
    m = sc.nextInt();
    int v = 0;

    connect = new int[n+1][n+1];
    visit = new boolean[n+1];

    for(int i = 1; i <= m; i++){
      int x = sc.nextInt();
      int y = sc.nextInt();
      connect[x][y] = 1;
      connect[y][x] = 1;
    }

    for(int i = 1; i <= n; i++){
      if(!visit[i]){
        dfs(i);
        group++;
      }
    }

    System.out.println(group);
 }
} 
