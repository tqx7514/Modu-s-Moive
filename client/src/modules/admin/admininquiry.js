import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as adminInquiryAPI from "../../lib/api/admin/admininquiry";
import { createAction, handleActions } from "redux-actions";

const INITIALIZE = "admininquiry/INITIALIZE";
const [
  ADMIN_INQUIRY_LIST,
  ADMIN_INQUIRY_LIST_SUCCESS,
  ADMIN_INQUIRY_LIST_FAILURE,
] = createRequestActionTypes("admininquiry/ADMIN_INQUIRY_LIST");
const [UPDATE_ANSWER, UPDATE_ANSWER_SUCCESS, UPDATE_ANSWER_FAILURE] =
  createRequestActionTypes("admininquiry/UPDATE_ANSWER");

export const initialize = createAction(INITIALIZE);
export const adminInquiryList = createAction(
  ADMIN_INQUIRY_LIST,
  ({ page, category, sort, classify }) => ({ page, category, sort, classify })
);
export const answerUpdate = createAction(
  UPDATE_ANSWER,
  ({ inquiryNum, answer }) => ({
    inquiryNum,
    answer,
  })
);

const adminInquiryListSaga = createRequestSaga(
  ADMIN_INQUIRY_LIST,
  adminInquiryAPI.adminInquiryList
);

const answerUpdateSaga = createRequestSaga(
  UPDATE_ANSWER,
  adminInquiryAPI.updateAnswer
);

export function* admininquirySaga() {
  yield takeLatest(ADMIN_INQUIRY_LIST, adminInquiryListSaga);
  yield takeLatest(UPDATE_ANSWER, answerUpdateSaga);
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
    [UPDATE_ANSWER_SUCCESS]: (state, { payload: inquiry }) => ({
      ...state,
      inquiry,
    }),
    [UPDATE_ANSWER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default admininquiry;
