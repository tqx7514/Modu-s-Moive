import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as adminInquiryAPI from "../../lib/api/admin/admininquiry";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "admininquiry/INITIALIZE";
const [
  ADMIN_INQUIRY_LIST,
  ADMIN_INQUIRY_LIST_SUCCESS,
  ADMIN_INQUIRY_LIST_FAILURE,
] = createRequestActionTypes("admininquiry/ADMIN_INQUIRY_LIST");

export const initialize = createAction(INITIALIZE);
export const adminInquiryList = createAction(
  ADMIN_INQUIRY_LIST,
  ({ page, category }) => ({ page, category })
);

const adminInquiryListSaga = createRequestSaga(
  ADMIN_INQUIRY_LIST,
  adminInquiryAPI.adminInquiryList
);

export function* admininquirySaga() {
  yield takeLatest(ADMIN_INQUIRY_LIST, adminInquiryListSaga);
}

const initialState = {
  inquiry: null,
  count: 0,
  lastPage: 1,
  error: null,
};

const admininquiry = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [ADMIN_INQUIRY_LIST_SUCCESS]: (
      state,
      { payload: { inquiry, count, lastPage } }
    ) => ({
      ...state,
      inquiry,
      count,
      lastPage,
      error: null,
    }),
    [ADMIN_INQUIRY_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default admininquiry;
