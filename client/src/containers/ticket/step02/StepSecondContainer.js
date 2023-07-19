import React, { useCallback } from 'react';
import ReserveNavContainer from '../ReserveNavContainer';
import SelectPerson from '../../../components/ticket/step02/SelectPerson';
import { useDispatch, useSelector } from 'react-redux';
import stepsecond, { decrease, increase } from '../../../modules/stepsecond';

const StepSecondContainer = () => {
  const {number} = useSelector(({stepsecond}) => stepsecond);
  const dispatch = useDispatch();

  // const onIncrease = useCallback(() => {
  //   dispatch(increase());
  // }, [dispatch]);
  
  // const onDecrease = useCallback(() => {
  //   dispatch(decrease());
  // }, [dispatch]);

  return (
    <>
        <ReserveNavContainer/>
        <SelectPerson 
          number={number} 
          // onIncrease={onIncrease} 
          // onDecrease={onDecrease}
        />
    </>
  )
}

export default StepSecondContainer;