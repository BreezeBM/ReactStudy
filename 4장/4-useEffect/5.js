useEffect(async () => {
  const data = await fetchUser(userId);
  setUser(data);
}, [userId]);

/*
부수효과 함수는 async / await으로 만들면 문제가 됩니다. 
부수효과 함수의 반환값은 항상 함수 타입이어야 하기 때문입니다. 

async await함수는 Promise 객체를 반환하기 때문에 부수효과 함수가 될 수 없습니다. 

이전에 설명을 드렸지만 부수효과 함수는 함수만 반환할 수 있고, 반환된 함수는 부수효과 함수가 호출되기
직전과 컴포넌트가 사라지기 직전에 호출이 된다. 

그래서 async / await를 사용하고 싶다면 함수를 하나 만들어서 호출해 주는 방식을 사용해야 합니다. 
*/

// 이렇게 사용해야 한다.
useEffect(() => {
  async function fetchAndSetUser() {
    const data = await fetchUser(userId);
    setUser(data);
  }
  fetchAndSetUser();
}, [userId]);
