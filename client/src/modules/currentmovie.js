import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import  createRequestSaga, {createRequestActionTypes } from "../lib/createRequestSaga";
import * as movieAPI from "../lib/api/movie";

const [
  LIST_MOVIE,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAILURE, 
] = createRequestActionTypes('currentmovie/LIST_MOVIE');

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

const [
  DELETE_LIST,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE,
] = createRequestActionTypes('currentmovie/DELETE_LIST');

export const listMovie = createAction(LIST_MOVIE);
export const listPosts = createAction(LIST_POSTS);
export const updateList = createAction(UPDATE_LIST, ({title, vote_count, vote_average, popularity, id, poster_path, selectedValue}) => ({
  title, vote_count, vote_average, popularity, id, poster_path, selectedValue
}));
export const deleteList = createAction(DELETE_LIST, (movie_num) => ({movie_num}));

const listMovieSaga = createRequestSaga(LIST_MOVIE, movieAPI.currentlist);
const listPostsSaga = createRequestSaga(LIST_POSTS, movieAPI.movielist);
const updateListSaga = createRequestSaga(UPDATE_LIST, movieAPI.updateMovielist);
const deleteListSaga = createRequestSaga(DELETE_LIST, movieAPI.adminRemove);

export function* movieSaga() {
  yield takeLatest(LIST_MOVIE, listMovieSaga);
  yield takeLatest(LIST_POSTS, listPostsSaga);
  yield takeLatest(UPDATE_LIST, updateListSaga);
  yield takeLatest(DELETE_LIST, deleteListSaga);
}

const initialState = {
  currentmovielist: [],
  movielist: [],
  error: null,
};

const movielist = handleActions(
  {
    [LIST_MOVIE_SUCCESS]: (state, {payload: currentmovielist}) => ({
      ...state,
      currentmovielist,
    }),
    [LIST_MOVIE_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error,
    }),
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
    [DELETE_LIST_SUCCESS]: (state, {payload: currentmovielist}) => ({
      ...state,
      currentmovielist,
    }),
    [DELETE_LIST_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default movielist;