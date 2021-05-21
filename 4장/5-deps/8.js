function MyComponent({ onClick }) {
  const onClickRef = useRef();
  onClickRef.currnet = onClick;
}

/*
ref 객체는 이렇게 컴포넌트 함수에서 직접 변경해도 된다고 생각할 수 있지만
한가지 문제가 있습니다. 

부수효과 함수에서 이렇게 ref객체를 수정하는 이유는 나중에 도입될 리액트의 
concurrent mode 때문입니다. 

concurrent mode로 동작이 될 때는 컴포넌트 함수가 실행 됐다고 하더라도
중간에 렌더링이 취소될 수 있습니다.

렌더링은 취소됐는데 ref 객체에는 잘못된 값이 저장될 수 있으므로 
ref객체에는 이렇게 컴포넌트 함수에서 직접 수정하면 안됩니다.
  onClickRef.currnet = onClick;
이렇게 하면 안됩니다. 
*/
