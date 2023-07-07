import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";
import * as meetAPI from "../lib/api/meet";
import { takeLatest, call } from "redux-saga/effects";

const TEMP_SET_USER = "user/TEMP_SET_USER";
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes("user/CHECK");
const LOGOUT = "user/LOGOUT";
const JOIN_MEET = "user/JOIN_MEET";
const WITHDRAW_MEET = "user/WITHDRAW_MEET";
// const UPDATE_TOKEN = "user/UPDATE_TOKEN";

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);
export const join = createAction(JOIN_MEET);
export const withdraw = createAction(WITHDRAW_MEET);
// export const updateToken = createAction(UPDATE_TOKEN, (id) => id);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
const joinSaga = createRequestSaga(JOIN_MEET, meetAPI.joinMeet);
const withdrawSaga = createRequestSaga(WITHDRAW_MEET, meetAPI.withdrawMeet);
// const updateTokenSaga = createRequestSaga(UPDATE_TOKEN, meetAPI.updateToken);

function checkFailureSaga() {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    console.log("localStorage is not working");
  }
}
function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(JOIN_MEET, joinSaga);
  yield takeLatest(WITHDRAW_MEET, withdrawSaga);
  // yield takeLatest(UPDATE_TOKEN, updateTokenSaga);
}

const initialState = {
  user: {
    meet: [],
  },
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
    [JOIN_MEET]: (state, { payload: meet }) => ({
      ...state,
      user: {
        ...state.user,
        meet: [...state.user.meet, meet.meetNum],
      },
    }),
    [WITHDRAW_MEET]: (state, { payload: meet }) => ({
      ...state,
      user: {
        ...state.user,
        meet: state.user.meet.filter((num) => num !== meet.meetNum),
      },
    }),
    // [UPDATE_TOKEN]: (state) => ({
    //   ...state,
    // }),
  },
  initialState
);
