import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "../../lib/createRequestSaga";
import * as scheduleAPI from "../../lib/api/admin/adminschedule";
import { takeLatest } from "redux-saga/effects";

// 액션 타입--------------------------------------------------------

const SET_SCHEDULE = "adminschedule/SET_SCHEDULE";

const SET_POST_SCHEDULE = "adminschedule/SET_POST_SCHEDULE";

const DELETE_SCHEDULE = "adminschedule/DELETE_SCHEDULE";

// 액션 생성--------------------------------------------------------

export const setSchedule = createAction(SET_SCHEDULE, ({ key, value }) => ({
  key,
  value,
}));

export const setPostSchedule = createAction(SET_POST_SCHEDULE, (schedule) => (schedule));

export const deleteSchedule = createAction(DELETE_SCHEDULE, (num) => (num));

// 사가 함수--------------------------------------------------------

export const postScheduleSaga = createRequestSaga(SET_POST_SCHEDULE, scheduleAPI.schedule);
export const deleteScheduleSaga = createRequestSaga(DELETE_SCHEDULE, scheduleAPI.deleteSchedule);

export function* scheduleSaga() {
  yield takeLatest(SET_POST_SCHEDULE, postScheduleSaga);
  yield takeLatest(DELETE_SCHEDULE, deleteScheduleSaga);
}

// 초기 값--------------------------------------------------------

const initialState = {
  schedule: {
    cinema: "",
    seat: "",
    room: "",
    movie: "",
    age: "",
    disp: "",
    language: "",
    start: "",
    end: "",
    date: "",
  },
};

// 핸들 액션------------------------------------------------------

const adminschedule = handleActions(
  {
    [SET_SCHEDULE]: (state, { payload: { key, value } }) => ({
      ...state,
      schedule: {
        ...state.schedule,
        [key]: value,
      },
    }),
    [SET_POST_SCHEDULE]: (state) => ({
      ...state,
    }),

    // ----------------------------------------------------
  },
  initialState
);

export default adminschedule;
