import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { readRegion, readCinema } from "../../modules/cinema";
import Cinema from "../../components/cinema/Cinema";

const CinemaContainer = () => {
    const dispatch = useDispatch();
    const {region, cinema} = useSelector(({cinema}) => cinema);
    console.log("cinemas======>", cinema);
    console.log("regions======>", region);


    useEffect(() => {
        dispatch(readRegion());
        dispatch(readCinema());
    }, [dispatch]);

    return(
        <Cinema cinema={cinema} region={region}/>
    )

}

export default CinemaContainer;