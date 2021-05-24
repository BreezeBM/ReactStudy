import { createStore } from "redux";
import { createReducer } from "./redux-helper";

const INITIAL_STATE = { value: 0 };
const reducer = createReducer(INITIAL_STATE, {
  INCREMENT: (state) => (state.value += 1),
});
const store = createStore(reducer);

let prevState;
store.subscribe(() => {
  const state = store.getState();
  if (state === prevState) {
    console.log("상탯값 같음");
  } else {
    console.log("상탯값 변경됨");
  }
  prevState = state;
});

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "OTHER_ACTION" });
store.dispatch({ type: "INCREMENT" });

/*
스토어 생성은 createStore로 합니다. 내부에 reducer를 입력하면 됩니다. 스토어는 상태값을 저장하는 역할도 있고
그리고 액션 처리가 끝났다는 것을 외부에 알려주는 역할도 합니다. 

그액션 처리가 끝났다는 이벤트를 받기 위해서는 스토어에 subscribe를 호출해서 함수를 입력하면 됩니다.

액션을 발생시켰을 때, 액션에 대한 처리가 끝나면 
store.subscribe(() => {
  const state = store.getState();
  if (state === prevState) {
    console.log("상탯값 같음");
  } else {
    console.log("상탯값 변경됨");
  }
  prevState = state;
});
함수가 호출이 된다.
*/
