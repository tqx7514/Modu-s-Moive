import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StepFirst from '../../components/ticket/StepFirst';
import { readMovie, readRegion, selectedRegion } from '../../modules/stepfirst';

const StepFirstContainer = () => {
  // Selector -----------------------------------------------------------

  const { region, cinema, movie } = useSelector(({stepfirst}) => stepfirst);
  
  // Dispatch -----------------------------------------------------------
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readRegion());
    dispatch(selectedRegion(1));
    dispatch(readMovie());
  }, [dispatch]);



  const onSelectRegion = useCallback((grade) => {
    dispatch(selectedRegion(grade));
  },[dispatch]);

  const onCinemaTitle = useCallback((cinema) => {

  })
  // 컴포넌트 -------------------------------------------------------------

  return(
    <>
      <StepFirst 
              region={region}
              cinema={cinema}
              movie={movie}
              onSelectRegion={onSelectRegion}
      />
    </>
  )
};    

export default StepFirstContainer;
