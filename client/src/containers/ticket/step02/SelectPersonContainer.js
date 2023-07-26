import React, { useCallback, useEffect, useState } from 'react';
import SelectPerson from '../../../components/ticket/step02/SelectPerson';
import SelectSeat from '../../../components/ticket/step02/SelectSeat';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, getTotalPrice, increase, resetNumber, resetSeat, setSelectedSeat } from '../../../modules/stepsecond';
import SelectPayBtn from '../../../components/ticket/step02/SelectPayBtn';

const SelectPersonContiner = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const {seat} = useSelector(({stepsecond}) => stepsecond);

  const {
    number,
    adultNumber,
    teenagerNumber,
    seniorNumber,
    disabledNumber,
  } = useSelector(({stepsecond}) => ({
    number: stepsecond.number,
    adultNumber: stepsecond.adult,
    teenagerNumber: stepsecond.teenager,
    seniorNumber: stepsecond.senior,
    disabledNumber: stepsecond.disabled,
  }))

  const dispatch = useDispatch();

  const onIncrease = useCallback((key) => {
    dispatch(increase(key));
    dispatch(resetSeat());
    setSelectedSeats([]);
  }, [dispatch]);
  
  const onDecrease = useCallback((key) => {
    dispatch(decrease(key));
    dispatch(resetSeat());
    setSelectedSeats([]);
  }, [dispatch]);

  const onSelectSeat = useCallback((row, col) => {
    dispatch(setSelectedSeat(row, col));
  }, []);

  
  useEffect(() => {
    const isSeatSelected = seat && seat.length === number;

    if (isSeatSelected) {
      const total =
        adultNumber.price * adultNumber.number +
        teenagerNumber.price * teenagerNumber.number +
        seniorNumber.price * seniorNumber.number +
        disabledNumber.price * disabledNumber.number

      dispatch(getTotalPrice(total));
    } else {
      dispatch(getTotalPrice(0));
    }
  }, [dispatch, seat, number, adultNumber, teenagerNumber, seniorNumber, disabledNumber])
  
  
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
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
        <SelectPayBtn
          number={number}
          adultNumber={adultNumber}
          teenagerNumber={teenagerNumber}
          seniorNumber={seniorNumber}
          disabledNumber={disabledNumber}
        />
    </div>
  )
}

export default SelectPersonContiner;