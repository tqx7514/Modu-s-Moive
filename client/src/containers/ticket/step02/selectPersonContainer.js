import React, { useCallback } from 'react';
import SelectPerson from '../../../components/ticket/step02/SelectPerson';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../../modules/stepsecond';

const SelectPersonContiner = () => {
  const {number} = useSelector(({stepsecond}) => stepsecond);
  const {
    adultNumber,
    teenagerNumber,
    seniorNumber,
    disabledNumber,
  } = useSelector(({stepsecond}) => ({
    adultNumber: stepsecond.adult.number,
    teenagerNumber: stepsecond.teenager.number,
    seniorNumber: stepsecond.senior.number,
    disabledNumber: stepsecond.disabled.number,
  }))
  const dispatch = useDispatch();
  const onIncrease = useCallback((key) => {
    dispatch(increase(key));
  }, [dispatch]);
  
  const onDecrease = useCallback((key) => {
    dispatch(decrease(key));
  }, [dispatch]);


  return (
    <>
        <SelectPerson 
            number={number}
            adultNumber={adultNumber}
            teenagerNumber={teenagerNumber}
            seniorNumber={seniorNumber}
            disabledNumber={disabledNumber}
            onIncrease={onIncrease} 
            onDecrease={onDecrease}
        />
    </>
  )
}

export default SelectPersonContiner;