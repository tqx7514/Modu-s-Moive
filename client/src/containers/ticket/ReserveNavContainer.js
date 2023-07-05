import React, { useCallback } from 'react';
import ReserveNav from '../../components/ticket/ReserveNav';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstData } from '../../modules/stepfirst';

const ReserveNavContainer = () => {
    const { data } = useSelector(({stepfirst}) => stepfirst);

    return(
        <>
            <ReserveNav
                data={data}
            />
        </>
    )
}

export default ReserveNavContainer