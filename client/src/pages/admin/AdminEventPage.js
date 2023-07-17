// import React from "react";
// import AdminEventTopCompots from "../../components/common/admin/AdminEventTopCompots";
// import AdminEventMenuCompots from "../../components/common/admin/AdminEventMenuCompots";
// import AdminEventBoardCompots from "../../components/common/admin/AdminEventBoardCompots";
// import styled from "styled-components";

// const AdminEventPageContainer = styled.div` 

// `;


// const AdminEventPage = () => {
//     const categories = [
//         { id: 1, name: "영화" },
//         { id: 2, name: "제휴/할인" },
//         { id: 3, name: "기타" },
//     ];
//     const [selectedCategory, setSelectedCategory] = React.useState(0);
//     const [sort, setSort] = React.useState("views_desc");

//     const handleSelectCategory = (categoryId) => {
//         setSelectedCategory(categoryId);
//     };

//     const handleSortChange = (sortOption) => {
//         setSort(sortOption);
//     };

//     return (
//         <AdminEventPageContainer>
//             <h1>이벤트 페이지</h1>
//             <AdminEventTopCompots
//             categories={categories}
//             selectedCategory={selectedCategory}
//             onSelectCategory={handleSelectCategory}
//             onSortChange={handleSortChange}
//             />
//             <AdminEventMenuCompots />
//             <AdminEventBoardCompots />
//         </AdminEventPageContainer>
        
//     );
// };

// export default AdminEventPage;