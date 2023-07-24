// import { createAction, handleActions } from "redux-actions";
// import createRequestSaga, {
//   createRequestActionTypes,
// } from "../../lib/createRequestSaga";
// import * as admineventAPI from "../../lib/api/admin/adminevent";
// import { takeLatest } from "redux-saga/effects";

// const [ADMINEVENT_LIST, ADMINEVENT_LIST_SUCCESS, ADMINEVENT_LIST_FAILURE] =
//   createRequestActionTypes("adminevent/ADMINEVENT_LIST");

// export const adminEventList = createAction(
//   ADMINEVENT_LIST,
//   ({ name, page, searchEventResult }) => ({
//     name,
//     page,
//     searchEventResult,
//   })
// );

// const adminEventListsSaga = createRequestSaga(
//   ADMINEVENT_LIST,
//   admineventAPI.adminEventBoardList
// );
// export function* adminEventListSaga() {
//   yield takeLatest(ADMINEVENT_LIST, adminEventListsSaga);
// }

// const initialState = {
//   events: null,
//   error: null,
//   lastPage: 1,
// };

// const admineventlist = handleActions(
//   {
//     [ADMINEVENT_LIST_SUCCESS]: (state, { payload: events }) => ({
//       ...state,
//       events : events.admineventlists,
//       lastPage: events.totalPages,
//     }),
//     [ADMINEVENT_LIST_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       error,
//     }),
//   },
//   initialState
// );

// export default admineventlist;
