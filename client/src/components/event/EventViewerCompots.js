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
import EventCategory from "./EventCategory";

const EventViewerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const EventTitle = styled.h2`
  display: flex;
  margin: 10px 0px 10px 0px;
  width: 980px;
  justify-content: center;
`;

const EventDate = styled.p`
  display: flex;
  margin-bottom: 10px;
  width: 980px;
  justify-content: center;
`;

const EventButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px 10px 0px;
  width: 100%;
  max-width: 980px;

  .gobackBtn {
    font-weight: normal;
    width: 100px;
    height: 40px;
    margin-right: 10px;
  }
`;

const EventShareButton = styled.button`
  display: flex;
  width: 100px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
`;

const BtnShareImage = styled.img`
  margin-right: 4px;
  align-items: center;
  justify-content: center;
  color: #ffffff;
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

  return (
    <EventViewerBlock>
      <EventCategory />
      <EventTitle>{eventDetail.eventTitle}</EventTitle>
      <EventDate>
        {eventDetail.startEventDate} ~ {eventDetail.endEventDate}
      </EventDate>
      <img src={eventDetail.eventContent} alt={eventDetail.eventTitle} />
      <EventButtonBlock>
        <Button className="gobackBtn" onClick={handleGoback}>
          목록보기
        </Button>
        {!eventData ? (
          <EventShareButton onClick={handleShare}>
            <BtnShareImage src="../../btn_icon_share.svg" /> 공유하기
          </EventShareButton>
        ) : (
          <Button onClick={() => navigate("/")}>홈페이지로 이동</Button>
        )}
      </EventButtonBlock>
    </EventViewerBlock>
  );
};

export default EventViewerCompots;
