import React, { useState } from "react";
import styled from "styled-components";

const AdminEventWriteItemBlock = styled.div``;

const AdminEventWriteBlock = styled.form``;

const AdminEventWriteComponent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [eventImg, setEventImg] = useState("");
  const [category, setCategory] = useState("");
  const [startEventDate, setStartEventDate] = useState("");
  const [endEventDate, setEndEventDate] = useState("");

  return (
    <AdminEventWriteBlock>
      <AdminEventWriteItemBlock>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="카테고리"
        />
      </AdminEventWriteItemBlock>
      <AdminEventWriteItemBlock>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
      </AdminEventWriteItemBlock>
      <AdminEventWriteItemBlock>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용"
        ></textarea>
      </AdminEventWriteItemBlock>
      <AdminEventWriteItemBlock>
        <p>
          썸네일
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setEventImg(e.target.files[0])}
          />
        </p>
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
