function Parent() {
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <SelectFruit
        selected={selectedFruit}
        onChange={(fruit) => setSelectedFruit(fruit)}
      />
    </div>
  );
}
/*
이번에는 컴포넌트 함수 내부에서 생성되는 함수와 객체에 대해서 이야기 해보겠습니다

이 Parent 컴포넌트가 상태값 변경에 의해서 렌더링을 할 때 자식 컴포넌트도 렌더링을 할텐데요
이 자식 컴포넌트에서 리액트 memo 함수를 사용했다고 했을 때 만약 이 selected 속성값이 변경되지 않으면
이 자식 컴포넌트는 렌더링이 되지 않을 거라고 생각하기가 쉽습니다.

하지만 지금과 같이 이렇게 함수를 작성하면 매번 렌더링을 할 때마다 새로운 값이 입력되기 때문에
리액트 memo를 사용했다고 하더라도 이 컴포넌트는 렌더링이 됩니다.
*/
