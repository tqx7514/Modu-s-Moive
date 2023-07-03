import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import  createRequestSaga, {createRequestActionTypes } from "../lib/createRequestSaga";
import * as movieAPI from "../lib/api/movie";
 
const [
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE,
] = createRequestActionTypes('movie/LIST_POSTS');

export const listPosts = createAction(LIST_POSTS);

const listPostsSaga = createRequestSaga(LIST_POSTS, movieAPI.movielist);
export function* movieSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
}

const initialState = {
  movielist: [],
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
  },
  initialState,
);

export default movielist;