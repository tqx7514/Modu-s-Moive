import styled from "styled-components";
import Button from "../common/Button";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const WriteActionButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 40px;
  min-width: 9.375rem;
  color: #fff;
  background-color: #333;

  & + & {
    margin-left: 0.5rem;
  }
`;
const StyledButton2 = styled(Button)`
  height: 40px;
  min-width: 9.375rem;
  color: #fff;
  background-color: red;

  &:hover {
    background-color: crimson;
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onCancel, onPublish, isEdit, title, body }) => {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8080,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleValidation = () => {
    if (title.length < 1) {
      toast.error("모임명을 입력해주세요", toastOptions);
      return false;
    } else if (body.length < 1) {
      toast.error("모임소개글을 입력해주세요", toastOptions);
      return false;
    }
    return true;
  };

  const onPublishClick = () => {
    if (handleValidation()) {
      Swal.fire({
        title: "모임 만들기",
        text: "이대로 모임을 만들겠습니까?",
        showCancelButton: true,
        confirmButtonText: "확인",
        cancelButtonText: "취소",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          onPublish();
        },
      }).then((res) => {
        if (res.isConfirmed) {
          Swal.fire({
            icon: "success",
            text: "모임 생성완료",
          });
        }
      });
    }
  };

  const onCancelClick = () => {
    Swal.fire({
      text: "모임생성을 취소하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "네. 취소합니다",
      cancelButtonText: "아니오. 머무릅니다",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        onCancel();
      },
    });
  };
  return (
    <WriteActionButtonsBlock>
      <StyledButton onClick={onCancelClick}>취소</StyledButton>
      <StyledButton2 onClick={onPublishClick}>
        모임 {isEdit ? "수정" : "등록"}
      </StyledButton2>
      <ToastContainer />
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
