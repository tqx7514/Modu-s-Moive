import React from "react";
import styled from "styled-components";

const AdminEventItemContainer = styled.div``;

const AdminEventItem = styled.div``;

const AdminEventItemBtn = styled.div``;

const AdminEventItemCompots = ({
  event,
  handleEventDelete,
  handleEventEdit,
}) => {
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

  return (
    <AdminEventItemContainer>
      <AdminEventItem>번호: {eventNum}</AdminEventItem>
      <AdminEventItem>카테고리: {categoryId}</AdminEventItem>
      <AdminEventItem>작성자: {userId}</AdminEventItem>
      <AdminEventItem>제목: {eventTitle}</AdminEventItem>
      <AdminEventItem>이벤트 시작일: {startEventDate}</AdminEventItem>
      <AdminEventItem>이벤트 종료일: {endEventDate}</AdminEventItem>
      <AdminEventItem>등록일: {createdAt}</AdminEventItem>
      <AdminEventItem>수정일: {updatedAt}</AdminEventItem>
      <AdminEventItem>조회수: {view}</AdminEventItem>
      <AdminEventItemBtn onClick={() => handleEventEdit(eventNum)}>
        수정
      </AdminEventItemBtn>
      <AdminEventItemBtn onClick={() => handleEventDelete(eventNum)}>
        삭제
      </AdminEventItemBtn>
    </AdminEventItemContainer>
  );
};

export default AdminEventItemCompots;
