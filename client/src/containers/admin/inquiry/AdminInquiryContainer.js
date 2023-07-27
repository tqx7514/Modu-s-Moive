import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdminInquiry from "../../../components/admin/inquiry/AdminInquiry";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  adminInquiryList,
  initialize,
} from "../../../modules/admin/admininquiry";

const AdminInquiryContainer = () => {
  const { inquiry, count, loading, lastPage } = useSelector(
    ({ admininquiry, loading }) => ({
      inquiry: admininquiry.inquiry,
      count: admininquiry.count,
      loading: loading["admininquiry/ADMIN_INQUIRY_LIST"],
      lastPage: admininquiry.lastPage,
    })
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(1);
  useEffect(() => {
    dispatch(adminInquiryList({ page, category }));
    return () => {
      dispatch(initialize());
    };
  }, [page, category]);

  const handleAllClick = () => {
    setCategory(1);
  };
  const handleUndoneClick = () => {
    setCategory(3);
  };
  const handleDoneClick = () => {
    setCategory(2);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePreviousPage = () => {
    setPage(page - 1);
  };
  return (
    <AdminInquiryContainerBlock>
      <AdminInquiry
        inquiry={inquiry}
        count={count}
        loading={loading}
        category={category}
        onAllClick={handleAllClick}
        onUndoneClick={handleUndoneClick}
        onDoneClick={handleDoneClick}
        lastPage={lastPage}
        currentPage={page}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </AdminInquiryContainerBlock>
  );
};
const AdminInquiryContainerBlock = styled.div`
  background-color: gray;
  height: 100vh;
`;

export default AdminInquiryContainer;
