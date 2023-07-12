import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  eventlist,
  eventmovielist,
  eventotherlist,
  eventpromotelist,
} from "../../lib/api/event";
import Button from "../common/Button";

const EventViewerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventTitle = styled.h2`
  margin-bottom: 5px;
`;

const EventDate = styled.p`
  margin-bottom: 10px;
`;

const EventButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem 1rem 0rem;
  width: 100%;
  max-width: 400px;

  .gobackBtn {
    font-weight: normal;
    width: 100px;
    height: 40px;
  }
`;

const EventShareButton = styled.button`
  display: flex;
  margin-left: 0 auto;
  align-items: center;
  justify-content: center;
`;

const BtnShareImage = styled.img`
  margin-right: 4px;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
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
      <img src={eventDetail.eventContent} alt="이벤트 이미지" />
      <EventButtonBlock>
        <Button className="gobackBtn" onClick={handleGoback}>
          목록보기
        </Button>
        <EventShareButton onClick={handleShare}>
          <BtnShareImage src="../../btn_icon_share.svg" /> 공유하기 
        </EventShareButton>
      </EventButtonBlock>
    </EventViewerBlock>
  );
};

export default EventViewerCompots;
