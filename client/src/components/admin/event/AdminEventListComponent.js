import React, { useState } from "react";
import styled from "styled-components";
import Responsive from "../../common/Responsive";
import Button from "../../common/Button";
import AdminEventListTitleComponent from "./AdminEventListTitleComponent";
import palette from "../../../lib/styles/palette";
import { Link } from "../../../../node_modules/react-router-dom/dist/index";
import { AdminBottomRightBlock } from "../main/AdminBottomRight";

const AdminEventItemContentBlock = styled.div`
  /* display: flex; */
`;
const AdminEventListBlock = styled.div`
  /* display: flex; */
`;

const AdminEventItemBlock = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-right: 15px;
  h2 {
    flex: 1;
    font-size: 1rem;
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

// const AdminEventCategoryBlock = styled.div``;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getDate()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
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
  const formattedUpdateDate = formatDate(updatedAt);

  return (
    <div>
      <AdminBottomRightBlock>
        <AdminEventItemBlock>
          <h2>{eventNum}</h2>
        </AdminEventItemBlock>
        <AdminEventItemBlock>
          <h2>{categoryId}</h2>
        </AdminEventItemBlock>
        <AdminEventItemBlock>
          <h2>{userId}</h2>
        </AdminEventItemBlock>
        <AdminEventItemBlock>
          <h2>{eventTitle}</h2>
        </AdminEventItemBlock>
        <AdminEventItemBlock>
          <h2>{startEventDate}</h2>
        </AdminEventItemBlock>
        <AdminEventItemBlock>
          <h2>{endEventDate}</h2>
        </AdminEventItemBlock>
        <AdminEventItemBlock>
          <h2>{formattedDate}</h2>
        </AdminEventItemBlock>
        <AdminEventItemBlock>
          <h2>{formattedUpdateDate}</h2>
        </AdminEventItemBlock>
        <AdminEventItemBlock>
          <h2>{view}</h2>
        </AdminEventItemBlock>
      </AdminBottomRightBlock>
    </div>
  );
};

const AdminEventListComponent = ({
  events,
  loading,
  error,
  showWriteButton,
}) => {
  // const [selectedCategory, setSelectedCategory] = useState("전체");

  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  // };

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
        {/* <AdminEventCategoryBlock>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategorySelect(e.target.value)}
          >
            <option value="전체">전체</option>
            <option value="영화">영화</option>
            <option value="제휴할인">제휴/할인</option>
            <option value="기타">기타</option>
          </select>
        </AdminEventCategoryBlock> */}

        <AdminEventListTitleComponent />
        {!loading && events && (
          <AdminEventItemBlock>
            {events &&
              events.map((event) => (
                <Link
                  key={event.eventNum}
                  to={`/admin/event/detail/${event.eventNum}`}
                >
                  <AdminEventItemComponent event={event} />
                </Link>
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
