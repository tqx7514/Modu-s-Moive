import React from "react";
import styled from "styled-components";

const AdminEventPaginationContainer = styled.div``;

const AdminEventPaginationBtn = styled.button``;

const AdminEventBoardPagination = ({
  currentPage,
  totalPages,
  handlePageChange,
  previousPage,
  nextPage,
}) => {
  return (
    <AdminEventPaginationContainer>
      <AdminEventPaginationBtn
        disabled={currentPage === 1}
        onClick={() => handlePageChange(previousPage)}
      >
        이전
      </AdminEventPaginationBtn>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <AdminEventPaginationBtn
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={currentPage === page}
          >
            {page}
          </AdminEventPaginationBtn>
        )
      )}
      <AdminEventPaginationBtn
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(nextPage)}
      >
        다음
      </AdminEventPaginationBtn>
    </AdminEventPaginationContainer>
  );
};

export default AdminEventBoardPagination;
