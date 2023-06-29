import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { writeMeet } from "../../modules/meetwrite";
import WriteActionButtons from "../../components/meet/WriteActionButtons";

const MeetWriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, meet, meetError, userId } = useSelector(
    ({ meetwrite, user }) => ({
      title: meetwrite.title,
      body: meetwrite.body,
      tags: meetwrite.tags,
      meet: meetwrite.meet,
      meetError: meetwrite.meetError,
      userId: user.user && user.user.id,
    })
  );
  const onPublish = () => {
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

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default MeetWriteActionButtonsContainer;
