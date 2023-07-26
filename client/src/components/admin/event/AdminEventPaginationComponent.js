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

const EventPageNumber = styled.div``;

const buildLink = ({ page }) => {
  const query = qs.stringify({ page });
  return `/admin/event?${query}`;
};

const AdminEventPaginationComponent = ({ page, lastPage, userId }) => {
  return (
    <EventPaginationBlock>
      <Button
        disabled={page === 1}
        to={page === 1 ? undefined : buildLink({ userId, page: page - 1 })}
      >
        이전
      </Button>
      <EventPageNumber>{page}</EventPageNumber>
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
