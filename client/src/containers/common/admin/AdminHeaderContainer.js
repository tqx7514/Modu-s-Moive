import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../../../components/common/admin/AdminHeader";
import { logout } from "../../../modules/user";
import { useNavigate } from "react-router-dom";

const AdminHeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return <AdminHeader user={user} onLogout={onLogout} />;
};

export default AdminHeaderContainer;
