import React, { createContext, useState, useContext } from "react";

const UserContext = createContext("unknown");

export default function App() {
  const [name, setName] = useState("mike");
  return (
    <div>
      <UserContext.Provider value={name}>
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </UserContext.Provider>
    </div>
  );
}

const Profile = React.memo(function () {
  console.log("Profile");
  return (
    <div>
      <Greeting />
      {/*...*/}
    </div>
  );
});

function Greeting() {
  // 이쪽 영역에서는 username을 사용할 수가 없다.
  const username = useContext(UserContext);
  // 이렇게 하면 사용할 수 있다.
  return (
    // <UserContext.Consumer>{(username) => <p>{`${username}님 안녕하세요`}</p>}</UserContext.Consumer>
    // 그렇게 되면 윗줄 코드는 필요가 없고,
    <p>{`${username}님 안녕하세요`}</p>
    // 이렇게 사용 가능
  );
}
