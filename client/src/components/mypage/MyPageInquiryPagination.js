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
  currentPage,
  handleNextPage,
  handlePreviousPage,
}) => {
  const onNextPage = () => {
    handleNextPage();
  };
  const onPreviousPage = () => {
    handlePreviousPage();
  };

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
