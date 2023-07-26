import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect, useCallback } from "react";
import { readRegion, readCinema, myCinema } from "../../modules/cinema";
import Cinema from "../../components/cinema/Cinema";

const CinemaContainer = () => {
    const dispatch = useDispatch();
    const {region, cinema, user, viewcinema} = useSelector(({cinema, user}) => ({
        region: cinema.region,
        cinema: cinema.cinema,
        user: user.user.id,
        viewcinema: cinema.viewcinema,
    }));
    console.log("cinemas======>", cinema);
    console.log("regions======>", region);
    console.log("viewcinema", viewcinema);

    useEffect(() => {
        dispatch(readRegion());
        dispatch(readCinema());
    }, [dispatch]);

    const onCreate = useCallback((selectedCinema, selectedAddrDetail) =>{
        console.log("userdksfjalsdfjkldkflasdjfkl",user);
        dispatch(myCinema({selectedCinema, selectedAddrDetail, user}));
    }, [dispatch, user])

    return(
        <Cinema cinema={cinema} region={region} mycinema={viewcinema} onCreate={onCreate}/>
    )

}

export default CinemaContainer;