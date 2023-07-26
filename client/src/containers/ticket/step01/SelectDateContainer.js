import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectDate from "../../../components/ticket/step01/SelectDate";
import { resetDate, setData } from "../../../modules/stepfirst";

const SelectDateContainer = () => {
  const dispatch = useDispatch();
  const onDateData = useCallback(
    (dateData) => {
      dispatch(setData({ key: "date", value: dateData }));
    },
    [dispatch]
  );
  const onDayData = useCallback(
    (dayData) => {
      dispatch(setData({ key: "day", value: dayData }));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(resetDate())
  }, [dispatch])
  return (
    <>
      <SelectDate 
        onDateData={onDateData}
        onDayData={onDayData} 
      />
    </>
  );
};

export default SelectDateContainer;
