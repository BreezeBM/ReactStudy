function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD:
        draft.todos.push(action.todo);
        break;
      case REMOVE_ALL:
        draft.todos = [];
        break;
      case REMOVE:
        draft.todos = draft.todos.filter((todo) => todo.id !== action.id);
        break;
      default:
        break;
    }
  });
}
// 불변객체로 관리해야하는 어려움이나, 전개 연산자도 필요가 없다.
