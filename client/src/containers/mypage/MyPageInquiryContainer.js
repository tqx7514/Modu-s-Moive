import React, { useEffect, useState } from "react";
import MyPageInquiry from "../../components/mypage/MyPageInquiry";
import { useDispatch, useSelector } from "react-redux";
import { inquiryList } from "../../modules/mypage";

const MyPageInquiryContainer = () => {
  const { user, inquiry, loading, lastPage } = useSelector(
    ({ user, mypage, loading }) => ({
      user: user.user,
      inquiry: mypage.inquiry,
      loading: loading["mypage/INQUIRY_LIST"],
      lastPage: mypage.lastPage,
    })
  );
  const [currentPage, setCurrentPage] = useState(1);
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const dispatch = useDispatch();
  const id = user.id;
  const page = 1;
  useEffect(() => {
    dispatch(inquiryList({ id, page }));
  }, [dispatch]);

  const pagination = async (page) => {
    try {
      console.log("pages============", page);
      dispatch(inquiryList({ id, page }));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <MyPageInquiry
        myInquiry={inquiry}
        user={user}
        loading={loading}
        pagination={pagination}
        lastPage={lastPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default MyPageInquiryContainer;
