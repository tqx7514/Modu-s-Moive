import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { readMeet, unloadMeet } from "../../modules/meet";
import MeetViewer from "../../components/meet/MeetViewer";
import MeetActionButtons from "../../components/meet/MeetActionButtons";
import { setOriginalMeet } from "../../modules/meetwrite";
import { removeMeet } from "../../lib/api/meet";
import Button from "../../components/common/Button";
import { join, withdraw } from "../../modules/user";

const MeetViewerContainer = () => {
  const { meetNum } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { meet, error, loading, user } = useSelector(
    ({ meet, loading, user }) => ({
      meet: meet.meet,
      error: meet.error,
      loading: loading["meet/READ_MEET"],
      user: user.user,
    })
  );

  useEffect(() => {
    dispatch(readMeet(meetNum));
    return () => {
      dispatch(unloadMeet());
    };
  }, [dispatch, meetNum]);

  const onEdit = () => {
    dispatch(setOriginalMeet(meet));
    navigate("/meet/write");
  };

  const onRemove = async () => {
    try {
      await removeMeet(meetNum);
      navigate("/meet");
    } catch (e) {
      console.log(e);
    }
  };

  const onJoin = async () => {
    const userId = user.id;
    const meetNum = meet.meetNum;
    dispatch(join({ userId, meetNum }));
  };
  const onWithdraw = async () => {
    const userId = user.id;
    const meetNum = meet.meetNum;
    dispatch(withdraw({ userId, meetNum }));
  };

  const ownPost = (user && user.id) === (meet && meet.userId);
  const isLogined = user !== null;
  return (
    <MeetViewer
      meet={meet}
      loading={loading}
      error={error}
      actionButtons={
        ownPost && <MeetActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
      joinButton={
        isLogined ? (
          user.meet && user.meet.includes(meet && meet.meetNum) ? (
            <Button cyan="true" onClick={onWithdraw}>
              탈퇴하기
            </Button>
          ) : (
            <Button cyan="true" onClick={onJoin}>
              가입하기
            </Button>
          )
        ) : null
      }
    />
  );
};

export default MeetViewerContainer;
