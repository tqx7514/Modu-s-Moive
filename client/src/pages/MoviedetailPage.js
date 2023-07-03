import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import Moviedetail from "../components/movie/Moviedetail";
import DetailContainer from "../containers/movie/DetailContainer";

const MoviedetailPage = () => {
    return (
        <div>
            <HeaderContainer/>
            {/* <Moviedetail/> */}
            <DetailContainer/>
        </div>
    );
};

export default MoviedetailPage;