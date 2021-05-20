function Parent({ user }) {
  return (
    <div>
      <p>Parent</p>
      {user && <Child user={user} />}
    </div>
  );
}

function Child({ uer }) {
  const [v, setV] = useState(0);
  //   if (user) {
  //     return null;
  //   }
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.phone}</p>
    </div>
  );
}

/*
자식쪽에서 검사를 해서 null을 보여줄 수도 있지만, 부모쪽에서도 검사해서 보내줄 수 있다.
하지만 위와 같은 방법에는 한가지 주의할 점이 있다. 
user 데이터의 상태에 따라서 Child 컴포넌트가 언마운트와 마운트를 반복할 수도 있습니다. 
그것이 의도적이라면 상관이 없는데 의도하지 않고 사용하다 보면 이 상태값이 초기화 돼서 문제가
될 수도 있습니다. 언마운트 될때는 상태값이 사라진다. 
*/
