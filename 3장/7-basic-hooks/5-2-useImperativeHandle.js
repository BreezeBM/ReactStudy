import React, { Profiler, useRef } from "react";
import Profile from "./5-1-useImperativeHandle";

export default function App() {
  const ProfileRef = useRef();
  const onClick = () => {
    if (ProfileRef.current) {
      console.log(`current name length:`, profileRef.current.getNameLength());
      ProfileRef.current.addAge(5);
    }
  };
  return (
    <div>
      <Profile ref={ProfileRef} />
      <button onClick={onClick}>add age 5</button>
    </div>
  );
}

/*
14번 줄에 있는 ref객체를 Profile의 컴포넌트의 ref 속성값으로 입력하고 있습니다. 이렇게되면 profileRef.current는
이전의 useImperativeHandle에서 반환한 값을 참조하게 된다. 그래서 자식이 제공해준 두가지 함수
addAge와 getNameLength를 사용할 수 있게 된다. 
 */
