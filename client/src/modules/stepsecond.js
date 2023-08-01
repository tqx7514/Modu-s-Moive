import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as payAPI from "../lib/api/ticket";
import { takeLatest, put } from "redux-saga/effects";

// 액션 타입--------------------------------------------------------

const INCREASE = "stepsecond/INCREASE";
const DECREASE = "stepsecond/DECREASE";
const SET_PERSON = "stepsecond/SET_PERSON";
const SET_SELECTED_SEAT = "stepsecond/SET_SELECTED_SEAT";
const RESET_SEAT = "stepsecond/RESET_SEAT";
const RESET_NUMBER = "stepsecond/RESET_NUMBER";
const GET_TOTAL_PRICE = "stepsecond/GET_TOTAL_PRICE";
const GET_DISCOUNT = "stepsecond/GET_DISCOUNT";
const [PAY, PAY_SUCCESS, PAY_FAILURE] = createRequestActionTypes("stepsecond/PAY_SUCCESS");
const [
  GET_USING_SEAT, 
  GET_USING_SEAT_SUCCESS, 
  GET_USING_SEAT_FAILURE
] = createRequestActionTypes('stepsecond/GET_USING_SEAT'); 
const RESET_DATA = "stepsecond/RESET_DATA";

// 액션 생성--------------------------------------------------------

export const increase = createAction(INCREASE, (key) => key);
export const decrease = createAction(DECREASE, (key) => key);
export const setPerson = createAction(SET_PERSON);
export const setSelectedSeat = createAction(SET_SELECTED_SEAT);
export const resetSeat = createAction(RESET_SEAT);
export const resetNumber = createAction(RESET_NUMBER);
export const getTotalPrice = createAction(
  GET_TOTAL_PRICE,
  (totalPrice) => totalPrice
);
export const getDiscount = createAction(GET_DISCOUNT);
export const pay = createAction(PAY, ({
  data, number, person, seat, totalPrice, discount, user
}) => ({
  data, number, person, seat,totalPrice, discount, user
}));
export const getUsingSeat = createAction(GET_USING_SEAT);
export const resetData = createAction(RESET_DATA);

// 사가 함수--------------------------------------------------------

export const paySaga = createRequestSaga(PAY, payAPI.pay);
export const usingSeatSaga = createRequestSaga(GET_USING_SEAT, payAPI.seat);

export function* paymentSaga() {
  yield takeLatest(PAY, paySaga);
  yield takeLatest(GET_USING_SEAT, usingSeatSaga);
}




// 초기 값--------------------------------------------------------

const initialState = {
  number: 0,
  adult: {
    name: "성인",
    number: 0,
    price: 13000,
  },
  teenager: {
    name: "청소년",
    number: 0,
    price: 10000,
  },
  senior: {
    name: "시니어",
    number: 0,
    price: 7000,
  },
  disabled: {
    name: "장애인",
    number: 0,
    price: 5000,
  },
  person: null,
  seat: null,
  totalPrice: 0,
  discount: 0,
  reservation: [],
};

// 핸들 액션------------------------------------------------------

const stepsecond = handleActions(
  {
    [INCREASE]: (state, { payload: key }) => ({
      ...state,
      number: state.number + 1,
      [key]: {
        ...state[key],
        number: state[key].number + 1,
      },
    }),

    // ----------------------------------------------------

    [DECREASE]: (state, { payload: key }) => ({
      ...state,
      number: state.number > 0 ? state.number - 1 : 0,
      [key]: {
        ...state[key],
        number: state[key].number > 0 ? state[key].number - 1 : 0,
      },
    }),

    // ----------------------------------------------------

    [SET_PERSON]: (state, {payload: person}) => ({
      ...state,
      person,
    }),

    // ----------------------------------------------------

    [SET_SELECTED_SEAT]: (state, action) => ({
      ...state,
      seat: action.payload,
    }),

    // ----------------------------------------------------

    [RESET_SEAT]: (state) => ({
      ...state,
      seat: null,
    }),

    // ----------------------------------------------------

    [RESET_NUMBER]: () => initialState,

    // ----------------------------------------------------

    [GET_TOTAL_PRICE]: (state, { payload: totalPrice }) => ({
      ...state,
      totalPrice: totalPrice,
    }),

    // ----------------------------------------------------

    [GET_DISCOUNT]: (state, { payload: discount }) => ({
      ...state,
      discount: discount,
    }),

    // ----------------------------------------------------
    
    [PAY_SUCCESS]: (state,) => ({
      ...state,
    }),
    [PAY_FAILURE]: (state, error) => ({
      ...state,
      error: error.payload,
    }),

    // ----------------------------------------------------
    
    [GET_USING_SEAT_SUCCESS]: (state, action) => ({
      ...state,
      reservation: action.payload,
    }),
    [GET_USING_SEAT_FAILURE]: (state, error) => ({
      ...state,
      error: error.payload,
    }),

    // ----------------------------------------------------
  },
  initialState
);

export default stepsecond;
