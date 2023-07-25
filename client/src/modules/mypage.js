import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction } from "redux-actions";
import * as myPageAPI from "../lib/api/mypage";
import { takeLatest } from "redux-saga/effects";
import { handleActions } from "redux-actions";

const [INQUIRY_LIST, INQUIRY_LIST_SUCCESS, INQUIRY_LIST_FAILURE] =
  createRequestActionTypes("mypage/INQUIRY_LIST");

export const inquiryList = createAction(INQUIRY_LIST, ({ id, page }) => ({
  id,
  page,
}));

const inquiryListSaga = createRequestSaga(INQUIRY_LIST, myPageAPI.myInquiry);

export function* mypageSaga() {
  yield takeLatest(INQUIRY_LIST, inquiryListSaga);
}

const initialState = {
  inquiry: null,
  error: null,
  lastPage: 1,
};

const mypage = handleActions(
  {
    [INQUIRY_LIST_SUCCESS]: (state, { payload: inquiry }) => ({
      ...state,
      inquiry: inquiry.inquiryDataArray,
      lastPage: inquiry.totalPages,
      error: null,
    }),
    [INQUIRY_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default mypage;
