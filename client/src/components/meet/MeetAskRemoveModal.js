import React from "react";
import AskModal from "../common/AskModal";

const MeetAskRemoveModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="모임 삭제"
      description="모임을 정말 삭제하겠습니까?"
      confirmText="삭제"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default MeetAskRemoveModal;
