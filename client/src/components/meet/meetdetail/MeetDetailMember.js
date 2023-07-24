import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Logo from "../../../public/Logo.png";
import Man from "../../../public/Man.png";
import Woman from "../../../public/Woman.png";

const MeetDetailMember = ({ user, chatusers }) => {
  return (
    <>
      <Container>
        <div className="brand">
          <img src={Logo} alt="" />
        </div>
        <div className="contacts">
          {chatusers.map((chatuser) => {
            return (
              <div
                key={chatuser.user_Num}
                className={`contact ${
                  user && user.id === chatuser.user_Id ? "selected" : ""
                }`}
              >
                <div className="avatar">
                  {chatuser && chatuser.user_Num_user.gender === "남자" ? (
                    <img src={Man} alt="" />
                  ) : (
                    <img src={Woman} alt="" />
                  )}
                </div>
                <div className="username">
                  <h3>
                    {chatuser.user_Num_user.name}({chatuser.user_Num_user.id})
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default MeetDetailMember;

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin: 1rem 0 1rem 0;
    img {
      height: 3rem;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #9a86f3;
    }
  }

  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
