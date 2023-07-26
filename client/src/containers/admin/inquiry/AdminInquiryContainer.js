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
  const { inquiry, count } = useSelector(({ admininquiry }) => ({
    inquiry: admininquiry.inquiry,
    count: admininquiry.count,
  }));
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(adminInquiryList(page));
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return (
    <AdminInquiryContainerBlock>
      <AdminInquiry inquiry={inquiry} count={count} />
    </AdminInquiryContainerBlock>
  );
};
const AdminInquiryContainerBlock = styled.div`
  background-color: gray;
  height: 100vh;
`;

export default AdminInquiryContainer;
