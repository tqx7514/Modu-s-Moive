import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminInquiryDetail from "../../../components/admin/inquiry/AdminInquiryDetail";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import {
  adminInquiryList,
  answerUpdate,
} from "../../../modules/admin/admininquiry";

const AdminInquiryDetailContainer = ({ num, handleDetailClick }) => {
  const { inquiry } = useSelector(({ admininquiry }) => ({
    inquiry: admininquiry.inquiry,
  }));
  const dispatch = useDispatch();
  const detail = inquiry.filter((m) => m.inquiryNum === num);
  const [answer, setAnswer] = useState(detail[0].answer);
  const [isEdit, setIsEdit] = useState(false);
  const [sort, setSort] = useState({ field: "createdAt", order: 1 });
  const [classify, setClassify] = useState(null);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8080,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  //   console.log("ssssssssssssssss", answer);
  const onChangeField = useCallback((e) => {
    console.log("dddd", e.target.value);
    const newAnswer = [e.target.value];
    console.log("newAnswer", newAnswer);
    setAnswer(newAnswer[0]);
  });
  const handleValidation = () => {
    if (answer.length < 1) {
      toast.error("답변이 비어있습니다", toastOptions);
      return false;
    }
    return true;
  };

  const onAnswerClick = () => {
    if (handleValidation()) {
      Swal.fire({
        text: "이대로 답변을 작성하시겠습니까?",
        showCancelButton: true,
        confirmButtonText: "네",
        cancelButtonText: "아니오",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          dispatch(answerUpdate({ inquiryNum: detail[0].inquiryNum, answer }));
          setTimeout(() => {
            dispatch(
              adminInquiryList({ page: 1, category: 1, sort, classify })
            );
            handleDetailClick();
          }, 100);
        },
      }).then((res) => {
        if (res.isConfirmed) {
          Swal.fire({
            icon: "success",
            text: "답변 작성 완료되었습니다",
          });
        }
      });
    }
  };

  const onEditClick = () => {
    if (!isEdit) {
      Swal.fire({
        text: "답변을 수정하시겠습니까?",
        showCancelButton: true,
        confirmButtonText: "네",
        cancelButtonText: "아니오",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          setIsEdit(!isEdit);
        },
      });
    }
  };

  return (
    <div>
      <AdminInquiryDetail
        detail={detail[0]}
        handleDetailClick={handleDetailClick}
        answer={answer}
        onChangeField={onChangeField}
        onAnswerClick={onAnswerClick}
        isEdit={isEdit}
        onEditClick={onEditClick}
      />
      <ToastContainer />
    </div>
  );
};

export default AdminInquiryDetailContainer;
