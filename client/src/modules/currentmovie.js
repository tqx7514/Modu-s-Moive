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
  UPDATE_LIST,
  UPDATE_LIST_SUCCESS,
  UPDATE_LIST_FAIURE,
] = createRequestActionTypes('currentmovie/UPDATE_LIST');

export const listPosts = createAction(LIST_POSTS);
export const updateList = createAction(UPDATE_LIST, ({title, vote_count, vote_average, popularity, id, poster_path}) => ({
  title, vote_count, vote_average, popularity, id, poster_path
}));

const listPostsSaga = createRequestSaga(LIST_POSTS, movieAPI.movielist);
const updateListSaga = createRequestSaga(UPDATE_LIST, movieAPI.updateMovielist);

export function* movieSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
  yield takeLatest(UPDATE_LIST, updateListSaga);
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
    [UPDATE_LIST_SUCCESS]: (state, {payload: updatemovies}) => ({
      ...state,
      updatemovies,
    }),
    [UPDATE_LIST_FAIURE]: (state, {payload: error}) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default movielist;