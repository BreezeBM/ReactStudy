function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    function onClick() {
      setCount(count + 1);
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [count]);
}

/*
이전 상태값을 기반으로 다음 상태값을 계산하기 위해 
상태값을 의존성 배열에 추가하는 경우가 있습니다. 
지금은 상태값을 하나씩 증가시키기 위해서 count변수가 필요하다.

이러한 경우에는 3번으로
*/
