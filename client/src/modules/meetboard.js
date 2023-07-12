import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as meetsAPI from "../lib/api/meet";
import { takeLatest } from "redux-saga/effects";
import { produce } from "immer";

const INITIALIZE_FORM = "meetboard/INITIALIZE_FORM";
const CHANGE_FIELD = "meetboard/CHANGE_FIELD";
const [WRITE_MEETBOARD, WRITE_MEETBOARD_SUCCESS, WRITE_MEETBOARD_FAILURE] =
  createRequestActionTypes("meetboard/WRITE_MEETBOARD");
const [MEETBOARD_LIST, MEETBOARD_LIST_SUCCESS, MEETBOARD_LIST_FAILURE] =
  createRequestActionTypes("meetboard/MEETBOARD_LIST");
const [REMOVE_MEETBOARD, REMOVE_MEETBOARD_SUCCESS, REMOVE_MEETBOARD_FAILURE] =
  createRequestActionTypes("meetboard/REMOVE_MEETBOARD");
// const SET_ORIGINAL_MEETBOARD = "meetboard/SET_ORIGINAL_MEETBOARD";
const [UPDATE_MEETBOARD, UPDATE_MEETBOARD_SUCCESS, UPDATE_MEETBOARD_FAILURE] =
  createRequestActionTypes("meetboard/UPDATE_MEETBOARD");

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);
export const writeMeetBoard = createAction(
  WRITE_MEETBOARD,
  ({ body, userId, meetNum }) => ({ body, userId, meetNum })
);
export const meetBoardList = createAction(MEETBOARD_LIST, (meetNum) => meetNum);
export const removeMeetBoard = createAction(
  REMOVE_MEETBOARD,
  ({ meetboardNum, meetNum }) => ({ meetboardNum, meetNum })
);
// export const setOriginalMeetBoard = createAction(
//   SET_ORIGINAL_MEETBOARD,
//   (meetboard) => meetboard
// );
export const updateMeetBoard = createAction(
  UPDATE_MEETBOARD,
  ({ meetboardNum, MeetNum, body }) => ({ meetboardNum, MeetNum, body })
);

const writeMeetBoardSaga = createRequestSaga(
  WRITE_MEETBOARD,
  meetsAPI.writeMeetBoard
);
const meetBoardListSaga = createRequestSaga(
  MEETBOARD_LIST,
  meetsAPI.MeetBoardList
);
const removeMeetBoardSaga = createRequestSaga(
  REMOVE_MEETBOARD,
  meetsAPI.removeMeetBoard
);
const updateMeetBoardSaga = createRequestSaga(
  UPDATE_MEETBOARD,
  meetsAPI.updateMeetBoard
);

export function* meetBoardSaga() {
  yield takeLatest(WRITE_MEETBOARD, writeMeetBoardSaga);
  yield takeLatest(MEETBOARD_LIST, meetBoardListSaga);
  yield takeLatest(REMOVE_MEETBOARD, removeMeetBoardSaga);
  yield takeLatest(UPDATE_MEETBOARD, updateMeetBoardSaga);
}

const initialState = {
  write: {
    body: "",
    meetBoard: null,
    meetBoardError: null,
    originalMeetBoardNum: null,
  },
  list: {
    meetBoards: null,
    error: null,
  },
};

const meetboard = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [WRITE_MEETBOARD_SUCCESS]: (state, { payload: meetBoard }) => ({
      ...state,
      write: {
        ...state.write,
        meetBoard,
      },
    }),
    [WRITE_MEETBOARD_FAILURE]: (state, { payload: meetBoardError }) => ({
      ...state,
      write: {
        ...state.write,
        meetBoardError,
      },
    }),
    [MEETBOARD_LIST_SUCCESS]: (state, { payload: meetBoards }) => ({
      ...state,
      list: {
        ...state.list,
        meetBoards,
      },
    }),
    [MEETBOARD_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      list: {
        ...state.list,
        error,
      },
    }),
    [REMOVE_MEETBOARD_SUCCESS]: (state, { payload: meetBoards }) => ({
      ...state,
      list: {
        ...state.list,
        meetBoards,
      },
    }),
    [REMOVE_MEETBOARD_FAILURE]: (state, { payload: meetBoardError }) => ({
      ...state,
      list: {
        ...state.list,
        meetBoardError,
      },
    }),
    [UPDATE_MEETBOARD_SUCCESS]: (state, { payload: meetBoards }) => ({
      ...state,
      list: {
        ...state.list,
        meetBoards,
      },
    }),
  },
  initialState
);

export default meetboard;
