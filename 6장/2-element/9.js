const reportCrash = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    // consloe.log(err)
  }
};

/*
리듀서에서 뭔가 잘못 처리가 됐을 때 예외가 발생했을 때,
그것을 catch해서 서버로 예외를 전송한다던가 하는 기능을 구현할 수도 있겠죠
*/
