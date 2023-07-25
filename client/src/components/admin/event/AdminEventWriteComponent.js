import React, { useState } from "react";
import styled from "styled-components";

const AdminEventWriteItemBlock = styled.div``;

const AdminEventWriteBlock = styled.form``;

const AdminEventWriteComponent = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventContent, setEventContent] = useState("");
  const [eventImg, setEventImg] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [startEventDate, setStartEventDate] = useState("");
  const [endEventDate, setEndEventDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      eventTitle,
      eventContent,
      eventImg,
      categoryId,
      startEventDate,
      endEventDate,
    };

    console.log("AdminEventWriteComponent:", eventData);
  };

  return (
    <AdminEventWriteBlock onSubmit={onSubmit}>
      <AdminEventWriteItemBlock>
        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
          <option value={""}>카테고리 선택</option>
          <option value={"영화"}>영화</option>
          <option value={"제휴할인"}>제휴/할인</option>
          <option value={"기타"}>기타</option>
        </select>
      </AdminEventWriteItemBlock>
      <AdminEventWriteItemBlock>
        <input
          type="text"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          placeholder="제목"
        />
      </AdminEventWriteItemBlock>
      <AdminEventWriteItemBlock>
        <textarea
          value={eventContent}
          onChange={(e) => setEventContent(e.target.value)}
          placeholder="내용 이미지 주소 입력"
        ></textarea>
      </AdminEventWriteItemBlock>
      <AdminEventWriteItemBlock>
        <input
          type="text"
          value={eventImg}
          onChange={(e) => setEventImg(e.target.value)}
          placeholder="썸네일 이미지 주소 입력"
        />
      </AdminEventWriteItemBlock>
      <AdminEventWriteItemBlock>
        <input
          type="date"
          value={startEventDate}
          onChange={(e) => setStartEventDate(e.target.value)}
          placeholder="이벤트 시작일"
        />
      </AdminEventWriteItemBlock>
      <AdminEventWriteItemBlock>
        <input
          type="date"
          value={endEventDate}
          onChange={(e) => setEndEventDate(e.target.value)}
          placeholder="이벤트 종료일"
        />
      </AdminEventWriteItemBlock>
    </AdminEventWriteBlock>
  );
};

export default AdminEventWriteComponent;
