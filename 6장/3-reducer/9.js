const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.todos.push(action.todo),
  [REMOVE_ALL]: (state) => (state.todos = []),
  [REMOVE]: (state.todos = state.todos.filter((todo) => todo.id !== action.id)),
});
/*
5번 파일과 같은 로직으로 작성했다. 
*/
