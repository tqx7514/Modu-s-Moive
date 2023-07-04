import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as regionAPI from '../lib/api/ticket';
import {takeLatest, put} from 'redux-saga/effects';

// 액션 타입--------------------------------------------------------

const [
    READ_REGION, 
    READ_REGION_SUCCESS, 
    READ_REGION_FAILURE
] = createRequestActionTypes('stepfirst/READ_REGION');

const [
    SELECTED_REGION,
    SELECTED_REGION_SUCCESS,
    SELECTED_REGION_FAILURE,
] = createRequestActionTypes('stepfirst/SELECTED_REGION');

const [
    READ_MOVIE,
    READ_MOVIE_SUCCESS,
    READ_MOVIE_FAILURE,
] = createRequestActionTypes('stepfirst/READ_MOVIE');

// 액션 생성--------------------------------------------------------

export const readRegion = createAction(READ_REGION);

export const selectedRegion = createAction(SELECTED_REGION, (grade) => grade);

export const readMovie = createAction(READ_MOVIE);


// 사가 함수--------------------------------------------------------

export const readRegionSaga = createRequestSaga(READ_REGION, regionAPI.regions);
export function* regionSaga(){
    yield takeLatest(READ_REGION, readRegionSaga);
    yield put(selectedRegion(1));
}

export const selectedRegionSaga = createRequestSaga(SELECTED_REGION, regionAPI.selectedRegion);
export function* SelectedSaga(){
    yield takeLatest(SELECTED_REGION, selectedRegionSaga);
}

export const readMovieSaga = createRequestSaga(READ_MOVIE, regionAPI.movies);
export function* movieReadSaga(){
    yield takeLatest(READ_MOVIE, readMovieSaga)
}

// 초기 값--------------------------------------------------------

const initialState = {
    region: [],
    cinema: [],
    movie: [],
    error: null,
}

// 핸들 액션------------------------------------------------------

const stepfirst = handleActions({
    [READ_REGION_SUCCESS]: (state, action) => ({
        ...state,
        region: action.payload,
    }),
    [READ_REGION_FAILURE]: (state, {payload: error}) => ({
        ...state,
        error,
    }),
    [SELECTED_REGION_SUCCESS]: (state, action) => ({
        ...state,
        cinema: action.payload,
    }),
    [SELECTED_REGION_FAILURE]: (state, error) => ({
        ...state,
        error,
    }),
    [READ_MOVIE_SUCCESS]: (state, action) => ({
        ...state,
        movie: action.payload,
    }),
    [READ_MOVIE_FAILURE]: (state, error) => ({
        ...state,
        error,
    }),
},
initialState);



export default stepfirst;