// import React, { useState } from "react";
// import { createEvent } from "../../../lib/api/event";
// import { useHistory } from "react-router-dom";
// import styled from "styled-components";
// import Button from "../Button";

// const AdminEventFormContainer = styled.div``;

// const AdminEventFormBlock = styled.form``;

// const AdminEventFormBtnBlock = styled.div``;

// const AdminEventForm = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [eventImg, setEventImg] = useState("");
//   const [category, setCategory] = useState("");
//   const [startEventDate, setStartEventDate] = useState("");
//   const [endEventDate, setEndEventDate] = useState("");
//   const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("content", content);
//       formData.append("eventImg", eventImg);
//       formData.append("category", category);
//       formData.append("startEventDate", startEventDate);
//       formData.append("endEventDate", endEventDate);

//       await createEvent(formData);

//       setTitle("");
//       setContent("");
//       setEventImg("");
//       setCategory("");
//       setStartEventDate("");
//       setEndEventDate("");
//       history.push("/admin/event/:eventNum");
//     } catch (error) {
//       console.error("AdminEventForm Error", error);
//     }
//   };

//   const handleCancel = () => {
//     history.push("/admin/event");
//   };

//   return (
//     <AdminEventFormContainer>
//       <AdminEventFormBlock onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           placeholder="카테고리"
//         />
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="제목"
//         />
//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="내용"
//         ></textarea>
//         <p>
//           썸네일
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setEventImg(e.target.files[0])}
//           />
//         </p>
//         <input
//           type="date"
//           value={startEventDate}
//           onChange={(e) => setStartEventDate(e.target.value)}
//           placeholder="이벤트 시작일"
//         />
//         <input
//           type="date"
//           value={endEventDate}
//           onchange={(e) => setEndEventDate(e.target.value)}
//           placeholder="이벤트 종료일"
//         />
//         <AdminEventFormBtnBlock>
//           <Button type="submit">작성</Button>
//           <Button onClick={handleCancel}>취소</Button>
//         </AdminEventFormBtnBlock>
//       </AdminEventFormBlock>
//     </AdminEventFormContainer>
//   );
// };

// export default AdminEventForm;
