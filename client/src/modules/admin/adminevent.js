import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as admineventAPI from "../../lib/api/admin/adminevent";
import { takeLatest } from "redux-saga/effects";

const [READ_EVENT, READ_EVENT_SUCCESS, READ_EVENT_FAILURE] =
  createRequestActionTypes("adminevent/READ_EVENT");
const UNLOAD_EVENT = "adminevent/UNLOAD_EVENT";

export const readEvent = createAction(READ_EVENT, (eventNum) => eventNum);
export const unloadEvent = createAction(UNLOAD_EVENT);

const readEventsSaga = createRequestSaga(READ_EVENT, (eventNum) => {
  return admineventAPI.readAdminEvent(eventNum);
});
export function* readEventSaga() {
  yield takeLatest(READ_EVENT, readEventsSaga);
}

const initialState = {
  adminevent: [],
  error: null,
};

const adminevent = handleActions(
  {
    [READ_EVENT_SUCCESS]: (state, { payload: adminevent }) => ({
      ...state,
      adminevent,
    }),
    [READ_EVENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_EVENT]: () => initialState,
  },
  initialState
);

export default adminevent;
