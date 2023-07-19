import React, { useCallback } from 'react';
import SelectPerson from '../../../components/ticket/step02/SelectPerson';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../../modules/stepsecond';

const SelectPersonContiner = () => {
  const {number} = useSelector(({stepsecond}) => stepsecond);

  const dispatch = useDispatch();
  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);
  
  const onDecrease = useCallback((key) => {
    dispatch(decrease({key}));
  }, [dispatch]);


  return (
    <>
        <SelectPerson 
            number={number}
            onIncrease={onIncrease} 
            onDecrease={onDecrease}
        />
    </>
  )
}

export default SelectPersonContiner;