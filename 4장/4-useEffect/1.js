function Profile({ userId }) {
  const [user, setUser] = useState();
  useEffect(() => {
    fetchUser(userId).then((data) => setUser(data));
  }, []);
  //...
}

/*
useEffect의 부수효과 함수는 Profile 컴포넌트가 렌더링 될 때마다 호출이 되기 때문에 서버의 API를
호출하는 코드가 항상 실행이 됩니다. 이것은 부담스럽다. 

이럴때는 빈배열을 입력해서 마운트 된 후에 한번만 호출되도록 할 수도 있습니다. 하지만 이는 userId가 
변경이 되어도 새로운 사용자 정보를 가져오지 못하기 때문에 올바른 해결책이 아닙니다. 

2번으로
*/
