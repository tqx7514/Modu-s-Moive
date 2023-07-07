import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as meetsAPI from "../lib/api/meet";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "meet/INITIALIZE";
const CHANGE_FIELD = "meet/CHANGE_FIELD";
const [WRITE_MEET, WRITE_MEET_SUCCESS, WRITE_MEET_FAILURE] =
  createRequestActionTypes("meet/WRITE_MEET");
const SET_ORIGINAL_MEET = "meet/SET_ORIGINAL_MEET";
const [UPDATE_MEET, UPDATE_MEET_SUCCESS, UPDATE_MEET_FAILURE] =
  createRequestActionTypes("meet/UPDATE_MEET");

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeMeet = createAction(
  WRITE_MEET,
  ({ title, body, tags, userId, region }) => ({
    title,
    body,
    tags,
    userId,
    region,
  })
);
export const setOriginalMeet = createAction(SET_ORIGINAL_MEET, (meet) => meet);
export const updateMeet = createAction(
  UPDATE_MEET,
  ({ meetNum, title, body, tags, region }) => ({
    meetNum,
    title,
    body,
    tags,
    region,
  })
);

const writeMeetSaga = createRequestSaga(WRITE_MEET, meetsAPI.writeMeet);
const updateMeetSaga = createRequestSaga(UPDATE_MEET, meetsAPI.updateMeet);

export function* meetWriteSaga() {
  yield takeLatest(WRITE_MEET, writeMeetSaga);
  yield takeLatest(UPDATE_MEET, updateMeetSaga);
}

const initialState = {
  title: "",
  body: "",
  tags: [],
  userId: "",
  region: "",
  meet: null,
  meetError: null,
  originalMeetNum: null,
};

const meetwrite = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_MEET]: (state) => ({
      ...state,
      meet: null,
      meetError: null,
    }),
    [WRITE_MEET_SUCCESS]: (state, { payload: meet }) => ({
      ...state,
      meet,
    }),
    [WRITE_MEET_FAILURE]: (state, { payload: meetError }) => ({
      ...state,
      meetError,
    }),
    [SET_ORIGINAL_MEET]: (state, { payload: meet }) => ({
      ...state,
      title: meet.title,
      body: meet.body,
      tags: JSON.parse(meet.tags),
      region: meet.region,
      originalMeetNum: meet.meetNum,
    }),
    [UPDATE_MEET_SUCCESS]: (state, { payload: meet }) => ({
      ...state,
      meet,
    }),
    [UPDATE_MEET_FAILURE]: (state, { payload: meetError }) => ({
      ...state,
      meetError,
    }),
  },
  initialState
);

export default meetwrite;
