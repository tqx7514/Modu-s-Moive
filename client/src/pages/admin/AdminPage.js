import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import { useNavigate } from "react-router-dom";
import Responsive from "../../containers/common/Responsive";

const AdminPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
  background: gray;
`;

const AdminBody = styled(Responsive)`
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  background: gray;
`;

const AdminPage = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const navigate = useNavigate();
  useEffect(() => {
    if (user.grade < 2) {
      // console.log(user.grade);
      alert("관리자도 아닌새끼가 어딜?");
      navigate("/");
    }
  }, [user]);
  return (
    <AdminPageWrapper>
      <AdminHeaderContainer />
      <AdminBody>관리자 페이지</AdminBody>
    </AdminPageWrapper>
  );
};

export default AdminPage;
