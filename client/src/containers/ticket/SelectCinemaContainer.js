import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectCinema from "../../components/ticket/step1/SelectCinema";
import {
  readMovie,
  readRegion,
  selectedRegion,
  setData,
  setFirstData,
  setSecondData,
} from "../../modules/stepfirst";

const SelectCinemaContainer = () => {
  // Selector -----------------------------------------------------------

  const { region, cinema, data } = useSelector(({ stepfirst }) => stepfirst);

  // Dispatch -----------------------------------------------------------
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readRegion());
    dispatch(selectedRegion(1));
    dispatch(readMovie());
  }, [dispatch]);

  const onSelectRegion = useCallback(
    (grade) => {
      dispatch(selectedRegion(grade));
    },
    [dispatch]
  );

  const onSelectCinema = useCallback(() => {
    dispatch(readMovie());
    dispatch(setSecondData(""));
  }, [dispatch]);

  const onFirstData = useCallback(
    (cinemaData) => {
      console.log("cinemaData=========", cinemaData);
      // dispatch(setFirstData(cinema));
      dispatch(setData({ key: "cinema", value: cinemaData }));
    },
    [dispatch]
  );

  // 컴포넌트 -------------------------------------------------------------

  return (
    <>
      <SelectCinema
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
  );
};

export default SelectCinemaContainer;
