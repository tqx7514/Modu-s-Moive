import React, { useCallback } from 'react';
import ReserveNav from '../../components/ticket/ReserveNav';
import { useDispatch, useSelector } from 'react-redux';

const ReserveNavContainer = () => {
    const { data } = useSelector(({stepfirst}) => stepfirst);
    const {adult, teenager, senior, disabled, seat, totalPrice} = useSelector(({stepsecond}) => stepsecond)

    return(
        <>
            <ReserveNav
                data={data}
                adult={adult}
                teenager={teenager}
                senior={senior}
                disabled={disabled}
                seat={seat}
                totalPrice={totalPrice}
            />
        </>
    )
}

export default ReserveNavContainer