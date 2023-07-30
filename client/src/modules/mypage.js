import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction } from "redux-actions";
import * as myPageAPI from "../lib/api/mypage";
import { takeLatest } from "redux-saga/effects";
import { handleActions } from "redux-actions";

const INITIALIZE = "mypage/INITIALIZE";
const CHANGE_FIELD = "mypage/CHANGE_FIELD";
const [INQUIRY_LIST, INQUIRY_LIST_SUCCESS, INQUIRY_LIST_FAILURE] =
  createRequestActionTypes("mypage/INQUIRY_LIST");

const [INQUIRY_WRITE, INQUIRY_WRITE_SUCCESS, INQUIRY_WRITE_FAILURE] =
  createRequestActionTypes("mypage/INQUIRY_WRITE");
const INQUIRY_UNLOAD = "mypage/INQUIRY_UNLOAD";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const inquiryList = createAction(INQUIRY_LIST, ({ id, page }) => ({
  id,
  page,
}));
export const inquiryWrite = createAction(
  INQUIRY_WRITE,
  ({ userId, classify, title, body, answer }) => ({
    userId,
    classify,
    title,
    body,
    answer,
  })
);
export const inquiryUnload = createAction(INQUIRY_UNLOAD);

const inquiryListSaga = createRequestSaga(INQUIRY_LIST, myPageAPI.myInquiry);
const inquiryWriteSaga = createRequestSaga(
  INQUIRY_WRITE,
  myPageAPI.writeInquiry
);

export function* mypageSaga() {
  yield takeLatest(INQUIRY_LIST, inquiryListSaga);
  yield takeLatest(INQUIRY_WRITE, inquiryWriteSaga);
}

const initialState = {
  inquiry: null,
  error: null,
  lastPage: 1,
  write: {
    classify: "",
    title: "",
    body: "",
    answer: "",
    inquiry: null,
  },
};

const mypage = handleActions(
  {
    [INITIALIZE]: (state) => ({
      ...state,
      error: null,
      write: initialState.write,
    }),
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      error: null,

      write: {
        ...state.write,
        [key]: value,
      },
    }),
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
    [INQUIRY_WRITE_SUCCESS]: (state, { payload: inquiry }) => ({
      ...state,
      error: null,

      write: {
        ...state.write,
        inquiry,
      },
    }),
    [INQUIRY_WRITE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [INQUIRY_UNLOAD]: (state) => ({
      ...state,
      error: null,
      inquiry: initialState.inquiry,
    }),
  },
  initialState
);

export default mypage;
