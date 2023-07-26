import { createAction, handleActions } from 'redux-actions';

// 액션 타입--------------------------------------------------------

const INCREASE = 'stepsecond/INCREASE';
const DECREASE = 'stepsecond/DECREASE';
const SET_SELECTED_SEAT = 'stepsecond/SET_SELECTED_SEAT';
const RESET_SEAT = 'stepsecond/RESET_SEAT';
const RESET_NUMBER = 'stepsecond/RESET_NUMBER';
const GET_TOTAL_PRICE = 'stepsecond/GET_TOTAL_PRICE';
const GET_DISCOUNT = 'stepsecond/GET_DISCOUNT';

// 액션 생성--------------------------------------------------------

export const increase = createAction(INCREASE, (key) => (key));
export const decrease = createAction(DECREASE,(key)=>(key));
export const setSelectedSeat = createAction(SET_SELECTED_SEAT);
export const resetSeat = createAction(RESET_SEAT);
export const resetNumber = createAction(RESET_NUMBER);
export const getTotalPrice = createAction(GET_TOTAL_PRICE, (totalPrice) => totalPrice);
export const getDiscount = createAction(GET_DISCOUNT);

// 사가 함수--------------------------------------------------------

// 초기 값--------------------------------------------------------

const initialState = {
  number: 0,
  adult: {
    name: '성인',
    number: 0,
    price: 13000,
  }, 
  teenager: {
    name: '청소년',
    number: 0,
    price: 10000,
  }, 
  senior: {
    name: '시니어',
    number: 0,
    price: 7000,
  }, 
  disabled: {
    name: '장애인',
    number: 0,
    price: 5000,
  },
  seat: null,
  totalPrice: 0,
  discount: 0,
};

// 핸들 액션------------------------------------------------------

const stepsecond = handleActions(
  {
    [INCREASE]: (state, {payload: key}) => ({
      ...state,
      number:state.number+1,
      [key]: {
        ...state[key],
        number: state[key].number + 1,
      },
    }),

    // ----------------------------------------------------

    [DECREASE]: (state,{payload:key}) => ({
      ...state,
      number: state.number > 0 ? state.number - 1 : 0,
      [key]:{
        ...state[key],
        number:state[key].number > 0 ? state[key].number -1 : 0,
      },
    }),

    // ----------------------------------------------------

    [SET_SELECTED_SEAT]: (state, action) => ({
      ...state,
      seat: action.payload,
    }),

    // ----------------------------------------------------

    [RESET_SEAT]: (state, action) => ({
      ...state,
      seat: null,
    }),

    // ----------------------------------------------------

    [RESET_NUMBER]: () => initialState,

    // ----------------------------------------------------

    [GET_TOTAL_PRICE]: (state, {payload: totalPrice}) => ({
      ...state,
      totalPrice: totalPrice,
    }),

    // ----------------------------------------------------
    
    [GET_DISCOUNT]: (state, {payload: discount}) => ({
      ...state,
      discount: discount,
    }),

    // ----------------------------------------------------
    
  },
  initialState
);

export default stepsecond;
