import React, { useState } from "react";
import styled from "styled-components";
import Responsive from "../../common/Responsive";
import Button from "../../common/Button";
import { Link, useNavigate } from "react-router-dom";
import AdminEventSearchComponent from "./AdminEventSearchComponent";
import AdminEventListTitleComponent from "./AdminEventListTitleComponent";
import AdminEventItemComponent from "./AdminEventItemComponent";

const AdminEventListBlock = styled(Responsive)``;

const AdminEventItemBlock = styled.div``;

const WriteEventButtonWrapper = styled.div``;

const WriteEventButton = styled(Button)``;

const AdminEventSearchBlock = styled.div``;

const AdminEventCategoryBlock = styled.div``;

const AdminEventListComponent = ({
  events,
  loading,
  error,
  showWriteButton,
}) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const handleCategorySelect = (category) => {
    k;
    setSelectedCategory(category);

    if (category === "전체") {
      setFilteredEvents(events);
    } else {
      const filteredEvents = events.filter(
        (event) => event.categoryId === category
      );
      setFilteredEvents(filteredEvents);
    }
  };

  // const handleSearch = async (searchQuery, searchType) => {
  //     try {
  //         const response = await searchEvent(searchQuery, searchType);
  //         const searchResult = response.data;
  //         setFilteredEvents(searchResult);
  //     } catch (error) {
  //         console.error("이벤트검색 에러", error);
  //     }
  // };

  return (
    <AdminEventListBlock>
      <AdminEventCategoryBlock>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategorySelect(e.target.value)}
        >
          <option value="전체">전체</option>
          <option value="영화">영화</option>
          <option value="제휴/할인">제휴/할인</option>
          <option value="기타">기타</option>
        </select>
      </AdminEventCategoryBlock>

      <AdminEventListTitleComponent events={filteredEvents} />
      {!loading && events && (
        <AdminEventItemBlock>
          {filteredEvents.map((event) => (
            <AdminEventItemComponent key={event.eventNum} event={event} />
          ))}
        </AdminEventItemBlock>
      )}
      {/* <AdminEventSearchBlock>
            <AdminEventSearchComponent onSearch={handleSearch} />
        </AdminEventSearchBlock> */}

      <WriteEventButtonWrapper>
        {showWriteButton && (
          <WriteEventButton cyan to="/write">
            글쓰기
          </WriteEventButton>
        )}
      </WriteEventButtonWrapper>
    </AdminEventListBlock>
  );
};

export default AdminEventListComponent;
