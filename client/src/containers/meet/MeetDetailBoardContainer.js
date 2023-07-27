import React, { useEffect, useState } from "react";
import MeetDetailBoard from "../../components/meet/meetdetail/MeetDetailBoard";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initializeForm,
  meetBoardList,
  removeMeetBoard,
  updateMeetBoard,
  writeMeetBoard,
} from "../../modules/meetboard";
import { useNavigate } from "react-router-dom";
import {
  readMeetComment,
  unloadComment,
  changeCommentField,
  writeMeetComment,
  initializeComment,
  removeMeetComment,
  updateMeetComment,
} from "../../modules/meetcomment";
import Swal from "sweetalert2";

const MeetDetailBoardContainer = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    form,
    body,
    userId,
    meetNum,
    meetBoards,
    meetboardNum,
    comments,
    commentError,
    commentWrite,
    meetBoard,
  } = useSelector(({ meetboard, user, meet, meetcomment }) => ({
    form: meetboard.write,
    body: meetboard.write.body,
    userId: user.user && user.user.id,
    meetNum: meet.meet.meetNum,
    meetBoards: meetboard.list.meetBoards,
    meetBoard: meetcomment.meetboard,
    meetboardNum: meetcomment.meetboard.meetboard_Num,
    comments: meetcomment.comments,
    commentError: meetcomment.error,
    commentWrite: meetcomment.write,
  }));

  const [expandedId, setExpandedId] = useState(null);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "write",
        key: name,
        value: value.replace(/\n/g, "\n"), // 줄바꿈 문자 추가
      })
    );
  };

  const onChangeComment = (e) => {
    const body = e.target.value;
    const meetboard_Num = meetboardNum;
    dispatch(changeCommentField({ userId, body, meetboard_Num }));
  };

  const onSubmit = async () => {
    await dispatch(writeMeetBoard({ body, userId, meetNum }));
    setTimeout(() => {
      dispatch(initializeForm("write"));
      dispatch(meetBoardList(meetNum));
    }, 100);
  };

  const onSubmitComment = () => {
    const body = commentWrite.body;
    const meetboard_Num = meetboardNum;
    if (!body) {
      alert("내용 입력하세요");
    } else {
      dispatch(writeMeetComment({ userId, body, meetboard_Num }));
      setTimeout(() => {
        dispatch(initializeComment());
        dispatch(readMeetComment(meetboardNum));
      }, 100);
    }
  };

  const handleWrapperClick = (e, meetboardNum) => {
    e.stopPropagation(); // 클릭 이벤트 전파 방지
    if (expandedId === meetboardNum) {
      setExpandedId(null);
    } else {
      setExpandedId(meetboardNum);
    }
  };

  const onClick = (meetboardNum) => {
    dispatch(readMeetComment(meetboardNum));
    setExpandedId(meetboardNum);
  };

  const onRemoveBoard = () => {
    try {
      dispatch(removeMeetBoard({ meetboardNum, meetNum }));
    } catch (error) {
      console.log(error);
    }
  };

  const onRemoveComment = async (a) => {
    try {
      await dispatch(removeMeetComment(a));
    } catch (error) {
      console.log(error);
    }
  };

  const onEditBoard = (e) => {
    const body = e.target.dataset.body;
    const userId = e.target.dataset.userid;
    const meetboardNum = e.target.dataset.meetboardnum;
    // const body = meetBoard && meetBoard.body;
    // const userId2 = meetBoard && meetBoard.userId;
    // const meetboardNum = meetBoard && meetBoard.meetboard_Num;
    // console.log("body222222222222222", body2, userId2, meetboardNum2);
    Swal.fire({
      title: "글 수정",
      input: "textarea",
      inputValue: `${body}`,
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "수정",
      showLoaderOnConfirm: true,
      preConfirm: (input) => {
        dispatch(
          updateMeetBoard({
            meetboardNum,
            MeetNum: meetNum,
            body: input.replace(/\n/g, "\n"),
          })
        );
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "수정 성공",
        });
      }
    });
  };
  const onEditComment = (e) => {
    const body = e.target.dataset.commentbody;
    // const userId = e.target.dataset.userid;
    // const meetboardNum = e.target.dataset.meetboardnum;
    const meetcommentNum = e.target.dataset.meetcommentnum;
    // const body = meetBoard && meetBoard.body;
    // const userId2 = meetBoard && meetBoard.userId;
    // const meetboardNum = meetBoard && meetBoard.meetboard_Num;
    // console.log("body222222222222222", body2, userId2, meetboardNum2);
    Swal.fire({
      title: "댓글 수정",
      input: "text",
      inputValue: `${body}`,
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "수정",
      showLoaderOnConfirm: true,
      preConfirm: (input) => {
        dispatch(
          updateMeetComment({
            meetcommentNum,
            MeetBoardNum: meetboardNum,
            body: input,
          })
        );
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "수정 성공",
        });
      }
    });
  };

  useEffect(() => {
    dispatch(initializeForm("list"));
    dispatch(initializeForm("write"));
    dispatch(meetBoardList(meetNum));
    return () => {
      dispatch(unloadComment());
    };
  }, [dispatch, meetNum]);

  return (
    <div>
      <MeetDetailBoard
        onChange={onChange}
        form={form}
        onSubmit={onSubmit}
        onClick={onClick}
        meetBoards={meetBoards}
        expandedId={expandedId}
        handleWrapperClick={handleWrapperClick}
        comments={comments}
        commentError={commentError}
        userId={userId}
        onChangeComment={onChangeComment}
        onSubmitComment={onSubmitComment}
        onRemoveBoard={onRemoveBoard}
        onRemoveComment={onRemoveComment}
        onEditBoard={onEditBoard}
        onEditComment={onEditComment}
        isAdmin={isAdmin}
      />
    </div>
  );
};

export default MeetDetailBoardContainer;
