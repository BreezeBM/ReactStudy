import React from "react";
import { getNextFriend } from "../../common/mockData";
import { actions, setValue } from "../state";
import FriendList from "../component/FriendList";
import { useDispatch, useSelector } from "react-redux";
import NumberSelect from "../component/NuberSelect";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";
import {
  getAgeLimit,
  getFriendsWithAgeLimit,
  getFriendsWithAgeShowLimit,
  getShowLimit,
} from "../state/selector";

export default function FriendMain() {
  // const [ageLimit, showLimit, friendsWithAgeLimit, friendsWithAgeShowLimit] =
  //   useSelector((state) => {
  //     const { ageLimit, showLimit, friends } = state.friend;
  //     const friendsWithAgeLimit = friends.filter(
  //       (item) => item.age <= ageLimit
  //     );
  //     return [
  //       ageLimit,
  //       showLimit,
  //       friendsWithAgeLimit,
  //       friendsWithAgeLimit.slice(0, showLimit),
  //     ];
  //   }, shallowEqual);

  // const [ageLimit, showLimit, friendsWithAgeLimit, friendsWithAgeShowLimit] =
  //   useSelector((state) => [
  //     getAgeLimit(state),
  //     getShowLimit(state),
  //     getFriendsWithAgeLimit(state),
  //     getFriendsWithAgeShowLimit(state),
  //   ]);

  const ageLimit = useSelector(getAgeLimit);
  const showLimit = useSelector(getShowLimit);
  const friendsWithAgeLimit = useSelector(getFriendsWithAgeLimit);
  const friendsWithAgeShowLimit = useSelector(getFriendsWithAgeShowLimit);

  const dispatch = useDispatch();
  function onAdd() {
    dispatch(actions.setValue("name", "mike"));
    const friend = getNextFriend();
    dispatch(actions.addFriend(friend));
  }
  console.log("FriendMain render");
  return (
    <div>
      <button onClick={onAdd}>친구추가</button>
      <NumberSelect
        onChange={(v) => dispatch(actions.setValue("ageLimit", v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={(v) => dispatch(setValue("showLimit", v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기(연령제한적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];

/*
reselect를 사용하면, 
      const friendsWithAgeLimit = friends.filter(
        (item) => item.age <= ageLimit
      );
를 사용할 때, 

friends와 ageLimit이 변경됐을 때만 필터 연산이 되도록 할 수가 있다. 
*/
