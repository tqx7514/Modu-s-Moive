import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import BoardList from "../components/boards/BoardList";

const BoardListPage = () => {
    return (
        <div>
            <HeaderContainer/>
            <BoardList/>
        </div>
    );
};

export default BoardListPage;