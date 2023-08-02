import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as movieAPI from "../lib/api/movie";
import { takeLatest } from "redux-saga/effects";

const [DETAIL_POST, DETAIL_POST_SUCCESS, DETAIL_POST_FAIURE] =
  createRequestActionTypes("moviedetail/DETAIL_POST");

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

const [CREATE_LIKE, CREATE_LIKE_SUCCESS, CREATE_LIKE_FAILURE] =
  createRequestActionTypes("moviedetail/CREATE_LIKE");

const [DEL_LIKE, DEL_LIKE_SUCCESS, DEL_LIKE_FAILURE] = 
  createRequestActionTypes("moviedetail/DEL_LIKE");

const [LIKE, LIKE_SUCCESS, LIKE_FAILURE] =
  createRequestActionTypes("moviedetail/LIKE");

export const readDetail = createAction(DETAIL_POST, (id) => id);
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

export const createLike = createAction(CREATE_LIKE, (mc_num, userid) => ({
  mc_num, userid
}));

export const removeComment = 
  createAction(
  REMOVE_COMMENT,
  ({commentNum,movie_id}) => ({commentNum,movie_id})
);

export const delLike = createAction(DEL_LIKE, (mc_num, userid) => ({
  mc_num, userid
}));

export const movieDetailLike = createAction(LIKE);

const readDetailSaga = createRequestSaga(DETAIL_POST, movieAPI.moviedetail);
const readCommentSaga = createRequestSaga(READ_COMMENT, movieAPI.moviedetail);
const commentWriteSaga = createRequestSaga(
  COMMENT_WRITE,
  movieAPI.commentwrite
);
const updateCommentSaga = createRequestSaga(UPDATE_COMMENT, movieAPI.updateComment);
const removeCommentSaga = createRequestSaga(REMOVE_COMMENT, movieAPI.removeComment);
const createLikeSaga = createRequestSaga(CREATE_LIKE, movieAPI.createlike);
const delLikeSaga = createRequestSaga(DEL_LIKE, movieAPI.DelLike);
const likeSaga = createRequestSaga(LIKE, movieAPI.Like);

export function* moviedetailSaga() {
  yield takeLatest(DETAIL_POST, readDetailSaga);
  yield takeLatest(COMMENT_WRITE, commentWriteSaga);
  yield takeLatest(READ_COMMENT, readCommentSaga);
  yield takeLatest(UPDATE_COMMENT, updateCommentSaga);
  yield takeLatest(REMOVE_COMMENT, removeCommentSaga);
  yield takeLatest(CREATE_LIKE, createLikeSaga);
  yield takeLatest(DEL_LIKE, delLikeSaga);
  yield takeLatest(LIKE, likeSaga);
}

const initialState = {
  moviedetail: [],
  movielike: null,
  like: null,
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
    [CREATE_LIKE_SUCCESS]: (state, {payload: Detaillike}) => ({
      ...state,
      Detaillike: Detaillike.Detaillike,
    }),
    [CREATE_LIKE_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
    [DEL_LIKE_SUCCESS]: (state, {payload: movielike}) => ({
      ...state,
      movielike: movielike.movielike,
    }),
    [DEL_LIKE_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error,
    }),
    [LIKE_SUCCESS]: (state, {payload: like}) => ({
      ...state,
      like,
    }),
    [LIKE_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error,
    }),
  },
  initialState
);
export default moviedetail;
