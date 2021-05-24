function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: getNewId(), title: action.title, priority: action.priority },
        ],
      };
  }
}

/*
수정하려는 것이 깊은 곳에 있다면 이렇게 전개 연산자를 매번 사용하는 것이 번거롭습니다. 
*/
