import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminEventPaginationComponent from "../../../components/admin/event/AdminEventPaginationComponent";

const AdminEventPaginationContainer = () => {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page"), 10) || 1;

  const { lastPage, eventList, loading } = useSelector(
    ({ admineventlist, loading }) => ({
      lastPage: admineventlist.lastPage,
      eventList: admineventlist.admineventlist,
      loading: loading["adminevent/ADMINEVENT_LIST"],
    })
  );
  console.log("AdminEventPagination lastpage", lastPage);

  if (!eventList || loading) return null;

  return (
    <AdminEventPaginationComponent
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default AdminEventPaginationContainer;
