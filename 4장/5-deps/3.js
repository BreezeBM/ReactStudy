function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    function onClick() {
      setCount((prev) => prev + 1);
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  });
}

/*
의존성 배열로 빈배열을 입력했다고 생각하면 됩니다. 
prev에 이전 상태값이 들어오게 된다.
*/
