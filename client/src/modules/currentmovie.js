import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import  createRequestSaga, {createRequestActionTypes } from "../lib/createRequestSaga";
import * as movieAPI from "../lib/api/movie";

const [
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE,
] = createRequestActionTypes('currentmovie/LIST_POSTS');

const [
  UPCOMING_POSTS,
  UPCOMING_POSTS_SUCCESS,
  UPCOMING_POSTS_FAILURE,
] = createRequestActionTypes('currentmovie/UPCOMING_POSTS');

export const listPosts = createAction(LIST_POSTS);
export const upcomingPosts = createAction(UPCOMING_POSTS);

const listPostsSaga = createRequestSaga(LIST_POSTS, movieAPI.movielist);
const upcomingPostsSaga = createRequestSaga(UPCOMING_POSTS, movieAPI.movielist);

export function* movieSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
  yield takeLatest(UPCOMING_POSTS, upcomingPostsSaga);
}

const initialState = {
  movielist: [],
  upcominglist: [],
  error: null,
};

const movielist = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, {payload: movielist}) => ({
      ...state,
      movielist,
    }),
    [LIST_POSTS_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error,
    }),
    [UPCOMING_POSTS_SUCCESS]: (state, {payload: upcominglist}) => ({
      ...state,
      upcominglist,
    }),
    [UPCOMING_POSTS_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default movielist;