import auth, { authSaga } from "./auth";
import { combineReducers } from "redux";
import loading from "./loading";
import { all } from "redux-saga/effects";
import user, { userSaga } from "./user";
import write, { writeSaga } from "./write";
import post, { postSaga } from "./post";
import meetwrite, { meetWriteSaga } from "./meetwrite";
import meet, { meetSaga } from "./meet";

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  meetwrite,
  meet,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    meetWriteSaga(),
    meetSaga(),
  ]);
}

export default rootReducer;
