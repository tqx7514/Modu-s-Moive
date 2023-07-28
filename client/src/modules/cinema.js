import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as cinemaAPI from "../lib/api/cinema";

const [READ_REGION, READ_REGION_SUCCESS, READ_REGION_FAILURE] =
  createRequestActionTypes("cinema/READ_REGION");

const [READ_CINEMA, READ_CINEMA_SUCCESS, READ_CINEMA_FAILURE] =
  createRequestActionTypes("cinema/READ_CINEMA");

const [MY_CINEMA, MY_CINEMA_SUCCESS, MY_CINEMA_FAIURE] =
  createRequestActionTypes("cinema/MY_CINEMA");

const [VIEW_MYCINEMA, VIEW_MYCINEMA_SUCCESS, VIEW_MYCINEMA_FAIURE] =
  createRequestActionTypes("cinema/VIEW_MYCINEMA");

const [DEL_MYCINEMA, DEL_MYCINEMA_SUCCESS, DEL_MYCINEMA_FAIURE] =
  createRequestActionTypes("cinema/DEL_MYCINEMA");

export const readRegion = createAction(READ_REGION);
export const readCinema = createAction(READ_CINEMA);
export const myCinema = createAction(
  MY_CINEMA,
  ({ selectedCinema, selectedAddrDetail, user }) => ({
    selectedCinema,
    selectedAddrDetail,
    user,
  })
);
export const viewCinema = createAction(VIEW_MYCINEMA);
export const DelmyCinema = createAction(
  DEL_MYCINEMA,
  ({ selectedCinema, cinemaId }) => ({ selectedCinema, cinemaId })
);

const readRegionSaga = createRequestSaga(READ_REGION, cinemaAPI.region);
const readCinemaSaga = createRequestSaga(READ_CINEMA, cinemaAPI.cinema);
const mycinemaSaga = createRequestSaga(MY_CINEMA, cinemaAPI.mycinema);
const viewCinemaSaga = createRequestSaga(VIEW_MYCINEMA, cinemaAPI.viewmycinema);
const DelmyCinemaSaga = createRequestSaga(
  DEL_MYCINEMA,
  cinemaAPI.deletemycinema
);

export function* cinemaSaga() {
  yield takeLatest(READ_REGION, readRegionSaga);
  yield takeLatest(READ_CINEMA, readCinemaSaga);
  yield takeLatest(MY_CINEMA, mycinemaSaga);
  yield takeLatest(VIEW_MYCINEMA, viewCinemaSaga);
  yield takeLatest(DEL_MYCINEMA, DelmyCinemaSaga);
}

const initialState = {
  region: "",
  cinema: "",
  error: null,
  user: null,
  mycinemas: {
    selectedCinema: null,
  },
  viewcinema: "",
};
const cinema = handleActions(
  {
    [READ_REGION_SUCCESS]: (state, { payload: region }) => ({
      ...state,
      region,
    }),
    [READ_REGION_FAILURE]: (state, error) => ({
      ...state,
      error,
    }),
    [READ_CINEMA_SUCCESS]: (state, { payload: cinema }) => ({
      ...state,
      cinema,
    }),
    [READ_CINEMA_FAILURE]: (state, error) => ({
      ...state,
      error,
    }),
    [MY_CINEMA_SUCCESS]: (state, { payload: mycinemas }) => ({
      ...state,
      mycinemas: mycinemas.selectedCinema,
    }),
    [MY_CINEMA_FAIURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [VIEW_MYCINEMA_SUCCESS]: (state, { payload: viewcinema }) => ({
      ...state,
      viewcinema,
    }),
    [VIEW_MYCINEMA_FAIURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [DEL_MYCINEMA_SUCCESS]: (state, { payload: cinema }) => ({
      ...state,
      cinema,
    }),
    [DEL_MYCINEMA_FAIURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default cinema;
