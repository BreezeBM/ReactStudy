function Timer({ initialTotalSecond }) {
  const [state, dispatch] = useReducer(reduce, {
    hour: Math.floor(initialTotalSecond / 3600),
    minute: Math.floor((initialTotalSecond % 3600) / 60),
    second: initialTotalSecond % 60,
  });

  const { hour, minute, second } = state;
  useEffect(() => {
    const id = setInterval(dispatch, 1000);
    return () => clearInterval(id);
  });
  //...
}

function reducer(state) {
  const { hour, minute, second } = state;
  if (second) {
    return { ...state, second: second - 1 };
  } else if (minute) {
    return { ...state, minute: minute - 1, second: 59 };
  } else if (hour) {
    return { hour: hour - 1, minute: 59, second: 59 };
  } else {
    return state;
  }
}

/*
이렇게 여러 상태값을 참조하면서 값을 변경할 때는 
useReducer를 사용하는게 좋다.

dispatch함수는 변하지 않는 값이므로 의존성 배열에서 빠진다.
즉 의존성 배열로 빈배열을 입력했다고 생각하면 된다. 

값을 변경하는 로직은 reducer에 작성하면 된다. 
*/
