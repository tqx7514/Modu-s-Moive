import React from "react";
import MeetTags from "../../common/MeetTags";
import { styled } from "styled-components";
import { FaChessKing } from "react-icons/fa";

const MeetInfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 30rem;
  font-size: 1.1rem;

  > div {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;
const MeetInfo = styled.div`
  width: 48%;
  background-color: white;
  height: 95%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  hr {
    border: none;
    border-top: 1px solid lightgray;
    margin: 0.5rem 0;
    width: 80%;
  }

  > div {
    margin: 0.5rem 0 0.5rem 0;
  }
`;

const MeetInfoImg = styled.div`
  width: 48%;
  background: url("/MeetMovie.jpg") no-repeat;
  background-size: cover; /* 배경 이미지를 사진에 딱 맞게 조절 */
  background-position: center; /* 배경 이미지를 가운데로 정렬 */
  height: 95%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`;

const MeetContent = styled.div`
  padding: 2rem 2rem 0 2rem;3
  text-align: center;
`;
const ButtonAreaBlock = styled.div`
  display: flex;
  justify-content: center;
`;
const MeetDetailHome = ({ meet, joinButton }) => {
  const { title, body, userId, createdAt, tags, region, count, meetNum } = meet;
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}.${month}.${day}`;
  const tagsArray = Array.isArray(tags) ? tags : JSON.parse(tags);
  return (
    <div>
      <MeetInfoBlock>
        <MeetInfoImg>
          <img src="MeetMovie.jpg" alt="" />
        </MeetInfoImg>
        <MeetInfo>
          <div>모임번호 | {meetNum}</div>
          <hr />
          <div>지역 | {region}</div>
          <hr />
          <div>
            매니저 |
            <span style={{ margin: "0 0.3rem 0 0.3rem " }}>
              <FaChessKing />
            </span>
            {userId}
          </div>
          <hr />
          <div>멤버 | {count}</div>
          <hr />
          <div>Since {formattedDate}</div>
          <MeetTags tags={tagsArray} />
          <ButtonAreaBlock>{joinButton}</ButtonAreaBlock>
        </MeetInfo>
      </MeetInfoBlock>
      <MeetContent dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export default MeetDetailHome;
