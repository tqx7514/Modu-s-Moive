import React from "react";
import AdminCurrentMovieContainer from "../../containers/admin/AdminCurrentMovieContainer";
import AdminHeader from "../../components/common/admin/AdminHeader";

const CurrentMoviePage = () => {
    return (
        <div>
            <AdminHeader/>
            <AdminCurrentMovieContainer/>
        </div>
    );
};

export default CurrentMoviePage;