import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'stepsecond/INCREASE';
const DECREASE = 'stepsecond/DECREASE';

export const increase = createAction(INCREASE, (key) => (key));
export const decrease = createAction(DECREASE,(key)=>(key));

const initialState = {
  number: 0,
  adult: {
    name: '성인',
    number: 0,
  }, 
  teenager: {
    name: '청소년',
    number: 0,
  }, 
  senior: {
    name: '시니어',
    number: 0,
  }, 
  disabled: {
    name: '장애인',
    number: 0,
  }
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
  },
  initialState
);

export default stepsecond;
