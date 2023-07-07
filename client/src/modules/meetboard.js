import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as meetsAPI from "../lib/api/meet";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "meetboard/INITIALIZE";
const CHANGE_FIELD = "meetboard/CHANGE_FIELD";
const [WRITE_MEETBOARD, WRITE_MEETBOARD_SUCCESS, WRITE_MEETBOARD_FAILURE] =
  createRequestActionTypes("meetboard/WRITE_MEETBOARD");
const [MEETBOARD_LIST, MEETBOARD_LIST_SUCCESS, MEETBOARD_LIST_FAILURE] =
  createRequestActionTypes("meetboard/MEETBOARD_LIST");

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ body, userId }) => ({
  body,
  userId,
}));
export const writeMeetBoard = createAction(
  WRITE_MEETBOARD,
  ({ body, userId, meetNum }) => ({ body, userId, meetNum })
);
export const meetBoardList = createAction(MEETBOARD_LIST, (meetNum) => meetNum);

const writeMeetBoardSaga = createRequestSaga(
  WRITE_MEETBOARD,
  meetsAPI.writeMeetBoard
);
const meetBoardListSaga = createRequestSaga(
  MEETBOARD_LIST,
  meetsAPI.MeetBoardList
);

export function* meetBoardSaga() {
  yield takeLatest(WRITE_MEETBOARD, writeMeetBoardSaga);
  yield takeLatest(MEETBOARD_LIST,meetBoardListSaga)
}

const initialState = {
  body: "",
  userId: "",
  meetBoard: null,
  meetBoardError: null,
  originalMeetBoardNum: null,
};

const meetboard = handleActions({
  [INITIALIZE]: (state) => initialState,
  [CHANGE_FIELD]: (state, { payload: { body, userId } }) => ({
    ...state,
    body,
    userId,
  }),
  [WRITE_MEETBOARD_SUCCESS]: (state, { payload: meetBoard }) => ({
    ...state,
    meetBoard,
  }),
  [WRITE_MEETBOARD_FAILURE]: (state, { payload: meetBoardError }) => ({
    ...state,
    meetBoardError,
  }),
  [MEETBOARD_LIST_SUCCESS]:(state,{payload:})
});

export default meetboard;
