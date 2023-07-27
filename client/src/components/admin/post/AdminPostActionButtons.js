import styled from "styled-components";
import { useState } from "react";
import palette from "../../../lib/styles/palette";
import PostAskRemoveModal from "../../post/PostAskRemoveModal";

const AdminPostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const AdminActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const AdminPostActionButtons = ({ onRemove }) => {
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
      <AdminPostActionButtonsBlock>
        <AdminActionButton onClick={onRemoveClick}>삭제</AdminActionButton>
      </AdminPostActionButtonsBlock>
      <PostAskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default AdminPostActionButtons;
