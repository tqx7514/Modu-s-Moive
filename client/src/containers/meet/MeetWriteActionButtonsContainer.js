import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { writeMeet, updateMeet } from "../../modules/meetwrite";
import WriteActionButtons from "../../components/meet/WriteActionButtons";

const MeetWriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, meet, meetError, userId, originalMeetNum } =
    useSelector(({ meetwrite, user }) => ({
      title: meetwrite.title,
      body: meetwrite.body,
      tags: meetwrite.tags,
      meet: meetwrite.meet,
      meetError: meetwrite.meetError,
      userId: user.user && user.user.id,
      originalMeetNum: meetwrite.originalMeetNum,
    }));
  const onPublish = () => {
    if (originalMeetNum) {
      dispatch(updateMeet({ meetNum: originalMeetNum, title, body, tags }));
      return;
    }
    dispatch(
      writeMeet({
        title,
        body,
        tags,
        userId,
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
