import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import AdminCinemaContainer from "../../containers/admin/cinema/AdminCinemaContainer";
import { AdminBody } from "./AdminMovieTimePage";

const AdminCinemaPage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminBody>
        <AdminCinemaContainer />
      </AdminBody>
    </div>
  );
};

export default AdminCinemaPage;
