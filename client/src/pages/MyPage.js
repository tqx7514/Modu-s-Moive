import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import HeaderContainer from "../containers/common/HeaderContainer";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  return (
    <div>
      <HeaderContainer />
      {user && <div>{user.name}님의 마이페이지</div>}
    </div>
  );
};

export default MyPage;
