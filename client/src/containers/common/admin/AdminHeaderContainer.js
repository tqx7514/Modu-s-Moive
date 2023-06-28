import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../../../components/common/admin/AdminHeader";
import { logout } from "../../../modules/user";

const AdminHeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    // window.location.reload();
  };
  return <AdminHeader user={user} onLogout={onLogout} />;
};

export default AdminHeaderContainer;
