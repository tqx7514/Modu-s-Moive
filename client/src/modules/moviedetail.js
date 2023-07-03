import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as movieAPI from '../lib/api/movie';
import {takeLatest} from 'redux-saga/effects';

const [
    DETAIL_POST,
    DETAIL_POST_SUCCESS,
    DETAIL_POST_FAIURE,
] = createRequestActionTypes('moviedetail/DETAIL_POST');

const [
    DETAIL_IMAGE,
    DETAIL_IMAGE_SUCCESS,
    DETAIL_IMAGE_FAIURE,
] = createRequestActionTypes('moviedetail/DETAIL_IMAGE');

const [
    DETAIL_VIDEO,
    DETAIL_VIDEO_SUCCESS,
    DETAIL_VIDEO_FAIURE,
] = createRequestActionTypes('moviedetail/DETAIL_VIDEO');

const [
    DETAIL_CREDIT,
    DETAIL_CREDIT_SUCCESS,
    DETAIL_CREDIT_FAIURE,
]

const UNLOAD_DETAIL = 'moviedetail/UNLOAD_DETAIL';

export const readDetail = createAction(DETAIL_POST, id => id);
export const unloadDetail = createAction(UNLOAD_DETAIL);

const readDetailSaga = createRequestSaga(DETAIL_POST, movieAPI.readDetail);
export function* detailSaga() {
    yield takeLatest(DETAIL_POST, readDetailSaga);
}

const initialState = {
    moviedetail: [],
    error: null,
};

const moviedetail = handleActions(
    {
        [DETAIL_POST_SUCCESS]: (state, {payload: moviedetail}) => ({
            ...state,
            moviedetail,
        }),
        [DETAIL_POST_FAIURE]: (state, {payload: error}) => ({
            ...state,
            error,
        }),
        [UNLOAD_DETAIL]: () => initialState,
    },
    initialState,
);
export default moviedetail;