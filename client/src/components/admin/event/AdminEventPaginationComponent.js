import React from "react";
import styled from "styled-components";
import qs from "qs";
import Button from "../../common/Button";

const EventPaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const EventPageBlock = styled.div`
  display: block;
  font-size: 2rem;
`;

const buildLink = ({ page }) => {
  const query = qs.stringify({ page });
  return `/admin/event?${query}`;
};

const AdminEventPaginationComponent = ({ page, lastPage, userId }) => {
  const totalEventPages = lastPage;
  const showEventPages = 10;

  const getDisplayedEventPages = () => {
    if (totalEventPages <= showEventPages) {
      return Array.from({ length: totalEventPages }, (_, index) => index + 1);
    }
    const halfShowEventPages = Math.floor(showEventPages / 2);
    let startEventPage = page - halfShowEventPages;
    let endEventPage = page + halfShowEventPages;

    if (startEventPage < 1) {
      startEventPage = 1;
      endEventPage = showEventPages;
    }
    if (endEventPage > totalEventPages) {
      endEventPage = totalEventPages;
      startEventPage = totalEventPages - showEventPages + 1;
    }
    return Array.from(
      { length: endEventPage - startEventPage + 1 },
      (_, index) => startEventPage + index
    );
  };
  const displayedEventPages = getDisplayedEventPages();

  return (
    <EventPaginationBlock>
      <Button
        disabled={page === 1}
        to={page === 1 ? undefined : buildLink({ userId, page: page - 1 })}
      >
        이전
      </Button>
      {displayedEventPages.map((eventPageNum) => (
        <EventPageBlock key={eventPageNum}>
          <Button
            to={buildLink({ userId, page: eventPageNum })}
            disabled={page === eventPageNum}
          >
            {eventPageNum}
          </Button>
        </EventPageBlock>
      ))}
      <Button
        disabled={page === lastPage}
        to={
          page === lastPage ? undefined : buildLink({ userId, page: page + 1 })
        }
      >
        다음
      </Button>
    </EventPaginationBlock>
  );
};

export default AdminEventPaginationComponent;
