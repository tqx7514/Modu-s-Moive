import { useState } from "react";
import styled from "styled-components";
import AdminEventAskRemoveModalComponent from "./AdminEventAskRemoveModalComponent";

const EventActionButtonBlock = styled.div``;

const EventActionButton = styled.button``;

const AdminEventActionButtonComponent = ({ onEdit, onRemove }) => {
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
    <div>
      <EventActionButtonBlock>
        <EventActionButton onClick={onEdit}>수정</EventActionButton>
        <EventActionButton onClick={onRemoveClick}>삭제</EventActionButton>
      </EventActionButtonBlock>
      <AdminEventAskRemoveModalComponent
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </div>
  );
};

export default AdminEventActionButtonComponent;
