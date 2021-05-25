function* loginFlow() {
  while (true) {
    const { id, password } = yield take(types.LOGIN);
    const userInfo = yield call(callApiLogin, id, password);
    yield put({ typesSET_UESR_INFO, userInfo });
    yield take(types.LOGOUT);
    yield call(callApiLogin, id);
    yield put(types.SET_UESR_INFO, null);
  }
}
