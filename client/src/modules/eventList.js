import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as eventAPI from "../lib/api/event";
import { takeLatest } from "redux-saga/effects";

const [EVENT_LIST, EVENT_LIST_SUCCESS, EVENT_LIST_FAILURE] =
  createRequestActionTypes("event/EVENT_LIST");

export const eventlist = createAction(
  EVENT_LIST,
  ({ eventTitle, eventImg, startEventDate, endEventDate }) => ({
    eventTitle,
    eventImg,
    startEventDate,
    endEventDate,
  })
);

const eventListSaga = createRequestSaga(EVENT_LIST, eventAPI.readEvent);
export function* eventsSaga() {
  yield takeLatest(EVENT_LIST, eventListSaga);
}

const initialState = {
  events: null,
  error: null,
  lastPage: 1,
};

const eventList = handleActions(
  {
    [EVENT_LIST_SUCCESS]: (state, { payload: events }) => ({
      ...state,
      events: events.event,
      lastPage: events.totalPages,
    }),
    [EVENT_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default eventList;
