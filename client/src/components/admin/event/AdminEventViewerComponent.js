// import styled from "styled-components";
// import Responsive from "../../common/Responsive";

// const AdminEventViewerBlock = styled(Responsive)``;

// const AdminEventViewerHead = styled.div``;

// const AdminEventViewerinfoWrapper = styled.div``;

// const AdminEventInfoItem = styled.div``;

// const AdminEventViewerContent = styled.div``;

// const AdminEventViewerComponent = ({
//   event,
//   error,
//   loading,
//   actionButtons,
// }) => {
//   if (error) {
//     if (error.Responsive && error.response.status === 404) {
//       return (
//         <AdminEventViewerBlock>
//           존재하지 않는 포스트입니다.
//         </AdminEventViewerBlock>
//       );
//     }
//     return <AdminEventViewerBlock>오류 발생</AdminEventViewerBlock>;
//   }
//   if (loading || !event) {
//     return null;
//   }

//   const {
//     eventTitle,
//     eventContent,
//     startEventDate,
//     endEventDate,
//     createdAt,
//     updatedAt,
//     view,
//   } = event;

//   return (
//     <>
//       <AdminEventViewerBlock>
//         <AdminEventViewerHead>
//           <h1>{eventTitle}</h1>
//           <AdminEventViewerinfoWrapper>
//             <AdminEventInfoItem>조회수: {view}</AdminEventInfoItem>
//             <AdminEventInfoItem>
//               이벤트 시작일: {startEventDate}
//             </AdminEventInfoItem>
//             <AdminEventInfoItem>
//               이벤트 종료일: {endEventDate}
//             </AdminEventInfoItem>
//             <AdminEventInfoItem>
//               등록일: {createdAt}
//             </AdminEventInfoItem>
//             <AdminEventInfoItem>
//               수정일: {updatedAt}
//             </AdminEventInfoItem>
//           </AdminEventViewerinfoWrapper>
//           {actionButtons}
//           <AdminEventViewerContent
//             dangerouslySetInnerHTML={{ __html: eventContent }}
//           />
//         </AdminEventViewerHead>
//       </AdminEventViewerBlock>
//     </>
//   );
// };

// export default AdminEventViewerComponent;
