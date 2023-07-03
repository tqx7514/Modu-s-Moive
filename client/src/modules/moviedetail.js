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
] = createRequestActionTypes('moviedetail/DETAIL_CREDIT');

const UNLOAD_DETAIL = 'moviedetail/UNLOAD_DETAIL';

export const readDetail = createAction(DETAIL_POST, id => id);
export const imageDetail = createAction(DETAIL_IMAGE, id => id);
export const videoDetail = createAction(DETAIL_VIDEO, id => id);
export const creditDetail = createAction(DETAIL_CREDIT, id => id);
export const unloadDetail = createAction(UNLOAD_DETAIL);

const readDetailSaga = createRequestSaga(DETAIL_POST, movieAPI.moviedetail);
const imageDetailSaga = createRequestSaga(DETAIL_IMAGE, movieAPI.moviedetail);
const videoDetailSaga = createRequestSaga(DETAIL_VIDEO, movieAPI.moviedetail);
const creditDetailSaga = createRequestSaga(DETAIL_CREDIT, movieAPI.moviedetail);
export function* detailSaga() {
    yield takeLatest(DETAIL_POST, readDetailSaga);
    yield takeLatest(DETAIL_IMAGE, imageDetailSaga);
    yield takeLatest(DETAIL_VIDEO, videoDetailSaga);
    yield takeLatest(DETAIL_CREDIT, creditDetailSaga);
}

const initialState = {
    moviedetail: [],
    images: [],
    videos: [],
    credit: [],
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
        [DETAIL_IMAGE_SUCCESS]: (state, {payload: images}) => ({
            ...state,
            images,
        }),
        [DETAIL_IMAGE_FAIURE]: (state, {payload: error}) => ({
            ...state,
            error,
        }),
        [DETAIL_VIDEO_SUCCESS]: (state, {payload: vidoes}) => ({
            ...state,
            vidoes,
        }),
        [DETAIL_VIDEO_FAIURE]: (state, {payload: error}) => ({
            ...state,
            error,
        }),
        [DETAIL_CREDIT_SUCCESS]: (state, {payload: credit}) => ({
            ...state,
            credit,
        }),
        [DETAIL_CREDIT_FAIURE]: (state, {payload: error}) => ({
            ...state,
            error,
        }),
        [UNLOAD_DETAIL]: () => initialState,
    },
    initialState,
);
export default moviedetail;