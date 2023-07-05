import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as eventAPI from "../lib/api/movie";

const [
  LIST_EVENTS,
  LIST_EVENTS_SUCCESS,
  LIST_EVENTS_FAILURE,
] = createRequestActionTypes('event/LIST_EVENT');

const [
  UPCOMING_EVENTS,
  UPCOMING_EVENTS_SUCCESS,
  UPCOMING_EVENTS_FAILURE,
] = createRequestActionTypes('event/UPCOMING_EVENTS');

export const listEvents = createAction(LIST_EVENTS);
export const upcomingEvents = createAction(UPCOMING_EVENTS);

const listEventsSaga = createRequestSaga(LIST_EVENTS, eventAPI.eventlist);
const upcomingEventsSaga = createRequestSaga(UPCOMING_EVENTS, eventAPI.eventlist);

export function* eventSaga() {
  yield takeLatest(LIST_EVENTS, listEventsSaga);
  yield takeLatest(UPCOMING_EVENTS, upcomingEventsSaga);
}
const initialState = {
  eventlist: [],
  upcomingeventlist: [],
  error: null,
};

const eventlist = handleActions(
  {
    [LIST_EVENTS_SUCCESS]: (state, {payload: eventlist}) => ({
      ...state,
      eventlist,
    }),
    [LIST_EVENTS_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error,
    }),
    [UPCOMING_EVENTS_SUCCESS]: (state, {payload: upcomingeventlist}) => ({
      ...state,
      upcomingeventlist,
    }),
    [UPCOMING_EVENTS_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
  },
  initialState,
);

export default eventlist;