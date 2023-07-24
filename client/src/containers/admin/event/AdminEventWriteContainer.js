// import { useDispatch } from "react-redux";
// import AdminEventWriteComponent from "../../../components/admin/event/AdminEventWriteComponent";
// import { writeEvent } from "../../../modules/admin/admineventwrite";

// const AdminEventWriteContainer = () => {
//     const dispatch = useDispatch();

//     const handleSubmit = async (e, eventData) => {
//         e.preventDefault();
//         try {
//             dispatch(writeEvent(eventData));
//         } catch (error) {
//             console.error("AdminEventWriteContainer 오류:", error);
//         }
//     };

//     return <AdminEventWriteComponent onSubmit={handleSubmit} />;
// };

// export default AdminEventWriteContainer;