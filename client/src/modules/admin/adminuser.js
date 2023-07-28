import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as userAPI from "../../lib/api/admin/adminuser";
import { createAction, handleActions } from "redux-actions";

const INITIALIZE = "admin/INITIALIZE";
const [
    USER_LIST,
    USER_LIST_SUCCESS,
    USER_LIST_FAILURE,
] = createRequestActionTypes("/admin/USER_LIST");

const [
    USER_DEL,
    USER_DEL_SUCCESS,
    USER_DEL_FAILURE,
] = createRequestActionTypes("/admin/USER_DEL");

// const {
//     UPDATE_GRADE,
//     UPDATE_GRADE_SUCCESS,
//     UPDATE_GRADE_FAILURE,
// } = createRequestActionTypes("/admin/UPDATE_GRADE");

export const initialize = createAction(INITIALIZE);
export const userList = createAction(USER_LIST, ({page, category}) => ({page, category}));
export const userDel = createAction(USER_DEL, ({id}) => ({id}));
// export const updateGrade = createAction(UPDATE_GRADE, (grade) => (grade));

const userListSaga = createRequestSaga(USER_LIST, userAPI.userlist);
const userDelSaga = createRequestSaga(USER_DEL, userAPI.userdelete);
// const updateGradeSaga = createRequestSaga(UPDATE_GRADE, userAPI.usergrade);

export function* adminuserSaga() {
    yield takeLatest(USER_LIST, userListSaga);
    yield takeLatest(USER_DEL, userDelSaga);
    // yield takeLatest(UPDATE_GRADE, updateGradeSaga);
}

const initialState = {
    userlists: null,
    count: 0,
    lastPage: 1,
    error: null,
};

const adminuser = handleActions(
    {
        [INITIALIZE]: () => initialState,
        [USER_LIST_SUCCESS]: (state, {payload: {userlists, count, lastPage}}) => ({
            ...state,
            userlists,
            count,
            lastPage,
            error: null,
        }),
        [USER_LIST_FAILURE]: (state, {payload: error}) => ({
            ...state,
            error,
        }),
        [USER_DEL_SUCCESS]: (state, {payload: userlist}) => ({
            ...state,
            userlist,
        }),
        [USER_DEL_FAILURE]: (state, {payload: error}) => ({
            ...state,
            error,
        }),
        // [UPDATE_GRADE_SUCCESS]: (state, {payload: userlist}) => ({
        //     ...state,
        //     userlist,
        // }),
        // [UPDATE_GRADE_FAILURE]: (state, {payload: error}) => ({
        //     ...state,
        //     error,
        // })
    },
    initialState,
);

export default adminuser;