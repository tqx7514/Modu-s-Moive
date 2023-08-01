import { createAction, handleActions } from "redux-actions";

// 액션 타입--------------------------------------------------------

const [SET_SCHEDULE] = "adminschedule/SET_SCHEDULE";

// 액션 생성--------------------------------------------------------

export const setSchedule = createAction(SET_SCHEDULE, ({key, value}) => ({key, value}));

// 사가 함수--------------------------------------------------------



// 초기 값--------------------------------------------------------

const initialState = {
    schedule: {cinema: "", seat: "", room: "", movie: "", age: "", disp: "", language: "", start: "", end: "", date: ""}
};

// 핸들 액션------------------------------------------------------

const adminschedule = handleActions(
  {
    [SET_SCHEDULE]: (state, { payload: { key, value } }) => ({
        ...state,
        schedule: {
            ...state.schedule,
            [key]: value,
        }
    }),

    // ----------------------------------------------------

  },
  initialState
);

export default adminschedule;
