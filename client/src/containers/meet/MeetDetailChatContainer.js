import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import MeetDetailChat from "../../components/meet/meetdetail/MeetDetailChat";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import MeetDetailMember from "../../components/meet/meetdetail/MeetDetailMember";
import { axios } from "axios";
import { useNavigate } from "react-router-dom";

const MeetDetailChatContainer = () => {
  const { user, loading, meet } = useSelector(({ user, loading, meet }) => ({
    user: user.user,
    loading: loading["chat/CHAT_LIST"],
    meet: meet.meet,
  }));
  const navigate = useNavigate();
  // const socket = useRef();
  // const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const check = async () => {
      if (!user) {
        navigate("/login");
      } else {
        setCurrentUser(user);
      }
    };
    check();
  }, []);

  return (
    <Container>
      <div className="container">
        {loading ? (
          <img src="loader.gif" alt="" />
        ) : (
          <>
            <MeetDetailMember user={user} chatusers={meet.user} />
            <MeetDetailChat user={user} meet={meet} />
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
