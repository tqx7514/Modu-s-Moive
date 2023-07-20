import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as eventAPI from "../lib/api/event";

const [EVENT_POST, EVENT_POST_SUCCESS, EVENT_POST_FAILURE] =
  createRequestActionTypes("eventpost/EVENT_POST");

export const eventPost = createAction(EVENT_POST, (eventNum) => eventNum);

const eventPostSagaWorker = createRequestSaga(EVENT_POST, (eventNum) => {
  return eventAPI.eventview(eventNum);
});

export function* eventPostSaga() {
  yield takeLatest(EVENT_POST, eventPostSagaWorker);
}

const initialState = {
  eventDetail: [],
  error: null,
};

const eventpost = handleActions(
  {
    [EVENT_POST_SUCCESS]: (state, { payload: eventDetail }) => ({
      ...state,
      eventDetail,
    }),
    [EVENT_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);
export default eventpost;
