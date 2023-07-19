import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as eventAPI from "../lib/api/event";

const [EVENT_POST, EVENT_POST_SUCCESS, EVENT_POST_FAILURE] =
  createRequestActionTypes("eventpost/EVENT_POST");

// const [EVENT_EDIT, EVENT_EDIT_SUCCESS, EVENT_EDIT_FAILURE] =
//   createRequestActionTypes("eventpost/EVENT_EDIT");

// const [EVENT_DELETE, EVENT_DELETE_SUCCESS, EVENT_DELETE_FAILURE] =
//   createRequestActionTypes("eventpost/EVENT_DELETE");

export const eventPost = createAction(EVENT_POST, (eventNum) => eventNum);
// export const eventEdit = createAction(EVENT_EDIT, (eventNum) => eventNum);
// export const eventDelete = createAction(EVENT_DELETE, (eventNum) => eventNum);

const eventPostSagaWorker = createRequestSaga(EVENT_POST, (eventNum) => {
  if (eventNum.startsWith("admin")) {
    return eventAPI.admineventview(eventNum);
  } else {
    return eventAPI.eventview(eventNum);
  }
});

// const eventEditSagaWorker = createRequestSaga(EVENT_EDIT, (eventNum) => {
//   return eventAPI.editEvent(eventNum);
// });

// const eventDeleteSagaWorker = createRequestSaga(EVENT_DELETE, (eventNum) => {
//   return eventAPI.deleteEvent(eventNum);
// });

export function* eventPostSaga() {
  yield takeLatest(EVENT_POST, eventPostSagaWorker);
  // yield takeLatest(EVENT_EDIT, eventEditSagaWorker);
  // yield takeLatest(EVENT_DELETE, eventDeleteSagaWorker);
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
    // [EVENT_EDIT_SUCCESS]: (state, { payload: eventDetail }) => ({
    //   ...state,
    //   eventDetail,
    // }),
    // [EVENT_EDIT_FAILURE]: (state, { payload: error }) => ({
    //   ...state,
    //   error,
    // }),
    // [EVENT_DELETE_SUCCESS]: (state) => ({
    //   ...state,
    //   eventDetail: null,
    // }),
    // [EVENT_DELETE_FAILURE]: (state, { payload: error }) => ({
    //   ...state,
    //   error,
    // }),
  },
  initialState
);
export default eventpost;
