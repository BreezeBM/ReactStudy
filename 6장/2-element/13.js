import React from "react";
import { applyMiddleware, createStore } from "redux";

const saveToLocalStorage = (store) => (next) => (action) => {
  if (action.meta?.localStorageKey) {
    localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
  }
  return next(action);
};

const myReducer = (state = { name: "mike" }, action) => {
  console.log("myReducer");
  if (action.type === "someAction") {
    return { name: "mike2" };
  }
  return state;
};

const store = createStore(myReducer, applyMiddleware(saveToLocalStorage));
store.dispatch({
  type: "someAction",
  meta: { localStorageKey: "myKey" },
  title: "asdf",
});
// cancel 함수를 만들면 바로 취소를 해준다.
// 왜냐하면 delayAction이 반환하는 값이 최종적으로 dispatch가 반환하는 값이 된다는 것이 특이한 점이다.
// 그래서 바로 취소가 된다.
// delayAction이 반환하는 것은 cancel함수 이기 때문에 그 함수를 바로 실행하도록 했다. 밖에서 받아서 처리할 수 있다.

export default function App() {
  return <div>실전 리액트</div>;
}
