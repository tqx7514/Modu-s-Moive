// import React from "react";
// import styled from "styled-components";
// import AdminEventItemComponent from "./AdminEventItemComponent";
// import Button from "../../common/Button";

// const AdminEventSearchBlock = styled.div``;

// const AdminEventSearchBox = styled.form``;

// const AdminEventSearchSelectItem = styled.select``;

// const AdminEventSearchButton = styled(Button)``;

// const AdminEventSearchComponent = ({
//   searchQuery,
//   searchType,
//   onSearchChange,
//   onSearchTypeChange,
//   onSearchSubmit,
//   searchResult,
// }) => {
//   return (
//     <AdminEventSearchBlock>
//       <AdminEventSearchBox onSubmit={onSearchSubmit}>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={onSearchChange}
//           placeholder="검색"
//         />
//         <AdminEventSearchSelectItem
//           value={searchType}
//           onChange={(e) => onSearchTypeChange(e.target.value)}
//         >
//           <option value="userId">작성자</option>
//           <option value="eventTitle">제목</option>
//           <option value="eventContent">내용</option>
//           <option value="titleContent">제목 + 내용</option>
//         </AdminEventSearchSelectItem>
//         <AdminEventSearchButton type="submit">검색</AdminEventSearchButton>
//       </AdminEventSearchBox>

//       {searchResult.length > 0 &&
//         searchResult.map((event) => (
//           <AdminEventItemComponent key={event.eventNum} event={event} />
//         ))}
//     </AdminEventSearchBlock>
//   );
// };

// export default AdminEventSearchComponent;
