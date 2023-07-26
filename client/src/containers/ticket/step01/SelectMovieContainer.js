import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectMovie from "../../../components/ticket/step01/SelectMovie";
import { setData } from "../../../modules/stepfirst";

const SelectMovieContainer = () => {
  const { movie, data } = useSelector(({ stepfirst }) => stepfirst);

  const dispatch = useDispatch();

  const onSecondData = useCallback(
    (movieData) => {
      dispatch(setData({ key: "movie", value: movieData }));
    },
    [dispatch]
  );

  return (
    <>
      <SelectMovie movie={movie} data={data} onSecondData={onSecondData} />
    </>
  );
};

export default SelectMovieContainer;
