import java.util.*;
 

class Main {
	public static void main(String[] args) {		 
		Scanner sc=new Scanner(System.in);
		int n= sc.nextInt();
        int i=0;
        int total=0;

		for(i=0;i<n;i++) {
			int sum=0;
			int num=i;
			
			while(num!=0) {
				sum+=num%10;
				num/=10;
			}
			if(n==sum+i) {
                total=i;
                break;
            }
		}
		System.out.println(total);
	}
}
