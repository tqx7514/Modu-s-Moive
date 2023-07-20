import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MyPageMain from "../../components/mypage/MyPageMain";

const MyPageMainContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  return <MyPageMain />;
};

export default MyPageMainContainer;
