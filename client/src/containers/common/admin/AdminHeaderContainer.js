import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../../../components/common/admin/AdminHeader";
import { logout } from "../../../modules/user";
import { useNavigate } from "react-router-dom";

const AdminHeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if ((user && user.grade < 2) || !user) {
      // console.log(user.grade);
      navigate("/");
      setTimeout(() => {
        alert("관리자만 접속가능합니다");
      }, 10);
    }
  }, []);

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return <AdminHeader user={user} onLogout={onLogout} />;
};

export default AdminHeaderContainer;
