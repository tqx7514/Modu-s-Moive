import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../../common/Button";

const MeetBoardBlock = styled.div`
  /* display: flex; */
  /* justify-content: center; */
`;
const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 0 1rem;
  margin-bottom: 3rem;
  height: 5rem;
`;

const CustomInput = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  white-space: pre-wrap; /* 줄바꿈 적용 */
`;

const CustomButton = styled(Button)`
  padding: 0.4rem 2rem 0.5rem 2rem;
  font-weight: normal;
  width: 15%;
`;

const BoardListBlock = styled.div`
  margin-bottom: 3rem;
`;

const MeetBoardListItem = styled.div`
  /* margin: 0.5rem 1rem 0.5rem 1rem; */
`;
const MeetBoardItemBlock = styled.div`
  margin: 1rem 2rem 1rem 2rem;
  border: 1px solid black;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

const MeetBoardItem = ({ meetBoard }) => {
  const { meetboardNum, meet_Num, user_Id, body, grade, createdAt, updatedAt } =
    meetBoard;
  const formattedBody = body.replace(/\n/g, "<br />"); // 줄바꿈을 <br> 태그로 변경
  const firstLine = body.split("\n")[0];
  const formattedCreatedAt = new Date(createdAt).toLocaleString();

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <MeetBoardItemBlock onClick={toggleExpand}>
      {meetboardNum}
      {user_Id}
      {expanded ? (
        <div dangerouslySetInnerHTML={{ __html: formattedBody }} />
      ) : (
        firstLine
      )}
      {formattedCreatedAt}
    </MeetBoardItemBlock>
  );
};

const MeetDetailBoard = ({ onChange, form, onSubmit, meetBoards }) => {
  return (
    <MeetBoardBlock>
      <ButtonBlock>
        <CustomInput
          name="body"
          value={form.body}
          onChange={onChange}
          rows={5} // 표시할 줄 수 조정
        />
        <CustomButton onClick={onSubmit}>글쓰기</CustomButton>
      </ButtonBlock>
      <BoardListBlock>
        {meetBoards && (
          <MeetBoardListItem>
            {meetBoards.map((meetBoard) => (
              <MeetBoardItem
                meetBoard={meetBoard}
                key={meetBoard.meetboardNum}
              />
            ))}
          </MeetBoardListItem>
        )}
      </BoardListBlock>
    </MeetBoardBlock>
  );
};

export default MeetDetailBoard;
