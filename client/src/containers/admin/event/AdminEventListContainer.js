import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AdminEventListComponent from "../../../components/admin/event/AdminEventListComponent";
import { adminEventList } from "../../../modules/admin/admineventlist";
import eventlist from "../../../modules/eventlist";

const AdminEventListContainer = () => {
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { admineventlist, error, loading, user } = useSelector(
    ({ admineventlist, loading, user }) => ({
      admineventlist: eventlist.event,
      loading: loading["adminevent/ADMINEVENT_LIST"],
      user: user.user,
    })
  );
  console.log("12342123142312", admineventlist);

  useEffect(() => {
    const searchResult = searchParams.get("search");
    const page = parseInt(searchParams.get("page"), 10) || 1;
    dispatch(eventlist());
  }, [dispatch, searchParams, name]);

  return (
    <>
      <AdminEventListComponent
        loading={loading}
        error={error}
        events={admineventlist}
        showWriteButton={user}
      />
    </>
  );
};

export default AdminEventListContainer;
