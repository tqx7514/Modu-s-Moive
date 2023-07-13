import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsFillChatDotsFill } from "react-icons/bs";
import MeetDetailChatInput from "./MeetDetailChatInput";

const MeetDetailChat = ({ user, messages, meet }) => {
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  const handleSendMsg = () => {};

  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          {/* <div className="avatar">{meet.meetNum}</div> */}
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
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "received"
                }`}
              >
                <div className="content">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <MeetDetailChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
};

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

export default MeetDetailChat;
