import React, { useCallback } from 'react'
import SelectPay from '../../../components/ticket/step03/SelectPay'
import ReserveNavContainer from '../ReserveNavContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getDiscount } from '../../../modules/stepsecond'

const SelectPayContainer = () => {
  const {discount} = useSelector(({stepsecond}) => stepsecond);

  const dispatch = useDispatch();
  const OnDiscount = useCallback((inputPoint) => {
    dispatch(getDiscount(inputPoint));
  }, [dispatch]);
  return (
    <>
        <ReserveNavContainer/>
        <SelectPay OnDiscount={OnDiscount}/>
    </>
  )
}

export default SelectPayContainer;