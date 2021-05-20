function Profile({ userId }) {
  const [user, setUser] = useState();
  const [needDetail, setNeedDetail] = useState(initialState);

  useEffect(() => {
    fetchUser(userId, needDetail).then((data) => setUser(data));
  }, [userId]);
  //...
}

/*
그래서 userId를 배열안에 입력해주는 것이 좋다. 

부수효과 함수 안에서 사용된 상태값이나 속성값 또는 그 두가지 값으로 계산된 어떤 값이 있을 때 그것을
부수효과 함수 안에서 사용했다면 항상 그 값은 의존성 배열에 나열을 해주어야합니다. 

needDetail이라는 상태값을 useEffect안에서 사용을 했지만, 의존성 배열에 입력하는 것을 누락했다. 
이때 리액트 팀은 eslint에서 사용할 수 있는 룰을 만들어서 제공한다. 자동으로 잘못사용된 의존성
배열을 찾아서 알려줍니다. 

만약에 userId가 변경되지 않는다는 것을 확신하는 경우에는 커스텀 훅을 만들어서 사용하는 것이 낫다.

useOnMounted.js

import React from 'react'

export default function useOnMounted(effect) {
    useEffect(effect, [])
}

App.js

...
useOnMounted(() => fetchUser(userId).then(data => setUser(data)))
...
*/
