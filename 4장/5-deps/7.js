function MyComponent({ onClick }) {
  const onClickRef = useRef();

  useEffect(() => {
    onClickRef.current = onClick;
  });

  useEffect(() => {
    window.addEventListener("click", () => {
      onClickRef.current();
    });
  });
}

/*
만약 이를 해결하는 마땅한 방법이 떠오르지 않는다면 useRef훅이 손쉬운 해결책이 될 수 있습니다. 
렌더링이 될 때마다, ref객체에 onClick함수를 넣어주는 것이다. 

그리고 원래 사용하던 곳에서 ref객체를 이용해서 함수를 호출하는 방식입니다. 

부수효과에서 사용된 ref객체는 의존성 배열에 추가할 필요가 없습니다. 
*/
