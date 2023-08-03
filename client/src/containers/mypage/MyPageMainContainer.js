import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MyPageMain from "../../components/mypage/MyPageMain";
import { viewCinema } from "../../modules/cinema";

const MyPageMainContainer = () => {
  const { user, loading, viewcinema, reservation } = useSelector(
    ({ user, loading, cinema, stepsecond }) => ({
      user: user.user,
      loading: loading["event/LIST_EVENTS"],
      viewcinema: cinema.viewcinema,
      reservation: stepsecond.reservation,
    })
  );
  // console.log("viewcinema======>", viewcinema);
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

  const ownPost = (id) => {
    return user && user.id === id;
  };

  return (
    <MyPageMain
      user={user}
      loading={loading}
      viewcinema={viewcinema}
      ownPost={ownPost}
      reservation={reservation}
    />
  );
};

export default MyPageMainContainer;
