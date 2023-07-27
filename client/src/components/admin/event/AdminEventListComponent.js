import React, { useState } from "react";
import styled from "styled-components";
import Responsive from "../../common/Responsive";
import Button from "../../common/Button";
import AdminEventListTitleComponent from "./AdminEventListTitleComponent";
import palette from "../../../lib/styles/palette";

const AdminEventItemContentBlock = styled.div``;
const AdminEventListBlock = styled(Responsive)``;

const AdminEventItemBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-right: 15px;
  h2 {
    flex: 1;
    font-size: 2rem;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
`;

const WriteEventButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
  padding-right: 80px;
`;

const WriteEventButton = styled(Button)`
  white-space: nowrap;
`;

const AdminEventCategoryBlock = styled.div``;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getDate()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};

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
  

const AdminEventListComponent = ({
  events,
  loading,
  error,
  showWriteButton,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(4);

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
    <>
      <AdminEventListBlock>
        <AdminEventCategoryBlock>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategorySelect(e.target.value)}
          >
            <option value="4">전체</option>
            <option value="영화">영화</option>
            <option value="제휴할인">제휴/할인</option>
            <option value="기타">기타</option>
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
    </>
  );
};

export default AdminEventListComponent;
