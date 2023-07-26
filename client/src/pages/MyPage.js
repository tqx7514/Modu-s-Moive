import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import MyPageMainContainer from "../containers/mypage/MyPageMainContainer";
import Footer from "../components/common/Footer";

const MyPage = () => {
  return (
    <div>
      <HeaderContainer />
      <MyPageMainContainer />
      <Footer />
    </div>
  );
};

export default MyPage;
