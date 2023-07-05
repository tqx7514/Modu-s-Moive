import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as eventAPI from "../lib/api/event";
import { takeLatest } from "redux-saga/effect";

const [READ_EVENT, READ_EVENT_SUCCESS, READ_EVENT_FAILURE] =
  createRequestActionTypes("event/READ_EVENT");
const UNLOAD_EVENT = "event/UNLOAD_EVENT";

export const readEvent = createAction(READ_EVENT, (eventNum) => eventNum);
export const unLoadEvent = createAction(UNLOAD_EVENT);

const readEventSaga = createRequestSaga(READ_EVENT, eventAPI.readEvent);
export function* eventSaga() {
  yield takeLatest(READ_EVENT, readEventSaga);
}

const initialState = {
  event: null,
  error: null,
};

const event = handleActions(
  {
    [READ_EVENT_SUCCESS]: (state, { payload: event }) => ({
      ...state,
      event,
    }),
    [READ_EVENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_EVENT]: () => initialState,
  },
  initialState
);

export default event;
