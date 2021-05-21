function Parent() {
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [count, setCount] = useState(0);

  const onChangeFruit = useCallback((fruit) => {
    setSelectedFruit(fruit);
    sendlog({ type: "fruit change", value: fruit });
  }, []);

  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <SelectFruit selected={selectedFruit} onChange={onChangeFruit} />
    </div>
  );
}

/*
만약 이벤트 핸들러 onChange에서 간단하게 처리하는 것으로 끝나지 않고 뭔가 다른 처리도 더 있다고 한다면
이 방식(4번)으로는 해결하기가 힘들다. 

이때는 5번 useCallback을 이용해서 작성해주면 onChangeFruit이 필요할 때만 변경이 된다.
지금 같은 경우에는 
  const onChangeFruit = useCallback((fruit) => {
    setSelectedFruit(fruit);
    sendlog({ type: "fruit change", value: fruit });
  }, []);
안에 속성값이나 상태값이 사용되지 않았기 때문에 빈배열을 입력했고 따라서 이 함수는 한번 생성된 값으로 고정이 됩니다.
한번 생성된 값으로 고정이 됩니다.
*/
