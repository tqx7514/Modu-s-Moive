import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/common/Header";
import { initializeForm } from "../../modules/auth";
import { logout } from "../../modules/user";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    Swal.fire({
      title: "로그아웃",
      text: "정말 로그아웃 하시겠습니까?",
      showCancelButton: true,
      cancelButtonText: "아니오",
      confirmButtonText: "로그아웃",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        dispatch(logout());
        dispatch(initializeForm("login"));
        dispatch(initializeForm("register"));
        dispatch(initializeForm("auth"));
        navigate("/");
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "로그아웃 성공 / 홈으로 갑니다",
        });
      }
    });

    // window.location.reload();
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
