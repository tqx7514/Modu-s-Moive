import React, { useCallback } from 'react'
import SelectMovie from '../../components/ticket/SelectMovie';
import { useDispatch, useSelector } from 'react-redux';
import { setSecondData } from '../../modules/stepfirst';

const SelectMovieContainer = () => {
  const { movie, data } = useSelector(({stepfirst}) => stepfirst);
  
  const dispatch = useDispatch();

  const onSecondData = useCallback((movie) => {
    dispatch(setSecondData(movie));
  }, [dispatch]);

  return (
    <>
        <SelectMovie
        movie={movie}
        data={data}
        onSecondData={onSecondData}
      />
    </>
  )
}

export default SelectMovieContainer