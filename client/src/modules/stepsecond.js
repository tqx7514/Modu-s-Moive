import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'stepsecond/INCREASE';
const DECREASE = 'stepsecond/DECREASE';
const SET_SELECTED_SEAT = 'stepsecond/SET_SELECTED_SEAT';

const RESET_NUMBER = 'stepsecond/RESET_NUMBER';

export const increase = createAction(INCREASE, (key) => (key));
export const decrease = createAction(DECREASE,(key)=>(key));
export const setSelectedSeat = createAction(SET_SELECTED_SEAT);
export const resetNumber = createAction(RESET_NUMBER);

const initialState = {
  number: 0,
  adult: {
    name: '성인',
    number: 0,
    price: '13,000',
  }, 
  teenager: {
    name: '청소년',
    number: 0,
    price: '10,000',
  }, 
  senior: {
    name: '시니어',
    number: 0,
    price: '7,000',
  }, 
  disabled: {
    name: '장애인',
    number: 0,
    price: '5,000',
  },
  seat: null,
};

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
    [DECREASE]: (state,{payload:key}) => ({
      ...state,
      number: state.number > 0 ? state.number - 1 : 0,
      [key]:{
        ...state[key],
        number:state[key].number > 0 ? state[key].number -1 : 0,
      }
    }),
    [SET_SELECTED_SEAT]: (state, action) => ({
      ...state,
      seat: action.payload,
    }),
    [RESET_NUMBER]: () => initialState,
  },
  initialState
);

export default stepsecond;
