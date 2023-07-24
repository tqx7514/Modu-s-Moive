import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as eventAPI from "../lib/api/event";

const [LIST_EVENTS, LIST_EVENTS_SUCCESS, LIST_EVENTS_FAILURE] =
  createRequestActionTypes("event/LIST_EVENTS");

export const listEvents = createAction(LIST_EVENTS);

const listEventsSaga = createRequestSaga(LIST_EVENTS, eventAPI.eventlist);

export function* eventSaga() {
  yield takeLatest(LIST_EVENTS, listEventsSaga);
}

const initialState = {
  eventlist: [],
  event: [],
  error: null,
};

const eventlist = handleActions(
  {
    [LIST_EVENTS_SUCCESS]: (state, { payload: event }) => ({
      ...state,
      event,
    }),
    [LIST_EVENTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default eventlist;
