// import { createAction, handleActions } from "redux-actions";
// import createRequestSaga, {
//   createRequestActionTypes,
// } from "../../lib/createRequestSaga";
// import * as admineventAPI from "../../lib/api/admin/adminevent";
// import { takeLatest } from "redux-saga/effects";

// const [LIST_ADMINEVENT, LIST_ADMINEVENT_SUCCESS, LIST_ADMINEVENT_FAILURE] =
//   createRequestActionTypes("adminevent/LIST_ADMINEVENT");

// export const adminEventList = createAction(
//   LIST_ADMINEVENT,
//   ({ name, page, searchEventResult }) => ({
//     name,
//     page,
//     searchEventResult,
//   })
// );

// const adminEventListSaga = createRequestSaga(LIST_ADMINEVENT, admineventAPI.adminEventBoardList);
// export function* adminEventListsSaga() {
//     yield takeLatest(LIST_ADMINEVENT, adminEventListSaga);
// }

// const initialState = {
//     adminevent: null,
//     error: null,
//     lastPage: 1,
// };

// const adminevent = handleActions(
//     {
//         [LIST_ADMINEVENT_SUCCESS]: (state, { payload: adminevent }) => ({
//             ...state,
//             adminevent: adminevent.admineventlists,
//             lastPage: adminevent.totalPages,
//         }),
//         [LIST_ADMINEVENT_FAILURE]: (state, { payload: error }) => ({
//             ...state,
//             error,
//         }),
//     },
//     initialState
// );

// export default adminevent;
