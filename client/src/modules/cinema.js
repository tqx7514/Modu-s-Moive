import { createAction, handleActions } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import  createRequestSaga, {createRequestActionTypes } from "../lib/createRequestSaga";
import * as cinemaAPI from "../lib/api/cinema";

const [
    READ_REGION,
    READ_REGION_SUCCESS,
    READ_REGION_FAILURE,
] = createRequestActionTypes('cinema/READ_REGION');

const [
    READ_CINEMA,
    READ_CINEMA_SUCCESS,
    READ_CINEMA_FAILURE,
] = createRequestActionTypes('cinema/READ_CINEMA');

export const readRegion = createAction(READ_REGION);
export const readCinema = createAction(READ_CINEMA);

const readRegionSaga = createRequestSaga(READ_REGION, cinemaAPI.region);
const readCinemaSaga = createRequestSaga(READ_CINEMA, cinemaAPI.cinema);

export function* cinemaSaga() {
    yield takeLatest(READ_REGION, readRegionSaga);
    yield takeLatest(READ_CINEMA, readCinemaSaga);
}

const initialState = {
    region: null,
    cinema: null,
    error: null
};
const cinema = handleActions(
    {
        [READ_REGION_SUCCESS]: (state, {payload: region}) => ({
            ...state,
            region,
        }),
        [READ_REGION_FAILURE]: (state, error) => ({
            ...state,
            error,
        }),
        [READ_CINEMA_SUCCESS]: (state, {payload: cinema}) => ({
            ...state,
            cinema,
        }),
        [READ_CINEMA_FAILURE]: (state, error) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default cinema;