import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import SelectDate from '../../../components/ticket/step01/SelectDate'
import { setData } from '../../../modules/stepfirst';


const SelectDateContainer = () => {

    const dispatch = useDispatch();
    const onDateData = useCallback(
        (dateData) => {
          dispatch(setData({ key: "date", value: dateData }));
        },
        [dispatch]
      );
    return (
        <>
            <SelectDate onDateData={onDateData}/>
        </>
    )
}

export default SelectDateContainer