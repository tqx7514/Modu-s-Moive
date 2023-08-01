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
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "가입하기",
      text: "이 모임에 가입하시겠습니까?",
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "가입",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        dispatch(join({ user, meetNum }));
        dispatch(readMeet(meetNum));
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "가입 성공",
        });
      }
    });

    // dispatch(updateToken({ userId, meetNum }));
  };
  const onWithdraw = async () => {
    const meetNum = meet.meetNum;
    Swal.fire({
      title: "탈퇴하기",
      text: "정말로 탈퇴하시겠습니까?",
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "탈퇴",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        dispatch(withdraw({ user, meetNum }));
        dispatch(readMeet(meetNum));
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "탈퇴 성공",
        });
      }
    });
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
  const isJoined = user.meet && user.meet.includes(meet && meet.meetNum);
  return (
    <MeetViewer
      meet={meet}
      loading={loading}
      error={error}
      ownMeet={ownMeet}
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
      isJoined={isJoined}
    />
  );
};

export default MeetViewerContainer;
