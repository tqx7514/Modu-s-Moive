import React, { useEffect, useState } from "react";
import MeetDetailBoard from "../../components/meet/meetdetail/MeetDetailBoard";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initializeForm,
  meetBoardList,
  removeMeetBoard,
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
} from "../../modules/meetcomment";

const MeetDetailBoardContainer = () => {
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
  } = useSelector(({ meetboard, user, meet, meetcomment }) => ({
    form: meetboard.write,
    body: meetboard.write.body,
    userId: user.user && user.user.id,
    meetNum: meet.meet.meetNum,
    meetBoards: meetboard.list.meetBoards,
    meetboardNum: meetcomment.meetboardNum,
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
    console.log("sssssssssssssssssssssss", meetboardNum);
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
    console.log("ㅋㅋㅋㅋㅋㅋㅋㅋㅋ", a);
    try {
      await dispatch(removeMeetComment(a));
    } catch (error) {
      console.log(error);
    }
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
      />
    </div>
  );
};

export default MeetDetailBoardContainer;
