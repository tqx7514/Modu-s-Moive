import auth, { authSaga } from "./auth";
import { combineReducers } from "redux";
import loading from "./loading";
import { all } from "redux-saga/effects";
import user, { userSaga } from "./user";
import write, { writeSaga } from "./write";
import post, { postSaga } from "./post";
import movielist, { movieSaga } from "./currentmovie";
import moviedetail, { moviedetailSaga } from "./moviedetail";
import posts, { postsSaga } from "./posts";
import eventpost, { eventPostSaga } from "./eventpost";

import stepfirst, {
  regionSaga,
  SelectedSaga,
  movieReadSaga,
} from "./stepfirst";
import meetwrite, { meetWriteSaga } from "./meetwrite";
import meet, { meetSaga } from "./meet";
import meetlist, { meetsSaga } from "./meetlist";
import eventlist, { eventSaga } from "./eventlist";
import cinema, { cinemaSaga } from "./cinema";

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  movielist,
  moviedetail,
  posts,
  stepfirst,
  meetwrite,
  meet,
  meetlist,
  eventlist,
  cinema,
  eventpost,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    postsSaga(),
    movieSaga(),
    regionSaga(),
    SelectedSaga(),
    meetWriteSaga(),
    meetSaga(),
    meetsSaga(),
    moviedetailSaga(),
    movieReadSaga(),
    eventSaga(),
    cinemaSaga(),
    eventPostSaga(),
  ]);
}

export default rootReducer;
