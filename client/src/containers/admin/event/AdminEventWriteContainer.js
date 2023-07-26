import React, { useCallback, useEffect } from "react";
import AdminEventWriteComponent from "../../../components/admin/event/AdminEventWriteComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initialize,
} from "../../../modules/admin/admineventwrite";

const AdminEventWriteContainer = () => {
  const dispatch = useDispatch();
  const {
    categoryId,
    eventTitle,
    eventContent,
    eventImg,
    startEventDate,
    endEventDate,
  } = useSelector((state) => {
    return {
      categoryId: state.admineventwrite.categoryId,
      eventTitle: state.admineventwrite.eventTitle,
      eventContent: state.admineventwrite.eventContent,
      eventImg: state.admineventwrite.eventImg,
      startEventDate: state.admineventwrite.startEventDate,
      endEventDate: state.admineventwrite.startEventDate,
    };
  }, []);

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <AdminEventWriteComponent
      onChangeField={onChangeField}
      categoryId={categoryId}
      eventTitle={eventTitle}
      eventContent={eventContent}
      eventImg={eventImg}
      startEventDate={startEventDate}
      endEventDate={endEventDate}
    />
  );
};

export default AdminEventWriteContainer;
