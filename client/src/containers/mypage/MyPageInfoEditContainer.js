import React from "react";
import MyPageInfoEdit from "../../components/mypage/MyPageInfoEdit";

const MyPageInfoEditContainer = ({ info }) => {
  return (
    <div>
      <MyPageInfoEdit info={info} />
    </div>
  );
};

export default MyPageInfoEditContainer;
