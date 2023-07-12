import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as eventAPI from "../lib/api/event";

const [
  EVENT_POST_MOVIE, 
  EVENT_POST_MOVIE_SUCCESS, 
  EVENT_POST_MOVIE_FAILURE
] =
  createRequestActionTypes("movie/EVENT_POST_MOVIE");

const [
  EVENT_POST_PROMOTE,
  EVENT_POST_PROMOTE_SUCCESS,
  EVENT_POST_PROMOTE_FAILURE,
] = createRequestActionTypes("promote/EVENT_POST_PROMOTE");

const [
  EVENT_POST_OTHER, 
  EVENT_POST_OTHER_SUCCESS, 
  EVENT_POST_OTHER_FAILURE
] = createRequestActionTypes("other/EVENT_POST_OTHER");

export const eventPostMovie = createAction(
  EVENT_POST_MOVIE,
  (eventNum) => eventNum
);
export const eventPostPromote = createAction(
  EVENT_POST_PROMOTE,
  (eventNum) => eventNum
);
export const eventPostOther = createAction(
  EVENT_POST_OTHER,
  (eventNum) => eventNum
);

const eventPostMovieSaga = createRequestSaga(
  EVENT_POST_MOVIE,
  eventAPI.eventmovielist
);
const eventPostPromoteSaga = createRequestSaga(
  EVENT_POST_PROMOTE,
  eventAPI.eventpromotelist
);
const eventPostOtherSaga = createRequestSaga(
  EVENT_POST_OTHER,
  eventAPI.eventotherlist
);

export function* eventPostSaga() {
  yield takeLatest(EVENT_POST_MOVIE, eventPostMovieSaga);
  yield takeLatest(EVENT_POST_PROMOTE, eventPostPromoteSaga);
  yield takeLatest(EVENT_POST_OTHER, eventPostOtherSaga);
}

const initialState = {
  eventDetail: [],
  error: null,
};

const eventpost = handleActions(
  {
    [EVENT_POST_MOVIE_SUCCESS]: (state, { payload: eventDetail }) => ({
      ...state,
      eventDetail,
    }),
    [EVENT_POST_MOVIE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [EVENT_POST_PROMOTE_SUCCESS]: (state, { payload: eventDetail }) => ({
      ...state,
      eventDetail,
    }),
    [EVENT_POST_PROMOTE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [EVENT_POST_OTHER_SUCCESS]: (state, { payload: eventDetail }) => ({
      ...state,
      eventDetail,
    }),
    [EVENT_POST_OTHER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);
export default eventpost;
