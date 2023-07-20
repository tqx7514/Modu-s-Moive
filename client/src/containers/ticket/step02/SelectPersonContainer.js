import React, { useCallback } from 'react';
import SelectPerson from '../../../components/ticket/step02/SelectPerson';
import SelectSeat from '../../../components/ticket/step02/SelectSeat';
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
    <div style={{width: '100%'}}>
        <SelectPerson 
            number={number}
            adultNumber={adultNumber}
            teenagerNumber={teenagerNumber}
            seniorNumber={seniorNumber}
            disabledNumber={disabledNumber}
            onIncrease={onIncrease} 
            onDecrease={onDecrease}
        />
        <SelectSeat/>
    </div>
  )
}

export default SelectPersonContiner;