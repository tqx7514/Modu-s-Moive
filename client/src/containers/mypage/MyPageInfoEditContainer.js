import React from "react";
import MyPageInfoEdit from "../../components/mypage/MyPageInfoEdit";

const MyPageInfoEditContainer = ({ info, click }) => {
  return (
    <div>
      <MyPageInfoEdit info={info} click={click} />
    </div>
  );
};

export default MyPageInfoEditContainer;
