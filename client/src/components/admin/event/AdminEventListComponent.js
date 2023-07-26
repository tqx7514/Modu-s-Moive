import React, { useState } from "react";
import styled from "styled-components";
import Responsive from "../../common/Responsive";
import Button from "../../common/Button";
import { Link, useNavigate } from "react-router-dom";
import AdminEventListTitleComponent from "./AdminEventListTitleComponent";
import AdminEventItemComponent from "./AdminEventItemComponent";

const AdminEventListBlock = styled(Responsive)``;

const AdminEventItemBlock = styled.div``;

const WriteEventButtonWrapper = styled.div``;

const WriteEventButton = styled(Button)``;

const AdminEventCategoryBlock = styled.div``;

const AdminEventListComponent = ({
  events,
  loading,
  error,
  showWriteButton,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(4);
  console.log("eeeeeeeeeeeeeeeeeeeee", showWriteButton);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
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
          <option value="4">전체</option>
          <option value="1">영화</option>
          <option value="2">제휴/할인</option>
          <option value="3">기타</option>
        </select>
      </AdminEventCategoryBlock>

      <AdminEventListTitleComponent />
      {!loading && events && (
        <AdminEventItemBlock>
          {events &&
            events.map((event) => (
              <AdminEventItemComponent key={event.eventNum} event={event} />
            ))}
        </AdminEventItemBlock>
      )}
      {/* <AdminEventSearchBlock>
            <AdminEventSearchComponent onSearch={handleSearch} />
        </AdminEventSearchBlock> */}

      <WriteEventButtonWrapper>
        {showWriteButton && (
          <WriteEventButton cyan="true" to="/admin/event/write">
            글쓰기
          </WriteEventButton>
        )}
      </WriteEventButtonWrapper>
    </AdminEventListBlock>
  );
};

export default AdminEventListComponent;
