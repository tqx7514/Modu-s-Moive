import React from "react";
import styled from "styled-components";

const AdminEventItemContentBlock = styled.div``;

const AdminEventItemBlock = styled.div``;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getDate()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

const AdminEventItemComponent = ({ event }) => {
  const {
    eventNum,
    categoryId,
    userId,
    eventTitle,
    startEventDate,
    endEventDate,
    createdAt,
    updatedAt,
    view,
  } = event;
  const formattedDate = formatDate(createdAt);

  return (
    <AdminEventItemContentBlock>
      <AdminEventItemBlock>{eventNum}</AdminEventItemBlock>
      <AdminEventItemBlock>{categoryId}</AdminEventItemBlock>
      <AdminEventItemBlock>{userId}</AdminEventItemBlock>
      <AdminEventItemBlock>{eventTitle}</AdminEventItemBlock>
      <AdminEventItemBlock>{startEventDate}</AdminEventItemBlock>
      <AdminEventItemBlock>{endEventDate}</AdminEventItemBlock>
      <AdminEventItemBlock>{formattedDate}</AdminEventItemBlock>
      <AdminEventItemBlock>{updatedAt}</AdminEventItemBlock>
      <AdminEventItemBlock>{view}</AdminEventItemBlock>
    </AdminEventItemContentBlock>
  );
};

export default AdminEventItemComponent;
