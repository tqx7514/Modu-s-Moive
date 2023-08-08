import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as cinemaAPI from "../../lib/api/admin/admincinema";

const INITIALIZE = "admincinema/INITIALIZE";
const CHANGE_FIELD = "admincinema/CHANGE_FIELD";
const [VIEW_CINEMA, VIEW_CINEMA_SUCCESS, VIEW_CINEMA_FAILURE] = createRequestActionTypes("admincinema/VIEW_CINEMA");

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({ key, value}));
export const viewCinema = createAction(VIEW_CINEMA, ({page, category}) => ({
    page, category
}));

const viewCinemaSaga = createRequestSaga(VIEW_CINEMA, cinemaAPI.AdminCinema);

export function* admincinemaSaga() {
    yield takeLatest(VIEW_CINEMA, viewCinemaSaga);
}

const initialState = {
    cinema: null,
    count: 0,
    lastPage: 1,
    error: null,
};

const admincinema = handleActions(
    {
        [INITIALIZE]: () => initialState,
        [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value,
        }),
        [VIEW_CINEMA_SUCCESS]: (state, {payload: {cinema, count, lastPage}}) => ({
            ...state,
            cinema,
            count,
            lastPage,
            error: null,
        }),
        [VIEW_CINEMA_FAILURE]: (state, {payload: error}) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default admincinema;