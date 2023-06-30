import auth, { authSaga } from "./auth";
import { combineReducers } from "redux";
import loading from "./loading";
import { all } from "redux-saga/effects";
import user, { userSaga } from "./user";
import write, { writeSaga } from "./write";
import post, { postSaga } from "./post";
import meetwrite, { meetWriteSaga } from "./meetwrite";
import meet, { meetSaga } from "./meet";
import meetlist, { meetsSaga } from "./meetlist";

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  meetwrite,
  meet,
  meetlist,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    meetWriteSaga(),
    meetSaga(),
    meetsSaga(),
  ]);
}

export default rootReducer;
