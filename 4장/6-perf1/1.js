function MyComponent(props) {
  //...
}

function isEqual(prevProps, nextProps) {
  // return true, false
}
React.memo(MyComponent, isEqual);

/*
컴포넌트의 속성값이나 상태값이 변경되면 리액트는 그 컴포넌트를 다시 그릴 준비를 합니다. 
만약 이처럼 리액트 memo 함수로 감싼 컴포넌트라면 속성값을 비교 함수가 호출이 됩니다. 
이 속성값 비교 함수는 이전 / 이후 속성값을 매개변수로 받아서 참 또는 거짓을 반환합니다. 
참을 반환하면 이전 렌더링 결과를 반환 합니다. 
반대로 거짓을 반환하면 컴포넌트 함수를 실행해서 가상돔을 업데이트 하고 변경된 부분만 실제돔에
반영하는 것이다. 

만약 이렇게 속성값 비교 함수(isEqual)를 입력하지 않으면 
얕은 비교를 수행하는 기본함수가 사용이 된다. 

컴포넌트를 memo함수로 감싸지 않았다면 항상 거짓을 반환하는 
속성값 비교 함수가 사용된다고 생각할 수 있습니다. 

이때는 속성값이 변경되지 않아도 부모 컴포넌트가 렌더링 될 때마다 자기 자신도 렌더링이 될 겁니다.

memo 함수를 사용하면 이렇게 속성값 비교 함수를 통해서 컴포넌트 렌더링 과정을 생략할 수 있습니다. 

속성값 비교함수를 작성하지 않으면 리액트가 기본으로 갖고 있는 함수가 사용이 된다. 
*/
