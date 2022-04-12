import java.util.*;

class Main {

	public static void main(String[] args) {
	Scanner sc=new Scanner(System.in);
		int num=sc.nextInt();
		int count=0;
        
		if(num/100==0) count=num;
		else {
			if(num==1000) num=999;
			
			count=99;
			for(int i=100;i<=num;i++) {
			
				if((i/100%10)-(i/10%10)==(i/10%10)-(i%10)) count++;
			}
		}
		System.out.println(count);
	}
}
