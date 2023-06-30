import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as regionAPI from '../lib/api/ticket';
import {takeLatest} from 'redux-saga/effects';

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

// 액션 생성--------------------------------------------------------

export const readRegion = createAction(READ_REGION);

export const selectedRegion = createAction(SELECTED_REGION, (grade) => grade);

// 사가 함수--------------------------------------------------------

export const readRegionSaga = createRequestSaga(READ_REGION, regionAPI.regions);
export function* regionSaga(){
    yield takeLatest(READ_REGION, readRegionSaga);
}

export const selectedRegionSaga = createRequestSaga(SELECTED_REGION, regionAPI.selectedRegion);
export function* RegionSelectedSaga(){
    yield takeLatest(SELECTED_REGION, selectedRegionSaga)
}

// 초기 값--------------------------------------------------------

const initialState = {
    region: [],
    selected: 1,
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
        selected: action.payload,
    }),
    [SELECTED_REGION_FAILURE]: (state, error) => ({
        ...state,
        error,
    }),
},
initialState);



export default stepfirst;