import React from "react";
import AskModal from "../common/AskModal";

const MeetAskRemoveModal = ({
  visible,
  onConfirm,
  onCancel,
  title,
  description,
}) => {
  return (
    <AskModal
      visible={visible}
      title={title}
      description={description}
      confirmText="삭제"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default MeetAskRemoveModal;
