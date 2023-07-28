import React, { useCallback } from 'react';
import ReserveNav from '../../components/ticket/ReserveNav';
import { useDispatch, useSelector } from 'react-redux';

const ReserveNavContainer = () => {
    const { data } = useSelector(({stepfirst}) => stepfirst);
    const {person, seat, totalPrice} = useSelector(({stepsecond}) => stepsecond)

    return(
        <>
            <ReserveNav
                data={data}
                person={person}
                seat={seat}
                totalPrice={totalPrice}
            />
        </>
    )
}

export default ReserveNavContainer