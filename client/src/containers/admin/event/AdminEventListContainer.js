import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AdminEventListComponent from "../../../components/admin/event/AdminEventListComponent";
import { adminEventList } from "../../../modules/admin/admineventlist";

const AdminEventListContainer = () => {
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { events, error, loading, user } = useSelector(
    ({ events, loading, user }) => ({
      events: events.events,
      error: events.error,
      loading: loading["adminevent/ADMINEVENT_LIST"],
      user: user.user,
    })
  );

  useEffect(() => {
    const searchResult = searchParams.get("search");
    const page = parseInt(searchParams.get("page"), 10) || 1;
    dispatch(adminEventList({ name, page, searchResult }));
  }, [dispatch, searchParams, name]);

  return (
    <>
      <AdminEventListComponent
        loading={loading}
        error={error}
        events={events}
        showWriteButton={user}
      />
    </>
  );
};

export default AdminEventListContainer;
