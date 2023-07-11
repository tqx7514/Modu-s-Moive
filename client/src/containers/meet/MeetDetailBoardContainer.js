import React, { useEffect, useState } from "react";
import MeetDetailBoard from "../../components/meet/meetdetail/MeetDetailBoard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  changeField,
  initializeForm,
  meetBoardList,
  writeMeetBoard,
} from "../../modules/meetboard";
import { readMeetComment, unloadComment } from "../../modules/meetcomment";

const MeetDetailBoardContainer = () => {
  const dispatch = useDispatch();
  const { form, body, userId, meetNum, meetBoards, comments, commentError } =
    useSelector(({ meetboard, user, meet, meetcomment }) => ({
      form: meetboard.write,
      body: meetboard.write.body,
      userId: user.user && user.user.id,
      meetNum: meet.meet.meetNum,
      meetBoards: meetboard.list.meetBoards,
      comments: meetcomment.comments,
      commentError: meetcomment.error,
    }));
  const [expanded, setExpanded] = useState(false);

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

  const onSubmit = async () => {
    await dispatch(writeMeetBoard({ body, userId, meetNum }));
    setTimeout(() => {
      dispatch(initializeForm("write"));
      dispatch(meetBoardList(meetNum));
    }, 100);
  };
  const handleWrapperClick = (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 방지
    if (!expanded) {
      setExpanded(true);
    }
  };

  const onClick = (meetboard_Num) => {
    console.log("온클릭");
    dispatch(readMeetComment(meetboard_Num));
    setExpanded(!expanded);
  };

  useEffect(() => {
    dispatch(initializeForm("list"));
    dispatch(initializeForm("write"));
    dispatch(meetBoardList(meetNum));
  }, [dispatch, meetNum]);

  return (
    <div>
      <MeetDetailBoard
        onChange={onChange}
        form={form}
        onSubmit={onSubmit}
        onClick={onClick}
        meetBoards={meetBoards}
        expanded={expanded}
        handleWrapperClick={handleWrapperClick}
        comments={comments}
        commentError={commentError}
        userId={userId}
      />
    </div>
  );
};

export default MeetDetailBoardContainer;
