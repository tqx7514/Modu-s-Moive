import { styled } from "styled-components";
import Responsive from "../common/Responsive";
import { useState } from "react";
import MeetDetailHome from "./meetdetail/MeetDetailHome";
import MeetDetailChatContainer from "../../containers/meet/MeetDetailChatContainer";
import MeetDetailBoardContainer from "../../containers/meet/MeetDetailBoardContainer";
import { GrGroup } from "react-icons/gr";
import MeetDetailManageContainer from "../../containers/meet/MeetDetailManageContainer";

const MeetViewerBlock = styled(Responsive)`
  /* margin-top: 1rem; */
  > hr {
    /* margin-bottom: 1rem; */
    border: none;
    border-top: 1px solid lightslategray;
  }
`;
const MeetHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const MeetTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lavenderblush;
  height: 5rem;
  font-size: 1.5rem;
  font-weight: bold;

  > div {
    margin: 0 1rem 0 1rem;
    font-family: "TTTtangsbudaejjigaeB";
  }
`;
const AdminMeetTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkgray;
  height: 5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: red;
  > div {
    margin: 0 1rem 0 1rem;
    font-family: "TTTtangsbudaejjigaeB";
  }
`;

const ButtonAreaBlock = styled.div`
  display: flex;
  justify-content: center;
`;
const Category = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  margin-top: 1rem;

  > div {
    /* display: inline-block; */
    flex: 1;
    text-align: center;
    position: relative;
    cursor: pointer;
    padding-bottom: 0.8rem;
    /* height: 100%; */

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: black;
      visibility: hidden;
      transition: all 0.2s ease-in-out;
    }

    &:hover:after,
    &.active:after {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

const AdminCategory = styled.div`
  display: flex;
  background-color: black;
  color: red;
  justify-content: space-between;
  padding-bottom: 0.3rem;
  padding-top: 1rem;
  font-weight: bold;

  > div {
    /* display: inline-block; */
    flex: 1;
    text-align: center;
    position: relative;
    cursor: pointer;
    padding-bottom: 0.8rem;
    /* height: 100%; */

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: black;
      visibility: hidden;
      transition: all 0.2s ease-in-out;
    }

    &:hover:after,
    &.active:after {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;
const activeStyle = {
  fontWeight: "bold",
};

const MeetViewer = ({
  meet,
  error,
  loading,
  actionButtons,
  joinButton,
  ownMeet,
  isJoined,
  isAdmin,
}) => {
  const [category, setCategory] = useState("Home");
  const handleHomeClick = () => {
    setCategory("Home");
  };
  const handleBoardClick = () => {
    setCategory("Board");
  };
  const handleChatClick = () => {
    setCategory("Chat");
  };
  const handleManageClick = () => {
    setCategory("Manage");
  };
  if (error) {
    if (error.response && error.response.status === 404) {
      return <MeetViewerBlock>존재하지 않는 모임입니다</MeetViewerBlock>;
    }
    return <MeetViewerBlock>오류발생!</MeetViewerBlock>;
  }

  if (loading || !meet) {
    return null;
  }
  const { title, body, userId, createdAt, tags, region, count, meetNum } = meet;
  // console.log("내 모임인가???", ownMeet);

  return (
    <MeetViewerBlock>
      <MeetHeaderBlock>{!isAdmin && <h2>모임</h2>}</MeetHeaderBlock>
      <hr />
      {isAdmin ? (
        <AdminMeetTitle>
          <div>
            <span style={{ margin: "0 1rem 0 1rem", alignItems: "center" }}>
              <GrGroup />
            </span>
            {title}
          </div>
          <div>{actionButtons}</div>
        </AdminMeetTitle>
      ) : (
        <MeetTitle>
          <div>
            <span style={{ margin: "0 1rem 0 1rem", alignItems: "center" }}>
              <GrGroup />
            </span>
            {title}
          </div>
          <div>{actionButtons}</div>
        </MeetTitle>
      )}

      <hr />
      {isAdmin ? (
        <AdminCategory>
          <div
            style={category === "Home" ? activeStyle : undefined}
            onClick={handleHomeClick}
          >
            홈
          </div>
          {isJoined && (
            <div
              style={category === "Board" ? activeStyle : undefined}
              onClick={handleBoardClick}
            >
              게시판
            </div>
          )}
          {isJoined && (
            <div
              style={category === "Chat" ? activeStyle : undefined}
              onClick={handleChatClick}
            >
              채팅
            </div>
          )}

          {ownMeet && (
            <div
              style={category === "Manage" ? activeStyle : undefined}
              onClick={handleManageClick}
            >
              회원관리
            </div>
          )}
        </AdminCategory>
      ) : (
        <Category>
          <div
            style={category === "Home" ? activeStyle : undefined}
            onClick={handleHomeClick}
          >
            홈
          </div>
          {isJoined && (
            <div
              style={category === "Board" ? activeStyle : undefined}
              onClick={handleBoardClick}
            >
              게시판
            </div>
          )}
          {isJoined && (
            <div
              style={category === "Chat" ? activeStyle : undefined}
              onClick={handleChatClick}
            >
              채팅
            </div>
          )}

          {ownMeet && (
            <div
              style={category === "Manage" ? activeStyle : undefined}
              onClick={handleManageClick}
            >
              회원관리
            </div>
          )}
        </Category>
      )}
      <hr />
      {category === "Home" && (
        <MeetDetailHome meet={meet} joinButton={joinButton} />
      )}
      {category === "Board" && <MeetDetailBoardContainer isAdmin={isAdmin} />}
      {category === "Chat" && <MeetDetailChatContainer />}
      {category === "Manage" && <MeetDetailManageContainer />}
    </MeetViewerBlock>
  );
};

export default MeetViewer;
