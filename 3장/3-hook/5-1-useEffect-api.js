import React, { useState, useEffect } from "react";

export default function Profile({ userId }) {
  const [user, setUser] = useState(null);
  // 지역변수
  const value = userId + 10;
  // 지역함수
  function func1() {
    console.log(userId);
  }
  useEffect(() => {
    func1();
    console.log(value);
    getUserApi(userId).then((data) => setUser(data));
    // 지역변수인 value도 입력해야 한다. 또한 지역 함수인 func1도 입력해야 한다.
  }, [userId, value, func1]);
  return (
    <div>
      {!user && <p>사용자 정보를 가져오는중 ...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

const USER1 = { name: "mike", age: 23 };
const USER2 = { name: "jane", age: 31 };
function getUserApi(userId) {
  return new Promise((res) => {
    setTimeout(() => {
      res(userId % 2 ? USER1 : USER2);
    }, 500);
  });
}
