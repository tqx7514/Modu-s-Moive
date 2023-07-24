import React, { useCallback, useEffect } from 'react';
import SelectPerson from '../../../components/ticket/step02/SelectPerson';
import SelectSeat from '../../../components/ticket/step02/SelectSeat';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, resetNumber, setSelectedSeat } from '../../../modules/stepsecond';
import SelectPayBtn from '../../../components/ticket/step02/SelectPayBtn';

const SelectPersonContiner = () => {
  const {number, seat} = useSelector(({stepsecond}) => stepsecond);
  const {
    adultNumber,
    teenagerNumber,
    seniorNumber,
    disabledNumber,
  } = useSelector(({stepsecond}) => ({
    adultNumber: stepsecond.adult,
    teenagerNumber: stepsecond.teenager,
    seniorNumber: stepsecond.senior,
    disabledNumber: stepsecond.disabled,
  }))
  const dispatch = useDispatch();
  const onIncrease = useCallback((key) => {
    dispatch(increase(key));
  }, [dispatch]);
  
  const onDecrease = useCallback((key) => {
    dispatch(decrease(key));
  }, [dispatch]);

  const onSelectSeat = useCallback((row, col) => {
    dispatch(setSelectedSeat(row, col));
  });
  
  useEffect(() => {
    dispatch(resetNumber());
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
        <SelectSeat
          onSelectSeat={onSelectSeat}
        />
        <SelectPayBtn/>
    </div>
  )
}

export default SelectPersonContiner;