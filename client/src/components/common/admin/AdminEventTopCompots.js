// import React from "react";

// const AdminEventTopCompots = ({ categories, selectedCategory, onSelectCategory, onSortChange }) => {
//   return (
//     <div>
//       <h2>이벤트</h2>
//       <ul>
//         {categories.map((category) => (
//           <li
//           key={category.id}
//           className={selectedCategory === category.id ? "active" :""}
//           onClick={() => onSelectCategory(category.id)}
//           >
//             {category.name}
//           </li>
//         ))}
//       </ul>
//       <div>
//         <label htmlFor="sort">정렬 :</label>
//         <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
//           <option value="views_desc">조회수 높은순</option>
//           <option value="views_asc">조회수 낮은순</option>
//           <option value="date_desc">최근 게시물순</option>
//           <option value="date_asc">오래된 게시물순</option>
//           <option value="start_date_asc">이벤트 시작일 빠른순</option>
//           <option value="start_date_desc">이벤트 시작일 느린순</option>
//           <option value="end_date_asc">이벤트 끝날일 빠른순</option>
//           <option value="end_date_desc">이벤트 끝날일 느린순</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default AdminEventTopCompots;