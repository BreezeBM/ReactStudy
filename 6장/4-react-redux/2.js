import { useSelector, shallowEqul } from "react-redux";

function useMySelector(selector) {
  return useSelector(selector, shallowEqul);
}

function MyComponent() {
  const [value1, value2] = useMySelector((state) => [
    state.value1,
    state.value2,
  ]);
  // const value3 = useMySelector((state) => state.value3);
  const [value4] = useMySelector((state) => state.value4);
}

/*
이 커스텀 훅을 사용할 때는 배열을 입력하지 않고 사용을 하면 사실 이 value3이라는 값의 레퍼런스만
비교하면 될텐데 shallowEqual은 value3이 가지고 있는 모든 속성값을 다 비교한다. 
그래서 비효율적인 측면이 있다. 

커스텀훅을 사영할 때는 값을 하나만 반환하더라도 배열로 반환하는것이 좋다.

상태값을 여러개 사용하는 방법은 메모이제이션을 이용하는 방법이 있다. 
reselect라는 패키지를 이용하는 방법이 있습니다. 
*/
