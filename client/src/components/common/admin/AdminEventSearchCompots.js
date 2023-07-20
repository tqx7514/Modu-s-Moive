import React, { useState } from "react";
import { searchEvent } from "../../api/event";
import styled from "styled-components";
import AdminEventItemCompots from "./AdminEventItemCompots";

const AdminEventSearchContainer = styled.div``;

const AdminEventSearchFormBlock = styled.form``;

const AdminEventSearchSelectItem = styled.select``;

const AdminEventSearchCompots = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("userId");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await searchEvent(searchQuery, searchType);
      const searchResult = response.data;
      setSearchResult(searchResult);
    } catch (error) {
      console.error("EventSearch Error", error);
    }
  };

  return (
    <AdminEventSearchContainer>
      <AdminEventSearchFormBlock onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="검색"
        />
        <AdminEventSearchSelectItem
          value={searchType}
          onChange={(e) => handleSearchTypeChange(e.target.value)}
        >
          <option value="author">작성자</option>
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="titleContent">제목 + 내용</option>
        </AdminEventSearchSelectItem>
        <button type="submit">검색</button>
      </AdminEventSearchFormBlock>

      {searchResult.map((event) => (
        <AdminEventItemCompots key={event.id} event={event} />
      ))}
    </AdminEventSearchContainer>
  );
};

export default AdminEventSearchCompots;
