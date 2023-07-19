import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';

const INCREASE = 'stepsecond/INCREASE';
const DECREASE = 'stepsecond/DECREASE';
const PERSON_TYPE = 'stepsecond/PERSON_TYPE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const personType = createAction(PERSON_TYPE, ({key, value}) => ({key, value}));

const initialState = {
  number: 0,
  person: {
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
  },
};

const stepsecond = handleActions(
  {
    [INCREASE]: (state) => ({
      ...state,
      number: state.number + 1,
    }),
    [DECREASE]: (state) => ({
      ...state,
      number: state.number > 0 ? state.number - 1 : 0,
    }),
    [PERSON_TYPE]: (state, {payload: {key, value}}) => ({
      ...state,
      [key]: value,
      
    })
  },
  initialState
);

export default stepsecond;
