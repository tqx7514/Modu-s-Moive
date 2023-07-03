import auth, { authSaga } from "./auth";
import { combineReducers } from "redux";
import loading from "./loading";
import { all } from "redux-saga/effects";
import user, { userSaga } from "./user";
import write, { writeSaga } from "./write";
import post, { postSaga } from "./post";
import movielist, {movieSaga} from "./currentmovie";
import moviedetail, {detailSaga} from "./moviedetail";
import posts, { postsSaga } from "./posts";
import stepfirst, { regionSaga, SelectedSaga } from "./stepfirst";


const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  movielist,
  // moviedetail,
  posts,
  stepfirst,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga(),movieSaga(), regionSaga(), SelectedSaga()]);
}

export default rootReducer;
