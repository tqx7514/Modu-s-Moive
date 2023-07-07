import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StepFirst from '../../components/ticket/step1/StepFirst';
import { readMovie, readRegion, selectedRegion, setFirstData, setSecondData } from '../../modules/stepfirst';

const StepFirstContainer = () => {
  // Selector -----------------------------------------------------------

  const { region, cinema, data } = useSelector(({stepfirst}) => stepfirst);
  
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

  const onSelectCinema = useCallback(() => {
    dispatch(readMovie());
  },[dispatch]);

  const onFirstData = useCallback((cinema) => {
    dispatch(setFirstData(cinema));
  }, [dispatch]);
  
  // const onSecondData = useCallback((movie) => {
  //   dispatch(setSecondData(movie));
  // }, [dispatch]);
  
  // 컴포넌트 -------------------------------------------------------------

  return(
    <>
      <StepFirst 
        region={region}
        cinema={cinema}
        data={data}
        onSelectRegion={onSelectRegion}
        onSelectCinema={onSelectCinema}
        onFirstData={onFirstData}
      />
      {/* <SelectMovie
        movie={movie}
        onSecondData={onSecondData}
      /> */}
    </>
  )
};    

export default StepFirstContainer;
