import React, { useState, useEffect } from "react";
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

const MyPageInquiryPagination = ({
  lastPage,
  pagination,
  currentPage,
  handleNextPage,
  handlePreviousPage,
}) => {
  const [page, setPage] = useState(1);
  const onNextPage = () => {
    pagination(currentPage + 1);
    handleNextPage();
  };
  const onPreviousPage = () => {
    pagination(currentPage - 1);
    handlePreviousPage();
  };
  console.log("page2", page);

  return (
    <PaginationBlock>
      <Button disabled={currentPage === 1} onClick={onPreviousPage}>
        이전
      </Button>
      <PageNumber>{currentPage}</PageNumber>
      <Button disabled={currentPage === lastPage} onClick={onNextPage}>
        다음
      </Button>
    </PaginationBlock>
  );
};

export default MyPageInquiryPagination;
