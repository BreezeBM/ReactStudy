function TodoList({ todos }) {
  const [doneList, setDoneList] = useState(todos.filter((item) => item.done));
  function onChangeName(key, name) {
    setDoneList(
      doneList.map((item) => (item.key === key ? { ...item, name } : item))
    );
  }
}

/*
5번 줄에서 특정 목록의 이름을 수정하는 순간 부모가 가진 데이터와 정합이 안맞는다. 대게 이런 상황은 버그로 이어진다.
이렇게 자식 컴포넌트에서 부모의 데이터를 별도의 상태값으로 관리하는 것은 좋지 않습니다. 
상태값은 일부 컴포넌트로 한정해서 관리하는 것이 좋습니다. 
*/
