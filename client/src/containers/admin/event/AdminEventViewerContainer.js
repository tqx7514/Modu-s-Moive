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
  const { adminevent, error, loading, user } = useSelector(
    ({ adminevent, loading, user }) => ({
      adminevent: adminevent?.adminevent,
      error: adminevent?.error,
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
    dispatch(setOriginalEvent(adminevent));
    navigate("admin/write");
  };

  const onRemove = async () => {
    try {
      await removeAdminEvent(eventNum);
      navigate("/admin/event/list");
    } catch (e) {
      console.error(error);
    }
  };

  const ownEvent = (user && user.id) === (adminevent && adminevent.userId);

  return (
    <AdminEventViewerComponent
      user={user}
      adminevent={adminevent}
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
