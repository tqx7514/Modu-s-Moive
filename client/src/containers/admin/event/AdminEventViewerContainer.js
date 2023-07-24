import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readEvent, unloadEvent } from "../../../modules/admin/adminevent";
import {
  useNavigate,
  useParams,
} from "../../../../node_modules/react-router-dom/dist/index";
import AdminEventViewerComponent from "../../../components/admin/event/AdminEventViewerComponent";
import AdminEventActionButtonComponent from "../../../components/admin/event/AdminEventActionButtonComponent";
import { setOriginalEvent } from "../../../modules/admin/admineventwrite";
import { removeAdminEvent } from "../../../lib/api/admin/adminevent";

const AdminEventViewerContainer = () => {
  const { eventNum } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { event, error, loading, user } = useSelector(
    ({ event, loading, user }) => ({
      event: event.event,
      error: event.error,
      loading: loading["adminevent/READ_EVENT"],
      user: user.user,
    })
  );
  useEffect(() => {
    dispatch(readEvent(eventNum));
    return () => {
      dispatch(unloadEvent());
    };
  }, [dispatch, eventNum]);

  const onEdit = () => {
    dispatch(setOriginalEvent(event));
    navigate("admin/write");
    console.log("EventViewerContainer onEdit Error", event);
  };

  const onRemove = async () => {
    try {
      await removeAdminEvent(eventNum);
      navigate("/admin/event/list");
    } catch (e) {
      console.log("EventViewerContainer onRemove Error", e);
    }
  };

  const ownEvent = (user && user.id) === (event && event.userId);

  return (
    <AdminEventViewerComponent
      user={user}
      event={event}
      loading={loading}
      error={error}
      actionButtons={
        ownEvent && (
          <AdminEventActionButtonComponent
            onEdit={onEdit}
            onRemove={onRemove}
          />
        )
      }
    />
  );
};

export default AdminEventViewerContainer;
