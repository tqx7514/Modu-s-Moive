import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  eventlist,
  eventmovielist,
  eventotherlist,
  eventpromotelist,
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

// const EventContent = styled.p`
//   margin-bottom: 20px;
// `;

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

const EventViewerCompots = ({ eventpost }) => {
  const eventDetail = eventpost.eventDetail;
  const { eventNum } = useParams();
  const [eventData, setEventData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        let response = null;
        if (eventNum.startsWith("event")) {
          response = await eventlist(eventNum);
        } else if (eventNum.startsWith("movie")) {
          response = await eventmovielist(eventNum);
        } else if (eventNum.startsWith("promote")) {
          response = await eventpromotelist(eventNum);
        } else if (eventNum.startsWith("other")) {
          response = await eventotherlist(eventNum);
        }
        setEventData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEventData();
  }, [eventNum]);

  const handleGoback = () => {
    navigate(-1);
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("링크가 복사되었습니다");
  };

  if (!eventDetail) {
    return <div>Loading...</div>;
  }

  return (
    <EventViewerBlock>
      
      <EventTitle>{eventDetail.eventTitle}</EventTitle>
      <EventDate>
        {eventDetail.startEventDate} ~ {eventDetail.endEventDate}
      </EventDate>
      {/* <EventImage src={eventDetail.eventImg} alt="이벤트 이미지" /> */}
      {/* <EventContent>{eventDetail.eventContent}</EventContent> */}
      <img src={eventDetail.eventContent} alt="이벤트 이미지" />
      <EventShareButton onClick={handleShare}>공유하기</EventShareButton>
      <EventBackButton onClick={handleGoback}>목록보기</EventBackButton>
    </EventViewerBlock>
  );
};

export default EventViewerCompots;
