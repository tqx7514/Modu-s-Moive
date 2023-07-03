import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postsAPI from "../lib/api/meet";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "meet/INITIALIZE";
const CHANGE_FIELD = "meet/CHANGE_FIELD";
const [WRITE_MEET, WRITE_MEET_SUCCESS, WRITE_MEET_FAILURE] =
  createRequestActionTypes("meet/WRITE_MEET");

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeMeet = createAction(
  WRITE_MEET,
  ({ title, body, tags, userId }) => ({
    title,
    body,
    tags,
    userId,
  })
);
const writeMeetSaga = createRequestSaga(WRITE_MEET, postsAPI.writeMeet);
export function* meetWriteSaga() {
  yield takeLatest(WRITE_MEET, writeMeetSaga);
}

const initialState = {
  title: "",
  body: "",
  tags: [],
  userId: "",
  meet: null,
  meetError: null,
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
  },
  initialState
);

export default meetwrite;
