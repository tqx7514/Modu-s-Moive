// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import AdminEventSearchComponent from "../../../components/admin/event/AdminEventSearchComponent";
// import { searchEvent } from "../../../modules/admin/admineventlist";

// const AdminEventSearchContainer = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchType, setSearchType] = useState("userId");
//   const dispatch = useDispatch();
//   const searchResult = useSelector((state) => state.adminevent.searchResult);

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchTypeChange = (type) => {
//     setSearchType(type);
//   };

//   const handleSearchSubmit = async (e) => {
//     e.preventDefault();

//     dispatch(
//       searchEvent({ name: searchQuery, page: 1, searchEventResult: searchType })
//     );
//   };

//   return (
//     <div>
//       <AdminEventSearchComponent
//         searchQuery={searchQuery}
//         searchType={searchType}
//         onSearchChange={handleSearchChange}
//         onSearchTypeChange={handleSearchTypeChange}
//         onSearchSubmit={handleSearchSubmit}
//         searchResult={searchResult}
//       />
//     </div>
//   );
// };

// export default AdminEventSearchContainer;
