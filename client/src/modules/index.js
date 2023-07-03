import auth, { authSaga } from "./auth";
import { combineReducers } from "redux";
import loading from "./loading";
import { all } from "redux-saga/effects";
import user, { userSaga } from "./user";
import write, { writeSaga } from "./write";
import post, { postSaga } from "./post";
import movielist, {movieSaga} from "./currentmovie";
import moviedetail, {detailSaga} from "./moviedetail";


const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  movielist,
  // moviedetail,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(),movieSaga(),]);
}

export default rootReducer;
