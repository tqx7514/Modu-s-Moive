import React, { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;
const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
`;

const Pagination = ({
  //   page,
  lastPage,
  pagination,
}) => {
  const [page, setPage] = useState(1);
  const onNextPage = () => {
    pagination(page + 1);
    setPage(page + 1);
  };
  const onPreviousPage = () => {
    pagination(page - 1);
    setPage(page - 1);
  };
  return (
    <PaginationBlock>
      <Button disabled={page === 1} onClick={onPreviousPage}>
        이전
      </Button>
      <PageNumber>{page}</PageNumber>
      <Button disabled={page === lastPage} onClick={onNextPage}>
        다음
      </Button>
    </PaginationBlock>
  );
};

export default Pagination;
