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
import meetcomment, { meetCommentSaga } from "./meetcomment";
import postcomment, { postCommentSaga } from "./postcomment";
import adminposts, { adminpostsSaga } from "./admin/adminposts";
import adminPost, { adminPostSaga } from "./admin/adminpost";
import adminuser, { adminuserSaga } from "./admin/adminuser";

import stepfirst, {
  regionSaga,
  SelectedSaga,
  movieReadSaga,
  timeSaga,
} from "./stepfirst";
import stepsecond, { paymentSaga } from "./stepsecond";
import meetwrite, { meetWriteSaga } from "./meetwrite";
import meet, { meetSaga } from "./meet";
import meetlist, { meetsSaga } from "./meetlist";
import eventlist, { eventSaga } from "./eventlist";
import cinema, { cinemaSaga } from "./cinema";
import meetboard, { meetBoardSaga } from "./meetboard";
import adminevent, { readEventSaga } from "./admin/adminevent";
import admineventlist, { adminEventListSaga } from "./admin/admineventlist";
import admineventwrite, { adminEventWriteSaga } from "./admin/admineventwrite";
import mypage, { mypageSaga } from "./mypage";
import admininquiry, { admininquirySaga } from "./admin/admininquiry";
import adminschedule, {scheduleSaga} from "./admin/adminschedule";
import admincinema, {admincinemaSaga} from "./admin/admincinema";

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
  stepsecond,
  meetwrite,
  meet,
  meetlist,
  meetboard,
  meetcomment,
  eventlist,
  cinema,
  eventpost,
  postcomment,
  mypage,
  adminposts,
  adminPost,
  adminevent,
  admineventlist,
  admineventwrite,
  admininquiry,
  adminuser,
  adminschedule,
  admincinema,
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
    meetBoardSaga(),
    meetCommentSaga(),
    moviedetailSaga(),
    movieReadSaga(),
    eventSaga(),
    cinemaSaga(),
    eventPostSaga(),
    timeSaga(),
    postCommentSaga(),
    mypageSaga(),
    adminpostsSaga(),
    adminPostSaga(),
    readEventSaga(),
    adminEventListSaga(),
    adminEventWriteSaga(),
    paymentSaga(),
    admininquirySaga(),
    adminuserSaga(),
    scheduleSaga(),
    admincinemaSaga(),
  ]);
}

export default rootReducer;
