import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as admineventAPI from "../../lib/api/admin/adminevent";
import { takeLatest } from "redux-saga/effects";

const [ADMINEVENT_LIST, ADMINEVENT_LIST_SUCCESS, ADMINEVENT_LIST_FAILURE] =
  createRequestActionTypes("adminevent/ADMINEVENT_LIST");

export const adminEventList = createAction(ADMINEVENT_LIST, ({ page }) => ({
  page,
}));

const adminEventListsSaga = createRequestSaga(
  ADMINEVENT_LIST,
  admineventAPI.adminEventBoardList
);
export function* adminEventListSaga() {
  yield takeLatest(ADMINEVENT_LIST, adminEventListsSaga);
}

const initialState = {
  admineventlist: null,
  error: null,
  lastPage: 1,
};

const admineventlist = handleActions(
  {
    [ADMINEVENT_LIST_SUCCESS]: (state, { payload: admineventlist }) => ({
      ...state,
      admineventlist: admineventlist.admineventlist,
      lastPage: admineventlist.totalPages,
    }),
    [ADMINEVENT_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

console.log("admineventlist ===========================> ", admineventlist);

export default admineventlist;
