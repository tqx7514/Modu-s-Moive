import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import {
//   eventlist,
//   eventmovielist,
//   eventotherlist,
//   eventpromotelist,
//   eventview,
// } from "../../lib/api/event";
import Button from "../common/Button";
import EventCategory from "./EventCategory";
import { eventPost } from "../../modules/eventpost";
import { useDispatch } from "react-redux";

const EventViewerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventTitle = styled.h2`
  display: flex;
  justify-content: center;
`;

const EventDate = styled.p`
  display: flex;
  justify-content: center;
`;

const EventCount = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const EventTopBlock = styled.div`
  width: 980px;
`;

const EventItemBlock = styled.div`
  display: block;
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
  background: #ffffff;
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
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        // let response = null;
        // if (eventNum.startsWith("event")) {
        //   response = await eventlist(eventNum);
        // } else if (eventNum.startsWith("movie")) {
        //   response = await eventmovielist(eventNum);
        // } else if (eventNum.startsWith("promote")) {
        //   response = await eventpromotelist(eventNum);
        // } else if (eventNum.startsWith("other")) {
        //   response = await eventotherlist(eventNum);
        // }
        // if (response && response.data) {
        //   setEventData(response.data);
        // } else {
        //   setEventData(null);
        // }
        dispatch(eventPost(eventNum))
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
    return null;
  }

  return (
    <EventViewerBlock>
      <EventCategory />
      <EventTopBlock>
        <EventTitle>{eventDetail.eventTitle}</EventTitle>
        <EventDate>
          {eventDetail.startEventDate} ~ {eventDetail.endEventDate}
        </EventDate>
        <EventCount>
          {eventDetail.view !== null && (
            <p>조회수: {eventDetail.view !== null ? eventDetail.view : 0}</p>
          )}
        </EventCount>
      </EventTopBlock>
      <EventItemBlock>
        <img src={eventDetail.eventContent} alt={eventDetail.eventTitle} />
      </EventItemBlock>
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
