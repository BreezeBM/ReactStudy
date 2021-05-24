function Parent() {
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <SelectFruit selected={selectedFruit} onChange={setSelectedFruit} />
    </div>
  );
}
/*
3번과 같이 단순하게 상태값을 변경하는 이러한 로직(setSelectedFruit(fruit))이라면 
이렇게 상태값 변경함수를 그대로 입력해 주면 간단하게 해결할 수 있습니다. 
상태값 변경함수는 한번 생성되고 변경되지 않는다. 
*/
