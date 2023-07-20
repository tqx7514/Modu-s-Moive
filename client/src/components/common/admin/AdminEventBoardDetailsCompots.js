import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getEventDetails } from "../../../lib/api/event";

const AdminEventBoardDetailsContainer = styled.div``;

const AdminEventBoardDetailsCompots = ({ eventId }) => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await getEventDetails(eventId);
        setEvent(response.data);
      } catch (error) {
        console.error("AdminEventBoardDetailsCompots Error", error);
      }
    };
    fetchEventDetails();
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <AdminEventBoardDetailsContainer>
      <h2>게시물 상세 정보</h2>
      <p>{event.title}</p>
      <p>{event.content}</p>
      <Link to={`/event/${eventId}`}>자세히 보기</Link>
    </AdminEventBoardDetailsContainer>
  );
};

export default AdminEventBoardDetailsCompots;
