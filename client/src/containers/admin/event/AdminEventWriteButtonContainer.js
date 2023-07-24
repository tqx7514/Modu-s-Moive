// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   updateEvent,
//   writeEvent,
// } from "../../../modules/admin/admineventwrite";
// import AdminEventWriteButtonComponent from "../../../components/admin/event/AdminEventWriteButtonComponent";

// const AdminEventWriteButtonContainer = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {
//     eventTitle,
//     event,
//     eventContent,
//     eventImg,
//     categoryId,
//     startEventDate,
//     endEventDate,
//     originalEventNum,
//     userId,
//     error,
//   } = useSelector(() => ({
//     categoryId,
//     eventTitle,
//     eventContent,
//     eventImg,
//     startEventDate,
//     endEventDate,
//     event,
//     error,
//     userId,
//     originalEventNum,
//   }));
//   const onPublish = () => {
//     if (originalEventNum) {
//       dispatch(
//         updateEvent({
//           eventNum: originalEventNum,
//           categoryId,
//           eventTitle,
//           eventContent,
//           eventImg,
//           startEventDate,
//           endEventDate,
//         })
//       );
//       return;
//     }
//     dispatch(
//       writeEvent({
//         categoryId,
//         eventTitle,
//         eventContent,
//         eventImg,
//         startEventDate,
//         endEventDate,
//         userId,
//       })
//     );
//   };
//   const onCancel = () => {
//     navigate(-1);
//   };

//   useEffect(() => {
//     if (event) {
//       navigate("/admin/event");
//     }
//     if (error) {
//       console.log("AdminEventWriteButtonContainer Error", error);
//     }
//   }, [navigate, event, error]);
//   return (
//     <AdminEventWriteButtonComponent
//       onPublish={onPublish}
//       onCancel={onCancel}
//       isEdit={!!originalEventNum}
//     />
//   );
// };

// export default AdminEventWriteButtonContainer;
