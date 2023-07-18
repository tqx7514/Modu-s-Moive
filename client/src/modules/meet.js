import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as meetAPI from "../lib/api/meet";
import { takeLatest } from "redux-saga/effects";

const [READ_MEET, READ_MEET_SUCCESS, READ_MEET_FAILURE] =
  createRequestActionTypes("meet/READ_MEET");
const UNLOAD_MEET = "meet/UNLOAD_MEET";

export const readMeet = createAction(READ_MEET, (meetNum) => meetNum);
export const unloadMeet = createAction(UNLOAD_MEET);

const readMeetSaga = createRequestSaga(READ_MEET, meetAPI.readMeet);
export function* meetSaga() {
  yield takeLatest(READ_MEET, readMeetSaga);
}

const initialState = {
  meet: null,
  error: null,
};

const meet = handleActions(
  {
    [READ_MEET_SUCCESS]: (state, { payload: { meet, userStrings } }) => ({
      ...state,
      meet: {
        ...meet,
        user: userStrings,
      },
    }),
    [READ_MEET_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_MEET]: () => initialState,
  },
  initialState
);

export default meet;
