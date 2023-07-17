import React from 'react'
import SelectCinemaContainer from './SelectCinemaContainer'
import SelectMovieContainer from './SelectMovieContainer'
import SelectDateContainer from './SelectDateContainer'
import ReserveNavContainer from '../ReserveNavContainer'

const StepFirstContainer = () => {
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