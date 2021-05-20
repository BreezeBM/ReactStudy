function Profile({ userId }) {
  const [user, setUser] = useState();

  const fetchAndSetUser = useCallback(
    async function (needDetail) {
      const data = await fetchUser(userId, needDetail);
      setUser(data);
    },
    [userId]
  );

  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]);

  if (!user) {
    return <h1>loading....</h1>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{`cash: ${user.cash}`}</p>
      <p>{`account created at ${user.createdAt}`}</p>
      <button onClick={() => fetchAndSetUser(true)}>더보기</button>
      <UserDetail user={user} />
    </div>
  );
}

/*
그런데 만약 이렇게 부수효과 함수 안에 있는 fetchAndSetUser 함수를 바깥에도 사용하고 싶으면 어떻게
해야할까요? 

그럴 때는 fetchAndSetUser 함수가 바깥에 꺼내져 있어야 합니다. 그리고 의존성 배열안에 함수가 들어
가야 합니다. 왜냐면 이 함수 안에서는 속성값과 상태값을 사용하고 있기 때문이다. 그런데 여기서
한가지 문제는 이 함수는 Profile 컴포넌트가 렌더링 될 때마다 생성이 된다. 그래서 의존성 배열의 내용이 항상
변한다. 

부수효과 함수도 렌더링 될 때마다 실행이 된다. 

이럴 때는 useCallback 훅을 사용할 수 있다. userId가 변경될 때만 fetchAndSetUser함수가 새로
생성되도록 한다. 
*/
