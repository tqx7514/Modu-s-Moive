import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MyPageMain from "../../components/mypage/MyPageMain";

const MyPageMainContainer = () => {
  const { user, loading } = useSelector(({ user, loading }) => ({
    user: user.user,
    loading: loading["event/LIST_EVENTS"],
  }));
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const checkUser = async () => {
      if (!user) {
        // console.log("!user입니다");
        alert("로그인 하십시오");
        navigate("/");
      } else if (user.id && user.id !== id) {
        // console.log("다른아이디로옴", user.id, id);
        alert("본인이 아닙니다");
        navigate(`/mypage/${user.id}`);
      }
    };
    checkUser();
  }, [user]);

  // console.log("user", user, "loading", loading);

  return <MyPageMain user={user} loading={loading} />;
};

export default MyPageMainContainer;
