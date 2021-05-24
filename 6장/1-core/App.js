import React, { useContext, createContext, useReducer } from "react";

const AppContext = createContext({});
const DispatchContext = createContext(() => {});

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <AppContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <User />
          <Product />
        </DispatchContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

const INITIAL_STATE = {
  user: { name: "mike" },
  product: { name: "iphone" },
};

function reducer(state, action) {
  switch (action.type) {
    case "setUserName":
      return {
        ...state,
        user: { ...state.user, name: action.name },
      };
  }
}

function User() {
  console.log("User render");
  const { user } = useContext(AppContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div>
      <p>{`${user.name}님 안녕하세요`}</p>
      <button onClick={() => dispatch({ type: "setUserName", name: "john" })}>
        사용자 이름 수정
      </button>
    </div>
  );
}

function Product() {
  console.log("Product render");
  const { product } = useContext(AppContext);
  return <p>{`제품이름 : ${product.name}`}</p>;
}

/*
애플리케이션 전체 상태를 Context API와 useReducer를 이용해서 구현을 했습니다. 최상위 컴포넌트
(APP)에서 전체 상태값을 관리를 합니다. 여기는 두가지 Contextr가 있습니다. 

애플리케이션 전체 상태를 내려주는 AppContext가 있고, dispatch 함수를 내려주는 DispatchContext가
있습니다. 

이렇게 최상위 컴포넌트에서 Provider 컴포넌트를 렌더링을 하고있습니다.

버튼을 클릭하게 되면, User와 Product둘 다 렌더링이 된다. User와 Product가 모두 하나의 Context로 관리되기 때문에 그렇습니다. 
어떤 데이터가 변경이 되든, 이안에 있는 데이터(INITIAL_STATE)가 하나라도 변경이 되면 AppContext
를 사용하는 모든 컴포넌트가 다시 렌더링이 된다. 

리액트 컨텍스트는 효율적으로 작성하기는 어렵다.
*/
