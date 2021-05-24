import React from "react";
import { applyMiddleware, createStore } from "redux";

const printLog = (store) => (next) => (action) => {
  // 상태값 변경전에 호출
  console.log(`prev state = ${JSON.stringify(store.getState())}`);
  // next를 호출했을 때는 더이상 미들웨어가 없기 때문에 리듀서가 호출이 된다.
  // 리듀서에서 상태값을 변경한다.
  const result = next(action);
  // 상태값 변경 후 확인
  console.log(`next state = ${JSON.stringify(store.getState())}`);
  return result;
};

const myReducer = (state = { name: "mike" }, action) => {
  console.log("myReducer");
  if (action.type === "someAction") {
    return { name: "mike2" };
  }
  return state;
};

const store = createStore(myReducer, applyMiddleware(printLog));
store.dispatch({ type: "someAction" });

export default function App() {
  return <div>실전 리액트</div>;
}
