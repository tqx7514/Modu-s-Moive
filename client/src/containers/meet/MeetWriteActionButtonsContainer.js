import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { writeMeet, updateMeet } from "../../modules/meetwrite";
import WriteActionButtons from "../../components/meet/WriteActionButtons";

const MeetWriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    title,
    body,
    tags,
    meet,
    meetError,
    userId,
    region,
    originalMeetNum,
  } = useSelector(({ meetwrite, user }) => ({
    title: meetwrite.title,
    body: meetwrite.body,
    tags: meetwrite.tags,
    meet: meetwrite.meet,
    userId: user.user && user.user.id,
    region: meetwrite.region,
    meetError: meetwrite.meetError,
    originalMeetNum: meetwrite.originalMeetNum,
  }));
  const onPublish = () => {
    if (originalMeetNum) {
      dispatch(
        updateMeet({ meetNum: originalMeetNum, title, body, tags, region })
      );
      return;
    }
    dispatch(
      writeMeet({
        title,
        body,
        tags,
        userId,
        region,
      })
    );
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (meet) {
      navigate("/meet");
    }
    if (meetError) {
      console.log(meetError);
    }
  }, [navigate, meet, meetError]);

  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalMeetNum}
    />
  );
};

export default MeetWriteActionButtonsContainer;
