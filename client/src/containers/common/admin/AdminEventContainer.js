import React, { useState, useEffect } from "react";
import { eventalllist } from "../../../lib/api/event";
import AdminEventBoardList from "../../../components/common/admin/AdminEventBoardListCompots";
import styled from "styled-components";

const AdminEventContainerBlock = styled.div``;

const AdminEventContainer = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await event();
        setEvents(response.data);
      } catch (error) {
        console.error("AdminEventContainer Error", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <AdminEventContainerBlock>
      <AdminEventBoardList events={events} />
    </AdminEventContainerBlock>
  );
};

export default AdminEventContainer;
