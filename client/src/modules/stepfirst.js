import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as regionAPI from '../lib/api/ticket';
import {takeLatest, put, call} from 'redux-saga/effects';

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
    SET_TITLE_CINEMA,
    SET_TITLE_CINEMA_SUCCESS,
    SET_TITLE_CINEMA_FAILURE,
] = createRequestActionTypes('stepfirst/TITLE_CINEMA');

// 액션 생성--------------------------------------------------------

export const readRegion = createAction(READ_REGION);

export const selectedRegion = createAction(SELECTED_REGION, (grade) => grade);

export const titleCinema = createAction(SET_TITLE_CINEMA);

// 사가 함수--------------------------------------------------------

export const readRegionSaga = createRequestSaga(READ_REGION, regionAPI.regions);
export function* regionSaga(){
    yield takeLatest(READ_REGION, readRegionSaga);
    yield put(selectedRegion(1));
}

// export const selectedRegionSaga = createRequestSaga(SELECTED_REGION, regionAPI.selectedRegion);
// export function* RegionSelectedSaga(){
//     yield takeLatest(SELECTED_REGION, selectedRegionSaga)
// }

export const selectedRegionSaga = createRequestSaga(SELECTED_REGION, regionAPI.selectedRegion);
export function* SelectedSaga(action){
    console.log("Saga------select-----------");
    yield takeLatest(SELECTED_REGION, selectedRegionSaga);
    try {
        const cinema = yield call(regionAPI.selectedRegion, action.payload);
        yield put({
          type: SELECTED_REGION_SUCCESS,
          payload: cinema,
        });
        yield put({
          type: SET_TITLE_CINEMA_SUCCESS,
          payload: cinema.name, // 선택된 영화관의 이름을 payload로 전달
        });
      } catch (error) {
        yield put({
          type: SELECTED_REGION_FAILURE,
          payload: error,
          error: true,
        });
      }
}

// 초기 값--------------------------------------------------------

const initialState = {
    region: [],
    cinema: [],
    titleCinema: '영화관',
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
    [SET_TITLE_CINEMA_SUCCESS]: (state, action) => ({
        ...state,
        titleCinema: action.payload,
    }),
    [SET_TITLE_CINEMA_FAILURE]: (state, error) => ({
        ...state,
        error,
    }),
},
initialState);



export default stepfirst;