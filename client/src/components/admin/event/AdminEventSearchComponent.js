// import React, { useState } from "react";
// import { searchEvent } from "../../../lib/api/admin/adminevent";
// import styled from "styled-components";
// import AdminEventItemComponent from "./AdminEventItemComponent";
// import Button from "../../common/Button";

// const AdminEventSearchBlock = styled.div``;

// const AdminEventSearchBox = styled.form``;

// const AdminEventSearchSelectItem = styled.select``;

// const AdminEventSearchButton = styled(Button)``;

// const AdminEventSearchComponent = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchType, setSearchType] = useState("userId");
//   const [searchResult, setSearchResult] = useState([]);

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchTypeChange = (type) => {
//     setSearchType(type);
//   };

//   const handleSearchSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await searchEvent(searchQuery, searchType);
//       const searchResult = response.data;
//       setSearchResult(searchResult);
//     } catch (error) {
//       console.error("EventSearch Error", error);
//     }
//   };

//   return (
//     <AdminEventSearchBlock>
//       <AdminEventSearchBox onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           placeholder="검색"
//         />
//         <AdminEventSearchSelectItem
//           value={searchType}
//           onChange={(e) => handleSearchTypeChange(e.target.value)}
//         >
//           <option value="author">작성자</option>
//           <option value="title">제목</option>
//           <option value="content">내용</option>
//           <option value="titleContent">제목 + 내용</option>
//         </AdminEventSearchSelectItem>
//         <AdminEventSearchButton type="submit">검색</AdminEventSearchButton>
//       </AdminEventSearchBox>

//       {searchResult.map((event) => (
//         <AdminEventItemComponent key={event.eventNum} event={event} />
//       ))}
//     </AdminEventSearchBlock>
//   );
// };

// export default AdminEventSearchComponent;
