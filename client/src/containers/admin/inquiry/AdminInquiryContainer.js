import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import AdminInquiry from "../../../components/admin/inquiry/AdminInquiry";
import {
  adminInquiryList,
  initialize,
} from "../../../modules/admin/admininquiry";
import AdminInquiryChart from "../../../components/admin/inquiry/AdminInquiryChart";

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
  const [detail, setDetail] = useState(false);
  const [sort, setSort] = useState({ field: "createdAt", order: 1 });
  const [classify, setClassify] = useState(null);

  useEffect(() => {
    dispatch(adminInquiryList({ page, category, sort, classify }));
    return () => {
      dispatch(initialize());
    };
  }, [page, category, sort, classify]);

  const handleAllClick = () => {
    setCategory(1);
    setPage(1);
  };
  const handleUndoneClick = () => {
    setCategory(3);
    setPage(1);
  };
  const handleDoneClick = () => {
    setCategory(2);
    setPage(1);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePreviousPage = () => {
    setPage(page - 1);
  };
  const handleDetailClick = () => {
    setDetail(!detail);
  };
  const changeSort = (field) => {
    if (sort.field === field) {
      setSort({ ...sort, order: sort.order * -1 });
    } else {
      setSort({ field: field, order: 1 });
    }
  };

  const onClassifyClick = (e, num) => {
    // e.preventDefault();
    e.stopPropagation();
    if (classify === null) {
      setClassify(num);
    } else {
      setClassify(null);
    }
  };

  return (
    <AdminInquiryContainerBlock>
      <AdminBlock>
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
          detail={detail}
          handleDetailClick={handleDetailClick}
          sort={sort}
          changeSort={changeSort}
          classify={classify}
          onClassifyClick={onClassifyClick}
        />
      </AdminBlock>
      <AdminBlock2>
        <AdminInquiryChart />
      </AdminBlock2>
    </AdminInquiryContainerBlock>
  );
};
const AdminInquiryContainerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: gray; */
  height: 130vh;
`;
const AdminBlock = styled.div`
  padding-left: 10px;
  width: 60%;
`;
export const AdminBlock2 = styled.div`
  padding-left: 10px;
  width: 40%;
`;

export default AdminInquiryContainer;
