<div>{students && students.map(/**/)}</div>;

/*
students 변수의 타입은 배열이다. 그리고 undefinede도 될 수 있는 상황이다. 
그래서 undefined를 검사하고 있는 코드이다. 이렇게 undefined도 가능한 변수는 앞에 검사하는
코드가 필요하기 때문에 가능하다면 기본값으로 undefined가 아니라 빈배열을 넣는게 좋다. 그러면
undefined를 체크하는  코드가 필요가 없다.
*/

<div>{students.map(/**/)}</div>;
