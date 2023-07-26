import React, { useEffect } from "react";
import Responsive from "../containers/common/Responsive";
import HeaderContainer from "../containers/common/HeaderContainer";
import MeetEditorContainer from "../containers/meet/MeetEditorContainer";
import MeetTagBoxContainer from "../containers/meet/MeetTagBoxContainer";
import MeetWriteActionButtonsContainer from "../containers/meet/MeetWriteActionButtonsContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/common/Footer";

const MeetWritePage = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      // console.log(user.grade);
      alert("로그인을 하셔야 글쓰기가 가능합니다");
      navigate("/meet");
    }
  }, [user]);
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <MeetEditorContainer />
        <MeetTagBoxContainer />
        <MeetWriteActionButtonsContainer />
      </Responsive>
      <Footer />
    </>
  );
};

export default MeetWritePage;
