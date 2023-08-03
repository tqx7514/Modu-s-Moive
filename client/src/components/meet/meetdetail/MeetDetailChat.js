import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useState } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsFillChatDotsFill } from "react-icons/bs";
import MeetDetailChatInput from "./MeetDetailChatInput";
import Man from "../../../public/Man.png";
import Woman from "../../../public/Woman.png";
import { getMsg, sendMsg } from "../../../lib/api/meet";
import { useSelector } from "react-redux";
import robot from "../../../public/robot.gif";

const MeetDetailChat = ({ user, meet }) => {
  const [msg, setMsg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [a, setA] = useState(1);
  const scrollRef = useRef();
  const getMessages = async () => {
    const meetNum = meet.meetNum;
    const userId = user.num;
    const response = await getMsg({ meetNum, userId });
    setMsg(response.data);
  };
  const down = () => {
    // console.log("aaaaaaaaaaaaaaaaaaaa", a);
    if (a === 1) {
      console.log("실행합니다");
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setA(2);
  };
  useEffect(() => {
    if (msg.length > 0) {
      setLoading(false);
    }
  }, [msg]);

  useEffect(() => {
    down();
    if (!loading) {
      setTimeout(() => {
        down();
      }, 100);
    }
    const interval = setInterval(getMessages, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSendMsg = async (message) => {
    try {
      setA(1);
      // console.log("핸들센드메시지", a);

      const userId = user.num;
      const meetNum = meet.meetNum;
      await sendMsg({ userId, meetNum, message });

      const msgs = [...msg];
      msgs.push({ fromSelf: true, message: message });
      setMsg(msgs);
      getMessages();
      down();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (msg.length > 0) {
      down();
    }
  }, [msg, a]);

  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="meet-title">
            <h3>
              <span>
                <BsFillChatDotsFill />
                <h2>{meet && meet.title}</h2>
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="chat-messages">
        {loading ? (
          <LoadingBlock>
            <img src={robot} alt="" />
          </LoadingBlock>
        ) : (
          <>
            {msg.map((message) => {
              return (
                <div ref={scrollRef} key={uuidv4()}>
                  <div
                    className={`message ${
                      message.fromSelf ? "sended" : "received"
                    }`}
                  >
                    {message.fromSelf ? null : (
                      <div>
                        <Profile gender={message.gender} />
                        <Profile2>{message.senderName}</Profile2>
                      </div>
                    )}
                    <div className="content">
                      <span className="sender">{message.message}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <MeetDetailChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
};

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  margin: 0 0.5rem 0rem 0;
  background-color: ${(props) =>
    props.gender === "남자" ? "blue" : props.gender === "여자" ? "pink" : ""};
  color: white;
  font-weight: bold;
  background-image: url(${(props) =>
    props.gender === "남자" ? Man : props.gender === "여자" ? Woman : ""});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .sender {
    font-size: 0.7rem;
    margin-top: 0.2rem;
  }
`;

const Profile2 = styled.div`
  margin: 0 1rem 3rem 0;
  text-align: center;
  font-weight: bold;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .meet-title {
        h3 {
          color: white;
          display: flex;
          align-items: center;
          span {
            display: flex;
            align-items: center;
            font-weight: bold;
            h2 {
              margin: 0 0 0 0.3rem;
            }
          }
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
    }
    .received {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;

const LoadingBlock = styled.div`
  display: flex;
`;

export default MeetDetailChat;
