import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction } from "redux-actions";
import * as meetAPI from "../lib/api/meet";
import { takeLatest } from "redux-saga/effects";
import { handleActions } from "redux-actions";

const [MEET_LIST, MEET_LIST_SUCCESS, MEET_LIST_FAILURE] =
  createRequestActionTypes("meet/MEET_LIST");

export const meetList = createAction(MEET_LIST, ({ tag, region, page }) => ({
  tag,
  region,
  page,
}));

const meetListSaga = createRequestSaga(MEET_LIST, meetAPI.Meetlist);
export function* meetsSaga() {
  yield takeLatest(MEET_LIST, meetListSaga);
}

const initialState = {
  meets: null,
  error: null,
  lastPage: 1,
};

const meetlist = handleActions(
  {
    [MEET_LIST_SUCCESS]: (state, { payload: meets }) => ({
      ...state,
      meets: meets.meet,
      // lastPage: parseInt(response.headers["last-page"], 10),
      lastPage: meets.totalPages,
    }),
    [MEET_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default meetlist;
