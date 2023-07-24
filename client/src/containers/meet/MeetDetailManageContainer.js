import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MeetDetailActionButtons from "../../components/meet/meetdetail/MeetDetailActionButtons";
import MeetDetailManage from "../../components/meet/meetdetail/MeetDetailManage";
import { mandate } from "../../lib/api/meet";
import { useNavigate } from "react-router-dom";
import { kickMeet, readMeet } from "../../modules/meet";
import Swal from "sweetalert2";

const MeetDetailManageContainer = () => {
  const { members, meet } = useSelector(({ meet }) => ({
    members: meet.meet.user,
    meet: meet.meet,
  }));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onKick = async (meetuserNum) => {
    const meetNum = meet.meetNum;
    Swal.fire({
      title: "회원 강퇴",
      text: `${meetuserNum}번 회원님을 모임에서 강퇴하시겠습니까?`,
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "강퇴",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        dispatch(kickMeet({ meetNum, meetuserNum }));
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "강퇴하였습니다.",
        });
      }
    });
  };

  const onMandate = (meetuserId) => {
    console.log("온맨데이트~", meetuserId);
    const meetNum = meet.meetNum;
    // try {
    //   mandate({ meetuserId, meetNum });
    //   setTimeout(() => {
    //     dispatch(readMeet(meetNum));
    //     navigate("/meet");
    //   }, 100);
    // } catch (error) {
    //   console.log(error);
    // }
    Swal.fire({
      title: "매니저 위임",
      text: `${meetuserId}님에게 매니저를 위임하시겠습니까?`,
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "위임",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        mandate({ meetuserId, meetNum });
        setTimeout(() => {
          dispatch(readMeet(meetNum));
          navigate("/meet");
        }, 100);
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "위임 성공 / 모임 홈으로 돌아갑니다",
        });
      }
    });
  };

  return (
    <>
      <MeetDetailManage
        members={members}
        meet={meet}
        onKick={onKick}
        onMandate={onMandate}
      />
    </>
  );
};

export default MeetDetailManageContainer;
