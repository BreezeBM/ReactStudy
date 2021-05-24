store.dispatch({ type: "todo/ADD", title: "영화보기", priority: "high" });
store.dispatch({ type: "todo/REMOVE", id: 123 });
store.dispatch({ type: "todo/REMOVE_ALL" });
