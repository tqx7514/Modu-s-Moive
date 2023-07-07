import { styled } from "styled-components";
import Responsive from "../common/Responsive";
import { useState } from "react";
import MeetDetailHome from "./meetdetail/MeetDetailHome";
import MeetDetailChat from "./meetdetail/MeetDetailChat";
import MeetDetailBoardPage from "../../pages/MeetDetailBoardPage";

const MeetViewerBlock = styled(Responsive)`
  margin-top: 3rem;
  > hr {
    /* margin-bottom: 1rem; */
    border: none;
    border-top: 1px solid lightslategray; /* 연한 회색으로 변경 */
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
  background-color: lavender;
  height: 5rem;
  font-size: 1.5rem;
  font-weight: bold;

  > div {
    margin: 0 1rem 0 1rem;
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
      height: 1px;
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

const MeetViewer = ({ meet, error, loading, actionButtons, joinButton }) => {
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
  return (
    <MeetViewerBlock>
      <MeetHeaderBlock>
        <h2>모임</h2>
      </MeetHeaderBlock>
      <hr />
      <MeetTitle>
        <div>{title}</div>
        <div>{actionButtons}</div>
      </MeetTitle>
      <hr />
      <Category>
        <div
          style={category === "Home" ? activeStyle : undefined}
          onClick={handleHomeClick}
        >
          홈
        </div>
        <div
          style={category === "Board" ? activeStyle : undefined}
          onClick={handleBoardClick}
        >
          게시판
        </div>
        <div
          style={category === "Chat" ? activeStyle : undefined}
          onClick={handleChatClick}
        >
          채팅
        </div>
      </Category>
      <hr />
      {category === "Home" && <MeetDetailHome meet={meet} />}
      {category === "Board" && <MeetDetailBoardPage />}
      {category === "Chat" && <MeetDetailChat />}
      <ButtonAreaBlock>{joinButton}</ButtonAreaBlock>
    </MeetViewerBlock>
  );
};

export default MeetViewer;
