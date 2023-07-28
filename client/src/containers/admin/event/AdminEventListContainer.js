import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import AdminEventListComponent from "../../../components/admin/event/AdminEventListComponent";
import { adminEventList } from "../../../modules/admin/admineventlist";

const AdminEventListContainer = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { admineventlist, error, loading, user } = useSelector(
    ({ admineventlist, loading, user }) => ({
      admineventlist: admineventlist.admineventlist,
      loading: loading["adminevent/ADMINEVENT_LIST"],
      user: user.user,
    })
  );
  console.log("12342123142312", admineventlist);

  useEffect(() => {
    const page = parseInt(searchParams.get("page"), 10) || 1;
    dispatch(adminEventList({ page }));
  }, [dispatch, searchParams]);

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
