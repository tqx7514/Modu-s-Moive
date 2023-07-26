import styled from "styled-components";
import Button from "../../common/Button";

const AdminEventWriteButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const AdminEventButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const AdminEventWriteButtonComponent = ({ onCancel, onPublish, isEdit }) => {
  return (
    <AdminEventWriteButtonBlock>
      <AdminEventButton cyan="true" onClick={onPublish}>
        이벤트 {isEdit ? "수정" : "등록"}
      </AdminEventButton>
      <AdminEventButton onClick={onCancel}>취소</AdminEventButton>
    </AdminEventWriteButtonBlock>
  );
};

export default AdminEventWriteButtonComponent;
