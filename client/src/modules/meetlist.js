import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction } from "redux-actions";
import * as meetAPI from "../lib/api/meet";
import { takeLatest } from "redux-saga/effects";
import { handleActions } from "redux-actions";

const [MEET_LIST, MEET_LIST_SUCCESS, MEET_LIST_FAILURE] =
  createRequestActionTypes("meetlist/MEET_LIST");

export const meetList = createAction(
  MEET_LIST,
  ({ tag, region, page, sort }) => ({
    tag,
    region,
    page,
    sort,
  })
);

const meetListSaga = createRequestSaga(MEET_LIST, meetAPI.Meetlist);
export function* meetsSaga() {
  yield takeLatest(MEET_LIST, meetListSaga);
}

const initialState = {
  meets: null,
  error: null,
  count: 0,
  lastPage: 1,
  regions: null,
};

const meetlist = handleActions(
  {
    [MEET_LIST_SUCCESS]: (state, { payload: meets }) => ({
      ...state,
      meets: meets.meet,
      lastPage: meets.totalPages,
      regions: meets.regionArray,
      count: meets.count,
      error: null,
    }),
    [MEET_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default meetlist;
