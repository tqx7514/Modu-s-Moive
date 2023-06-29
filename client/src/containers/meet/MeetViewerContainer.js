import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { readMeet, unloadMeet } from "../../modules/meet";
import MeetViewer from "../../components/meet/MeetViewer";

const MeetViewerContainer = () => {
  const { meetNum } = useParams();
  const dispatch = useDispatch();
  const { meet, error, loading } = useSelector(({ meet, loading }) => ({
    meet: meet.meet,
    error: meet.error,
    loading: loading["meet/READ_MEET"],
  }));

  useEffect(() => {
    dispatch(readMeet(meetNum));
    return () => {
      dispatch(unloadMeet());
    };
  }, [dispatch, meetNum]);

  return <MeetViewer meet={meet} loading={loading} error={error} />;
};

export default MeetViewerContainer;
