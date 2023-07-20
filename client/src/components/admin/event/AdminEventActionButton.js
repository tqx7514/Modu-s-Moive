// import { useState } from "react";
// import styled from "styled-components";
// import AdminEventAskRemoveModal from "./AdminEventAskRemoveModal";


// const EventActionButtonBlock = styled.div`
// `;

// const EventActionButton = styled.button`
// `;

// const AdminEventActionButton = ({ onEdit, onRemove }) => {
//     const [modal, setModal] = useState(false);
//     const onRemoveClick = () => {
//         setModal(true);
//     };
//     const onCancel = () => {
//         setModal(false);
//     };
//     const onConfirm = () => {
//         setModal(false);
//         onRemove();
//     };

//     return (
//         <div>
//             <EventActionButtonBlock>
//                 <EventActionButton onClick={onEdit}>수정</EventActionButton>
//                 <EventActionButton onClick={onRemove}>삭제</EventActionButton>
//             </EventActionButtonBlock>
//             <AdminEventAskRemoveModal
//             visible={modal}
//             onConfirm={onConfirm}
//             onCancel={onCancel}
//             />
//         </div>
//     );
// };

// export default AdminEventActionButton;