import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';

const INCREASE = 'stepsecond/INCREASE';
const DECREASE = 'stepsecond/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
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
  },
  initialState
);

export default stepsecond;
