// import { createAction, handleActions } from "redux-actions";
// import createRequestSaga, {
//   createRequestActionTypes,
// } from "../../lib/createRequestSaga";
// import * as admineventAPI from "../../lib/api/admin/adminevent";
// import { takeLatest } from "redux-saga/effects";

// const INITIALIZE = "adminevent/INITIALIZE";
// const CHANGE_FIELD = "adminevent/CHANGE_FIELD";
// const [WRITE_EVENT, WRITE_EVENT_SUCCESS, WRITE_EVENT_FAILURE] =
//   createRequestActionTypes("adminevent/WRITE_EVENT");
// const SET_ORIGINAL_EVENT = "adminevent/SET_ORIGINAL_EVENT";
// const [UPDATE_EVENT, UPDATE_EVENT_SUCCESS, UPDATE_EVENT_FAILURE] =
//   createRequestActionTypes("adminevent/UPDATE_EVENT");

// export const initialize = createAction(INITIALIZE);
// export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
//   key,
//   value,
// }));

// export const writeEvent = createAction(
//   WRITE_EVENT,
//   ({
//     eventNum,
//     categoryId,
//     userId,
//     eventTitle,
//     eventContent,
//     eventImg,
//     startEventDate,
//     endEventDate,
//   }) => ({
//     eventNum,
//     categoryId,
//     userId,
//     eventTitle,
//     eventContent,
//     eventImg,
//     startEventDate,
//     endEventDate,
//   })
// );

// export const setOriginalEvent = createAction(
//   SET_ORIGINAL_EVENT,
//   (event) => event
// );

// export const updateEvent = createAction(
//   UPDATE_EVENT,
//   ({
//     eventNum,
//     categoryId,
//     eventTitle,
//     eventContent,
//     eventImg,
//     startEventDate,
//     endEventDate,
//   }) => ({
//     eventNum,
//     categoryId,
//     eventTitle,
//     eventContent,
//     eventImg,
//     startEventDate,
//     endEventDate,
//   })
// );

// const writeEventSaga = createRequestSaga(
//   WRITE_EVENT,
//   admineventAPI.writeAdminEvent
// );
// const updateEventSaga = createRequestSaga(
//   UPDATE_EVENT,
//   admineventAPI.updateAdminEvent
// );

// export function* eventWriteSaga() {
//   yield takeLatest(WRITE_EVENT, writeEventSaga);
//   yield takeLatest(UPDATE_EVENT, updateEventSaga);
// }

// const initialState = {
//   categoryId: "",
//   eventTitle: "",
//   eventContent: "",
//   eventImg: "",
//   userId: "",
//   event: {},
//   error: null,
//   originalEventNum: null,
// };

// const admineventwrite = handleActions({
//   [INITIALIZE]: (state) => initialState,
//   [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
//     ...state,
//     [key]: value,
//   }),
//   [WRITE_EVENT]: (state) => ({
//     ...state,
//     event: {},
//     error: null,
//   }),
//   [WRITE_EVENT_SUCCESS]: (state, { payload: event }) => ({
//     ...state,
//     event,
//   }),
//   [WRITE_EVENT_FAILURE]: (state, { payload: error }) => ({
//     ...state,
//     error,
//   }),
//   [SET_ORIGINAL_EVENT]: (state, { payload: event }) => ({
//     ...state,
//     categoryId: event.categoryId,
//     eventTitle: event.eventTitle,
//     eventContent: JSON.parse(event.eventContent),
//     eventImg: JSON.parse(event.eventImg),
//     startEventDate: event.startEventDate,
//     endEventDate: event.endEventDate,
//     originalEventNum: event.originalEventNum,
//   }),
//   [UPDATE_EVENT_SUCCESS]: (state, { payload: event }) => ({
//     ...state,
//     event,
//   }),
//   [UPDATE_EVENT_FAILURE]: (state, { payload: error }) => ({
//     ...state,
//     error,
//   }),
// },
// initialState
// );

// export default admineventwrite;