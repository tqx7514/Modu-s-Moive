import React from "react";
import MeetTags from "../../common/MeetTags";
import { styled } from "styled-components";

const MeetInfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: lavender;
  height: 30rem;
  font-size: 1.1rem;

  > div {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;
const MeetInfo = styled.div`
  width: 48%;
  background-color: yellow;
  height: 95%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  hr {
    border: none;
    border-top: 1px solid black;
    margin: 0.5rem 0;
    width: 80%;
  }

  > div {
    margin: 0.5rem 0 0.5rem 0;
  }
`;
const MeetContent = styled.div`
  padding: 2rem 2rem 0 2rem;3
  text-align: center;
`;
const MeetDetailHome = ({ meet }) => {
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
        <MeetInfo>이미지</MeetInfo>
        <MeetInfo>
          <div>모임번호 | {meetNum}</div>
          <hr />
          <div>지역 | {region}</div>
          <hr />
          <div>모임장 | {userId}</div>
          <hr />
          <div>멤버 | {count}</div>
          <hr />
          <div>Since {formattedDate}</div>
          <MeetTags tags={tagsArray} />
        </MeetInfo>
      </MeetInfoBlock>
      <MeetContent dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export default MeetDetailHome;
