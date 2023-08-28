/*
 7명의 개발자(A,B,C,D,E,F,G)가 있는데 각각 n명에게 리뷰를 받아야 한다. 
 한 사람당 리뷰 할 수 있는 횟수는 최대 k번이다.
 리뷰를 할 수 있는 조건은 서로가 연결되어 있어야 하는데 (연결 여부는 제가 드릴게용)

 연결여부 connect와 n, k가 주어질 때 A~G 개발자의 각 리뷰어들을 알파벳 순으로 출력해내라.

 Ex)
 connect는 7명의 개발자들의 연결된 개발자 리스트이다(인덱스 0부터 차례로 A~G)
 connect = [[B,F,G,C],[A,C],[E,A,C],[A,B,G],[A,C,F],[G,D],[F,B]]
 n = 2
 k = 3

 <A>   <B>   <C>   <D>   <E>  <F>   <G>
[B,C] [A,C] [A,C] [A,B] [F] [D,G] [B,F] => 잘못된 경우. E의 리뷰어의 경우 F 한 사람 밖에 존재 할 수 X

 <A>   <B>   <C>   <D>   <E>   <F>   <G>
[B,C] [A,C] [A,C] [B,G] [A,F] [D,G] [B,F] => 옳은 경우.


옳은 출력 결과 : [[B,C],[A,C],[A,C],[B,G],[A,F],[D,G],[B,F]] 

 */

function solution(connect, n, k) {

    
}

console.log(solution(_input));
