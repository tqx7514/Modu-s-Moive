import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as movieAPI from "../lib/api/movie";
import { takeLatest } from "redux-saga/effects";

const [DETAIL_POST, DETAIL_POST_SUCCESS, DETAIL_POST_FAIURE] =
  createRequestActionTypes("moviedetail/DETAIL_POST");

const [DETAIL_IMAGE, DETAIL_IMAGE_SUCCESS, DETAIL_IMAGE_FAIURE] =
  createRequestActionTypes("moviedetail/DETAIL_IMAGE");

const [DETAIL_VIDEO, DETAIL_VIDEO_SUCCESS, DETAIL_VIDEO_FAIURE] =
  createRequestActionTypes("moviedetail/DETAIL_VIDEO");

const [DETAIL_CREDIT, DETAIL_CREDIT_SUCCESS, DETAIL_CREDIT_FAIURE] =
  createRequestActionTypes("moviedetail/DETAIL_CREDIT");

const [INITIALIZE] = createRequestActionTypes("moviedetail/INITIALIZE");

const [CHANGE_FIELD] = createRequestActionTypes("moviedetail/CHANGE_FIELD");

const [COMMENT_WRITE, COMMENT_WRITE_SUCCESS, COMMENT_WRITE_FAIURE] =
  createRequestActionTypes("moviedetail/COMMENT_WRITE");

const [READ_COMMENT, READ_COMMENT_SUCCESS, READ_COMMENT_FAIURE] =
  createRequestActionTypes("moviedetail/READ_COMMENT");

const [UPDATE_COMMENT, UPDATE_COMMENT_SUCCESS, UPDATE_COMMENT_FAIURE] =
  createRequestActionTypes("moviedetail/UPDATE_COMMENT");  

const [REMOVE_COMMENT, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAIURE] =
  createRequestActionTypes("moviedetail/REMOVE_COMMENT");

export const readDetail = createAction(DETAIL_POST, (id) => id);
export const imageDetail = createAction(DETAIL_IMAGE, (id) => id);
export const videoDetail = createAction(DETAIL_VIDEO, (id) => id);
export const creditDetail = createAction(DETAIL_CREDIT, (id) => id);

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const commentWrite = createAction(
  COMMENT_WRITE,
  ({ content, userId, movie_id, star }) => ({ content, userId, movie_id, star })
);
export const readComment = createAction(READ_COMMENT, (id) => id);

export const updateComment = createAction(UPDATE_COMMENT, ({
   commentNum, movie_id, editContent, rating,
}) => ({
    commentNum, movie_id, editContent, rating
}));

export const removeComment = 
  createAction(
  REMOVE_COMMENT,
  ({commentNum,movie_id}) => ({commentNum,movie_id})
);

const readDetailSaga = createRequestSaga(DETAIL_POST, movieAPI.moviedetail);
const imageDetailSaga = createRequestSaga(DETAIL_IMAGE, movieAPI.moviedetail);
const videoDetailSaga = createRequestSaga(DETAIL_VIDEO, movieAPI.moviedetail);
const creditDetailSaga = createRequestSaga(DETAIL_CREDIT, movieAPI.moviedetail);
const readCommentSaga = createRequestSaga(READ_COMMENT, movieAPI.moviedetail);
const commentWriteSaga = createRequestSaga(
  COMMENT_WRITE,
  movieAPI.commentwrite
);
const updateCommentSaga = createRequestSaga(UPDATE_COMMENT, movieAPI.updateComment);
const removeCommentSaga = createRequestSaga(REMOVE_COMMENT, movieAPI.removeComment);

export function* moviedetailSaga() {
  yield takeLatest(DETAIL_POST, readDetailSaga);
  yield takeLatest(DETAIL_IMAGE, imageDetailSaga);
  yield takeLatest(DETAIL_VIDEO, videoDetailSaga);
  yield takeLatest(DETAIL_CREDIT, creditDetailSaga);
  yield takeLatest(COMMENT_WRITE, commentWriteSaga);
  yield takeLatest(READ_COMMENT, readCommentSaga);
  yield takeLatest(UPDATE_COMMENT, updateCommentSaga);
  yield takeLatest(REMOVE_COMMENT, removeCommentSaga);
}

const initialState = {
  moviedetail: [],
  images: [],
  videos: [],
  credits: [],
  error: null,
  content: "",
  star: "",
  comment: "",
  commentlist: null,
  commentError: null,
};

const moviedetail = handleActions(
  {
    [DETAIL_POST_SUCCESS]: (state, { payload: moviedetail }) => ({
      ...state,
      moviedetail: moviedetail.moviedetail,
    }),
    [DETAIL_POST_FAIURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [DETAIL_IMAGE_SUCCESS]: (state, { payload: images }) => ({
      ...state,
      images: images.movieimage,
    }),
    [DETAIL_IMAGE_FAIURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [DETAIL_VIDEO_SUCCESS]: (state, { payload: videos }) => ({
      ...state,
      videos: videos.movievideo,
    }),
    [DETAIL_VIDEO_FAIURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [DETAIL_CREDIT_SUCCESS]: (state, { payload: credits }) => ({
      ...state,
      credits: credits.moviecredits,
      credit: credits.moviecredit,
    }),
    [DETAIL_CREDIT_FAIURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [INITIALIZE]: (state) => ({
      ...state,
      initialState,
    }),
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [COMMENT_WRITE]: (state) => ({
      ...state,
      comment: null,
      commentError: null,
    }),
    [COMMENT_WRITE_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      comment,
    }),
    [COMMENT_WRITE_FAIURE]: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
    [READ_COMMENT_SUCCESS]: (state, { payload: commentlist }) => ({
      ...state,
      commentlist: commentlist.commentlist,
    }),
    [READ_COMMENT_FAIURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UPDATE_COMMENT_SUCCESS]: (state, {payload: commentlist}) => ({
      ...state,
      commentlist: commentlist.commentlist,
    }),
    [UPDATE_COMMENT_FAIURE]: (state, {payload: error}) => ({
      ...state,
      error,
    }),
    [REMOVE_COMMENT_SUCCESS]: (state, {payload: commentlist}) => ({
      ...state,
      commentlist:commentlist.commentlist,
    }),
    [REMOVE_COMMENT_FAIURE]: (state, {payload: error}) => ({
      ...state,
      error,
    }),
  },
  initialState
);
export default moviedetail;
