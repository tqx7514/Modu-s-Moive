// import React from "react";
// import styled from "styled-components";

// const AdminEventPaginationContainer = styled.div``;
// const AdminEventPagesBlock = styled.div``;
// const AdminEventPaginationButton = styled.button``;

// const AdminEventPaginationComponent = ({
//   currentPage,
//   totalPages,
//   handlePageChange,
//   previousPage,
//   nextPage,
// }) => {
//   return (
//     <AdminEventPaginationContainer>
//       <AdminEventPaginationButton
//         disabled={currentPage === 1}
//         onClick={() => handlePageChange(previousPage)}
//       >
//         이전
//       </AdminEventPaginationButton>
//       {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//         (page) => (
//           <AdminEventPagesBlock
//             key={page}
//             onClick={() => handlePageChange(page)}
//             disabled={currentPage === page}
//           >
//             {page}
//           </AdminEventPagesBlock>
//         )
//       )}
//       <AdminEventPaginationButton
//         disabled={currentPage === totalPages}
//         onClick={() => handlePageChange(nextPage)}
//       >
//         다음
//       </AdminEventPaginationButton>
//     </AdminEventPaginationContainer>
//   );
// };

// export default AdminEventPaginationComponent;
