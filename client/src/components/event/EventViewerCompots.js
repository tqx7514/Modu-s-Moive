import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  eventlist,
  eventmovielist,
  eventpromotelist,
  eventotherlist,
} from "../../lib/api/event";

const EventViewerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventImage = styled.img`
  margin-bottom: 10px;
`;

const EventTitle = styled.h2`
  margin-bottom: 5px;
`;

const EventDate = styled.p`
  margin-bottom: 20px;
`;

const EventContent = styled.p`
  margin-bottom: 20px;
`;

const EventShareButton = styled.button`
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
`;

const EventBackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
`;

const EventViewerCompots = ({eventpost}) => {
  const [eventData, setEventData] = useState(null);
  console.log("123531413423", eventpost);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("링크가 복사되었습니다");
  };

  if (!eventData) {
    return <div>Loading...</div>;
  }


  return (
    <EventViewerBlock>
      {/* <EventImage src={eventImg} alt="이벤트 이미지" />
      <EventTitle>{eventTitle}</EventTitle>
      <EventDate>
        {startEventDate} ~ {endEventDate}
      </EventDate>
      <EventContent>{eventContent}</EventContent>
      <EventShareButton onClick={handleShare}>공유하기</EventShareButton>
      <EventBackButton onClick={handleGoback}>목록보기</EventBackButton> */}
    </EventViewerBlock>
  );
};

export default EventViewerCompots;
