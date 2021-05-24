const saveToLocalStorage = (store) => (next) => (action) => {
  if (action.meta?.localStorageKey) {
    localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
  }
  return next(action);
};

/*
action.meta?.localStorageKey가 존재하면 localStorage에 저장을 해줍니다. 
*/
