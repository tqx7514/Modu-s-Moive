import React from "react";
import styled from "styled-components";
import qs from "qs";
import Button from "../common/Button";

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  margin-top: 2rem;
`;
const PageNumber = styled.div``;

const buildLink = ({ userId, tag, page }) => {
  const query = qs.stringify({ userId, tag, page });
  return `/meet?${query}`;
};

const Pagination = ({ page, lastPage, userId, tag }) => {
  return (
    <PaginationBlock>
      <Button
        disabled={page === 1}
        to={page === 1 ? undefined : buildLink({ userId, tag, page: page - 1 })}
      >
        이전
      </Button>
      <PageNumber>{page}</PageNumber>
      <Button
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildLink({ userId, tag, page: page + 1 })
        }
      >
        다음
      </Button>
    </PaginationBlock>
  );
};

export default Pagination;
