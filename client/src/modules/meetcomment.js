import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as meetsAPI from "../lib/api/meet";
import { takeLatest } from "redux-saga/effects";
import { produce } from "immer";

const [READ_MEETCOMMENT, READ_MEETCOMMENT_SUCCESS, READ_MEETCOMMENT_FAILURE] =
  createRequestActionTypes("meetcomment/READ_MEETCOMMENT");
const UNLOAD_MEETCOMMENT = "meetcomment/UNLOAD_MEETCOMMENT";

export const readMeetComment = createAction(
  READ_MEETCOMMENT,
  (meetboardNum) => meetboardNum
);
export const unloadComment = createAction(UNLOAD_MEETCOMMENT);

const readMeetCommentSaga = createRequestSaga(
  READ_MEETCOMMENT,
  meetsAPI.readComment
);

export function* meetCommentSaga() {
  yield takeLatest(READ_MEETCOMMENT, readMeetCommentSaga);
}

const initialState = {
  comments: null,
  error: null,
  write: {
    userId: "",
    body: "",
    meetboard_Num: "",
    comment: null,
    commentError: null,
    originalCommentNum: null,
  },
};

const meetcomment = handleActions(
  {
    [READ_MEETCOMMENT_SUCCESS]: (state, { payload: comments }) => ({
      ...state,
      comments,
    }),
    [READ_MEETCOMMENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_MEETCOMMENT]: () => initialState,
  },
  initialState
);

export default meetcomment;
