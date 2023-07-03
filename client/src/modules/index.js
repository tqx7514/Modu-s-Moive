import auth, { authSaga } from "./auth";
import { combineReducers } from "redux";
import loading from "./loading";
import { all } from "redux-saga/effects";
import user, { userSaga } from "./user";
import write from "./write";
import stepfirst, { regionSaga, SelectedSaga } from "./stepfirst";

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  stepfirst,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), regionSaga(), SelectedSaga()]);
}

export default rootReducer;
