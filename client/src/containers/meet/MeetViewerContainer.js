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
import MeetDetailActionButtons from "../../components/meet/meetdetail/MeetDetailActionButtons";

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
      // 클린업함수!!
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
    const meetNum = meet.meetNum;
    dispatch(join({ user, meetNum }));
    dispatch(readMeet(meetNum));

    // dispatch(updateToken({ userId, meetNum }));
  };
  const onWithdraw = async () => {
    const meetNum = meet.meetNum;
    dispatch(withdraw({ user, meetNum }));
    dispatch(readMeet(meetNum));
  };
  // useEffect(() => {
  //   const localUser = localStorage.getItem("user");
  //   if (localUser) {
  //     const a = JSON.parse(localUser).meet;
  //     const b = user.meet;
  //     console.log("aaaaaaaaaaaaaaaaaaaa", a);
  //     console.log("bbbbbbbbbbbbbbbbbbbbbbbb", b);
  //     if (a !== b) {
  //       localStorage.setItem("user", JSON.stringify(user));
  //     }
  //     console.log("로칼스토리지의 후의 값", a);
  //     // dispatch(check(localUser));
  //   }
  // }, [user.meet]);

  const ownMeet = (user && user.id) === (meet && meet.userId);
  const isLogined = user !== null;
  return (
    <MeetViewer
      meet={meet}
      loading={loading}
      error={error}
      actionButtons={
        ownMeet && (
          <MeetDetailActionButtons
            type="모임"
            onEdit={onEdit}
            onRemove={onRemove}
          />
        )
      }
      joinButton={
        isLogined && !ownMeet ? (
          user.meet && user.meet.includes(meet && meet.meetNum) ? (
            <Button
              style={{
                padding: "0.4rem 2rem 0.5rem 2rem",
                fontWeight: "normal",
              }}
              onClick={onWithdraw}
            >
              탈퇴하기
            </Button>
          ) : (
            <Button
              style={{
                padding: "0.4rem 2rem 0.5rem 2rem",
                fontWeight: "normal",
              }}
              onClick={onJoin}
            >
              가입하기
            </Button>
          )
        ) : null
      }
    />
  );
};

export default MeetViewerContainer;
