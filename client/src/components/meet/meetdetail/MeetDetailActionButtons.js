import { styled } from "styled-components";
import palette from "../../../lib/styles/palette";
import { useState } from "react";
import MeetAskRemoveModal from "../MeetAskRemoveModal";

const MeetActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  /* margin-bottom: 2rem; */
  /* margin-top: -1.5rem; */
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: none;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    /* background: red; */
    color: black;
    font-weight: 1000;
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const MeetDetailActionButtons = ({
  onEdit,
  onRemove,
  onKick,
  onMandate,
  meetuserId,
  meetuserNum,
  type,
  num,
  num2,
  meetBoard,
  comments,
  isAdmin,
}) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    if (num && num2) {
      onRemove({ meetcommentNum: num, meetboardNum: num2 });
    } else {
      onRemove();
    }
  };
  const onMandateClick = () => {
    onMandate(meetuserId);
  };
  const onKickClick = () => {
    console.log("온킥큭릭", meetuserNum);
    onKick(meetuserNum);
  };
  return (
    <>
      <MeetActionButtonsBlock>
        {onEdit && !isAdmin && (
          <ActionButton
            onClick={onEdit}
            data-body={meetBoard && meetBoard.body}
            data-userid={meetBoard && meetBoard.user_Id}
            data-meetboardnum={meetBoard && meetBoard.meetboardNum}
            data-commentbody={comments && comments.body}
            data-meetcommentnum={comments && comments.meetcommentNum}
          >
            {type} 수정
          </ActionButton>
        )}
        {onRemove && (
          <ActionButton onClick={onRemoveClick}>{type} 삭제</ActionButton>
        )}
        {onKick && (
          <ActionButton onClick={onKickClick}>{type} 강퇴</ActionButton>
        )}
        {onMandate && (
          <ActionButton onClick={onMandateClick}>매니저 위임</ActionButton>
        )}
      </MeetActionButtonsBlock>
      <MeetAskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        title={`${type} 삭제`}
        description={`${type}을(를) 정말 삭제하시겠습니까?`}
      />
    </>
  );
};

export default MeetDetailActionButtons;
