import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StepFirst from '../../components/ticket/StepFirst';
import { readCinema, readRegion, selectedRegion } from '../../modules/stepfirst';

const StepFirstContainer = () => {
  // Selector -----------------------------------------------------------

  const { region } = useSelector(({stepfirst}) => stepfirst.region);
  const { cinema, titleCinema } = useSelector(({stepfirst}) => stepfirst);
  
  // Dispatch -----------------------------------------------------------
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readRegion());
    dispatch(selectedRegion(1));
  }, [dispatch]);



  const onSelectRegion = useCallback((grade) => {
    dispatch(selectedRegion(grade));
    console.log("555555555555",grade);
  },[dispatch]);

  // const handleCinema = useCallback(() => {
  //   if (region.length > 0) {
  //     const selectedGrade = region[0]?.grade; // 초기에 선택된 지역의 등급을 사용합니다 (첫 번째 지역의 등급으로 가정)
  //     dispatch(selectedRegion(selectedGrade));
  //   }
  // }, [dispatch, region]);

  console.log("222222222->", region);

  // 컴포넌트 -------------------------------------------------------------

  return(
    <>
      <StepFirst 
              region={region}
              cinema={cinema}
              titleCinema={titleCinema}
              onSelectRegion={onSelectRegion}
              // cinema={cinema}
      />;
    </>
  )
};    

export default StepFirstContainer;
