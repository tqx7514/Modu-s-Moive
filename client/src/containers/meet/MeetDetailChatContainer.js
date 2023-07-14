import React from "react";
import MeetDetailChat from "../../components/meet/meetdetail/MeetDetailChat";
import { styled } from "styled-components";
import Responsive from "../common/Responsive";
import { useSelector } from "react-redux";
import MeetDetailMember from "../../components/meet/meetdetail/MeetDetailMember";

const MeetDetailChatContainer = () => {
  const { user, loading, meet } = useSelector(({ user, loading, meet }) => ({
    user: user.user,
    loading: loading["chat/CHAT_LIST"],
    meet: meet.meet,
  }));
  const messages = [
    {
      fromSelf: true,
      sender: "skm0628",
      gender: "남자",
      message: "하하하",
    },
    {
      fromSelf: true,
      sender: "skm0628",
      gender: "남자",
      message: "하하하2",
    },
    {
      fromSelf: false,
      sender: "woman",
      gender: "여자",
      message: "코코코",
    },
    {
      fromSelf: false,
      sender: "woman",
      gender: "여자",
      message: "코코코2",
    },
  ];

  return (
    <Container>
      <div className="container">
        {loading ? (
          <img src="loader.gif" alt="" />
        ) : (
          <>
            <MeetDetailMember user={user} />
            <MeetDetailChat user={user} messages={messages} meet={meet} />
          </>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 80vh;
  /* width: 80vw; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: white;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85%;
    width: 85%;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

export default MeetDetailChatContainer;
