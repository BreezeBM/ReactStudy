const delayAction = (store) => (next) => (action) => {
  const delay = action.meta?.delay;
  if (!delay) {
    return next(action);
  }

  const timeoutId = setTimeout(() => next(action), delay);
  return function cancel() {
    clearTimeout(timeoutId);
  };
};

/*
action meta에 delay라는 값이 있을 때,
만약에 없으면 바로 호출을 하고 끝낸다. delay가 있을 때는 setTimeout으로 딜레이를 해줘서 리듀서를
늦게 실행하는 그런 코드입니다. 그리고 cancel이라는 함수를 반환 해줘서 밖에서 next가 샐행되는 게 취소가 될 수 있게
부가적인 기능을 하는 코드입니다. 
*/
