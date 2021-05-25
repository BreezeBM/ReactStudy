import React from "react";
import { getNextFriend } from "../../common/mockData";
import { addFriend } from "../state";
import FriendList from "../component/FriendList";
import { useDispatch, useSelector } from "react-redux";

export default function FriendMain() {
  // 리덕스에서 데이터를 가져올 때
  // 선택자 함수는 리덕스의 상태값이 매개변수로 넘어오고 우리가 사용하려고 하는 데이터를 가져옵니다.
  // (state) => state.friend.friends 이함수가 반환하는 값이 훅의 반환값이 됩니다.
  const friends = useSelector((state) => state.friend.friends);

  // 기존에 dispatch를 사용하기 위해서는 store.으로 불러야 했는데, 이제는 필요없다.
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
  }
  console.log("FriendMain render");
  return (
    <div>
      <button onClick={onAdd}>친구추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
/*
useSelector 훅은 리덕스에서 액션이 처리가 되면 여기서 반환하는 값의 이전값을 기억했다가 
해당 하는 값이 변경이 되었을 때 컴포넌트를 다시 렌더링 해 줍니다. 

여러개의 상태를 가져 오고 싶을 때는 
  const friends = useSelector((state) => state.friend.friends);
  const friends2 = useSelector((state) => state.friend.friends2);
  const friends3 = useSelector((state) => state.friend.friends3);
이 방법과

  const [friends, friends2] = useSelector((state) => [state.friend.friends, state.friend.friends2]);
배열로 받는 방법이 있다.
하지만 배열은 계속 생성되기 때문에 안에 있는 두개의 값이 변경이 되지 않아도 리덕스에서 액션이 처리될 떄마다
불필요하게 컴포넌트가 렌더링 될 수 있다. 

이 때 두번째 매개변수를 활용한다. 리덕스에서 제공하는 shallowEqul을 활용한다.
  const [friends, friends2] = useSelector((state) => [state.friend.friends, state.friend.friends2], shallowEqul);

shallowEqul은 얕은 비교를 하기 때문에 배열의 래퍼런스 뿐 아니라 안에있는 friend1, friend2를 비교하기 때문에
이 두값이 변경되었을 떄만, 이 컴포넌트가 렌더링이 됩니다.

*/
