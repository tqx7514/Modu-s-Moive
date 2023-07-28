import React from 'react'
import SelectCinemaContainer from './SelectCinemaContainer'
import SelectMovieContainer from './SelectMovieContainer'
import SelectDateContainer from './SelectDateContainer'
import ReserveNavContainer from '../ReserveNavContainer'
import { useSelector } from 'react-redux'
import stepsecond from '../../../modules/stepsecond'

const StepFirstContainer = () => {
  const {reservation} = useSelector(({stepsecond}) => ({reservation: stepsecond.reservation}));
  console.log(reservation);
  return (
    <>
        <ReserveNavContainer/>
        <SelectCinemaContainer/>
        <SelectMovieContainer/>
        <SelectDateContainer/>
    </>
  )
}

export default StepFirstContainer