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

const MeetDetailActionButtons = ({ onEdit, onRemove, type }) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  return (
    <>
      <MeetActionButtonsBlock>
        <ActionButton onClick={onEdit}>{type} 수정</ActionButton>
        <ActionButton onClick={onRemoveClick}>{type} 삭제</ActionButton>
      </MeetActionButtonsBlock>
      <MeetAskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default MeetDetailActionButtons;
