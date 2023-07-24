import { styled } from "styled-components";
import { useState } from "react";
import MyPageTicketContainer from "../../containers/mypage/MyPageTicketContainer";
import MyPageBoardContainer from "../../containers/mypage/MyPageBoardContainer";
import MyPageMeetContainer from "../../containers/mypage/MyPageMeetContainer";
import MyPageInquiryContainer from "../../containers/mypage/MyPageInquiryContainer";
import MyPageInfoContainer from "../../containers/mypage/MyPageInfoContainer";

const MyPageBottomInfo = () => {
  const [category, setCategory] = useState("Ticket");
  const handleTicketClick = () => {
    setCategory("Ticket");
  };

  const handleBoardClick = () => {
    setCategory("Board");
  };
  const handleMeetClick = () => {
    setCategory("Meet");
  };
  const handleInquiryClick = () => {
    setCategory("Inquiry");
  };
  const handleInfoClick = () => {
    setCategory("Info");
  };

  return (
    <MyPageBottomInfoBlock>
      <Category>
        <div
          style={category === "Ticket" ? activeStyle : undefined}
          onClick={handleTicketClick}
        >
          My 티켓
        </div>
        <div
          style={category === "Board" ? activeStyle : undefined}
          onClick={handleBoardClick}
        >
          My 게시글
        </div>
        <div
          style={category === "Meet" ? activeStyle : undefined}
          onClick={handleMeetClick}
        >
          My 모임
        </div>
        <div
          style={category === "Inquiry" ? activeStyle : undefined}
          onClick={handleInquiryClick}
        >
          My 문의
        </div>
        <div
          style={category === "Info" ? activeStyle : undefined}
          onClick={handleInfoClick}
        >
          My 정보관리
        </div>
      </Category>
      {category === "Ticket" && <MyPageTicketContainer />}
      {category === "Board" && <MyPageBoardContainer />}
      {category === "Meet" && <MyPageMeetContainer />}
      {category === "Inquiry" && <MyPageInquiryContainer />}
      {category === "Info" && <MyPageInfoContainer />}
    </MyPageBottomInfoBlock>
  );
};

const MyPageBottomInfoBlock = styled.div`
  margin: 2rem 0 0 0;
`;
const Category = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  margin-top: 1rem;

  > div {
    flex: 1;
    border-bottom: 1px solid lightgray;
    text-align: center;
    position: relative;
    cursor: pointer;
    padding-bottom: 0.8rem;
    color: gray;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.5px;
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
  color: "black",
  borderBottom: "2px solid black",
};

export default MyPageBottomInfo;
