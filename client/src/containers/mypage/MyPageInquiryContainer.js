import React, { useEffect, useState, useCallback } from "react";
import MyPageInquiry from "../../components/mypage/MyPageInquiry";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initialize,
  inquiryList,
  inquiryUnload,
  inquiryWrite,
} from "../../modules/mypage";
import MyPageInquiryWrite from "../../components/mypage/MyPageInquiryWrite";
import Swal from "sweetalert2";

const MyPageInquiryContainer = () => {
  const { user, inquiry, loading, lastPage, write } = useSelector(
    ({ user, mypage, loading }) => ({
      user: user.user,
      inquiry: mypage.inquiry,
      loading: loading["mypage/INQUIRY_LIST"],
      lastPage: mypage.lastPage,
      write: mypage.write,
    })
  );
  const dispatch = useDispatch();
  const id = user.id;
  const page = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [isWrite, setIsWrite] = useState(false);
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const onClick = () => {
    setIsWrite(!isWrite);
  };
  const onPublish = () => {
    const userId = user && user.id;
    const { classify, title, body, answer } = write;
    Swal.fire({
      text: "이대로 문의작성 하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "네 작성합니다",
      cancelButtonText: "아니오",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        dispatch(inquiryWrite({ userId, classify, title, body, answer }));
        dispatch(initialize());
        setTimeout(() => {
          dispatch(inquiryList({ id, page }));
          setIsWrite(!isWrite);
        }, 100);
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "문의 작성 성공",
        });
      }
    });
  };
  useEffect(() => {
    dispatch(inquiryList({ id, page: currentPage }));
    return () => {
      dispatch(inquiryUnload());
      // 클린업함수!!
    };
  }, [id, currentPage]);

  // const pagination = async (page) => {
  //   try {
  //     console.log("pages============", page);
  //     dispatch(inquiryList({ id, page }));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );
  return (
    <>
      {isWrite ? (
        <MyPageInquiryWrite
          changeField={onChangeField}
          write={write}
          onCancelClick={onClick}
          onPublish={onPublish}
        />
      ) : (
        <MyPageInquiry
          myInquiry={inquiry}
          user={user}
          loading={loading}
          lastPage={lastPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          currentPage={currentPage}
          onWriteClick={onClick}
        />
      )}
    </>
  );
};

export default MyPageInquiryContainer;
