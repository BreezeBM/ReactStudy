import { all, call, debounce, put, takeLeading } from "redux-saga/effects";
import { actions, types } from "./index";
import { callApiLike } from "../../common/api";

export function* fetchData(action) {
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  yield put(actions.setValue("error", ""));
  try {
    yield call(callApiLike);
  } catch (error) {
    yield put(actions.setValue("error", error));
    yield put(actions.addLike(action.timeline.id, -1));
  }
  yield put(actions.setLoading(false));
}

// 액션으로 받은 text(action.text)를 "text" 상태값에 넣는다.
export function* trySetText(action) {
  yield put(actions.setValue("text", action.text));
}

export default function* () {
  yield all([
    takeLeading(types.REQUEST_LIKE, fetchData),
    debounce(500, types.TRY_SET_TEXT, trySetText),
  ]);
}

/*
types.REQUSET_LIKE 이 액션이 발생했을 때 두번째에 있는 fetchData 함수를 실행시켜 준다.
*/
