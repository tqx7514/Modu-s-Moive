import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectCinema from "../../../components/ticket/step01/SelectCinema";
import {
  readMovie,
  readRegion,
  selectedRegion,
  setData,
  setTimeData,
} from "../../../modules/stepfirst";

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
    dispatch(setData({key: "movie", value: ""}));
    dispatch(setTimeData({}));
  }, [dispatch]);

  const onFirstData = useCallback(
    (cinemaData) => {
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
    </>
  );
};

export default SelectCinemaContainer;
