import java.util.*;

class Main {
 public static int self(int num){
		int sum=num;
    
		while(num != 0){
			sum=sum+(num % 10); 
			num=num/10;	
		}
		return sum;
	}
	
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		StringBuilder sb = new StringBuilder();
        
		boolean[] check = new boolean[10001];
		 
		for (int i=1; i<10001; i++){
			int n=self(i);
		
			if(n < 10001){
				check[n] = true;
			}
		}

 
		for (int i = 1; i < 10001; i++) {
			if (!check[i]) {
				sb.append(i).append('\n');
			}
		}
		System.out.println(sb);
	}
}
