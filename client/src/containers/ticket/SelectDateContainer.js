import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SelectDate from '../../components/ticket/step1/SelectDate'
import stepfirst, { setDateData } from '../../modules/stepfirst';


const SelectDateContainer = () => {

    const {} = useSelector(({stepfirst}) => stepfirst);

    const dispatch = useDispatch();
    const onDateData = useCallback((date) => {
        dispatch(setDateData(date));
    }, [dispatch])
    
    return (
        <>
            <SelectDate onDateData={onDateData}/>
        </>
    )
}

export default SelectDateContainer