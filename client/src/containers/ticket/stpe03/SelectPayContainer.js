import React, { useCallback } from 'react';
import SelectPay from '../../../components/ticket/step03/SelectPay';
import ReserveNavContainer from '../ReserveNavContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscount, getTotalPrice, pay, setPerson, setSelectedSeat } from '../../../modules/stepsecond';
import { setData } from '../../../modules/stepfirst';

const SelectPayContainer = () => {
  const {
    number, 
    person,
    seat,
    totalPrice,
    discount,
  } = useSelector(({stepsecond}) => stepsecond);
const {data} = useSelector(({stepfirst}) => stepfirst);
const {user} = useSelector(({user}) => user);

  const dispatch = useDispatch();
  const OnDiscount = useCallback((inputPoint) => {
    dispatch(getDiscount(inputPoint));
  }, [dispatch]);

  const onReservation = useCallback(() => {
    dispatch(pay({
      data,
      number,
      person,
      seat,
      totalPrice,
      discount,
      user
    }));
    dispatch(setData({key: "cinema", value: ""}));
    dispatch(setData({key: "time", value: ""}));
    dispatch(setPerson(''));
    dispatch(setSelectedSeat(null));
    discount(getTotalPrice(''))
    dispatch(OnDiscount(''))

  }, [dispatch, data, number, person, seat, totalPrice, discount, user]);

  return (
    <>
        <ReserveNavContainer/>
        <SelectPay OnDiscount={OnDiscount} onReservation={onReservation}/>
    </>
  )
}

export default SelectPayContainer;