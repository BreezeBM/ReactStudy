import { createSelector } from "reselect";

const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (state) => state.friend.ageLimit;
export const getShowLimit = (state) => state.friend.showLimit;

export const getFriendsWithAgeLimit = createSelector(
  // 선택자 함수에서 사용할 값을 만들어야 한다.
  // 지금은 배열안에 두가지가 필요하다.
  [getFriends, getAgeLimit],
  // 선택자 함수를 아래와 같이 작성 위에서 각각 반환하는 값을 받아서 작성한다.
  (friends, ageLimit) => friends.filter((item) => item.age <= ageLimit)
);

export const getFriendsWithAgeShowLimit = createSelector(
  [getFriendsWithAgeLimit, getShowLimit],
  (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit)
);

/*
filter함수는 friends, ageLimit 들어오는 매개변수의 값이 변경이 됐을 때만 실행을 하게 됩니다. 
변경되지 않았다면 그전에 반환된 값을 적용을 합니다.
*/
