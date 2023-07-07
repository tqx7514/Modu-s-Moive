import React, { useEffect } from "react";
import MeetDetailBoard from "../../components/meet/meetdetail/MeetDetailBoard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  changeField,
  initializeForm,
  meetBoardList,
  writeMeetBoard,
} from "../../modules/meetboard";

const MeetDetailBoardContainer = () => {
  const dispatch = useDispatch();
  const { form, body, userId, meetNum, meetBoards } = useSelector(
    ({ meetboard, user, meet }) => ({
      form: meetboard.write,
      body: meetboard.write.body,
      userId: user.user && user.user.id,
      meetNum: meet.meet.meetNum,
      meetBoards: meetboard.list.meetBoards,
    })
  );
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
    dispatch(initializeForm("write"));
    dispatch(meetBoardList(meetNum));
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
        meetBoards={meetBoards}
      />
    </div>
  );
};

export default MeetDetailBoardContainer;
