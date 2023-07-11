import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../../common/Button";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
const CustomButton2 = styled(Button)`
  padding: 0.4rem;
  font-weight: normal;
  width: 3rem;
  margin: 0 0.3rem 0 0.3rem;
`;

const BoardListBlock = styled.div`
  margin-bottom: 3rem;
`;

const MeetBoardListItem = styled.div`
  /* margin: 0.5rem 1rem 0.5rem 1rem; */
`;
const MeetBoardItemBlock = styled.div`
  border: 1px solid black;
  > div {
    display: flex;
    margin: 1rem 1.5rem 1rem 1.5rem;
    padding: 0.5rem;
    align-items: flex-start;
  }

  &:hover {
    background-color: lightgray;
  }
`;

const BoardHeaderBlock = styled.div`
  margin: 1rem 2rem 1rem 2rem;
  display: flex;
`;

const BoardHeaderItem = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  ${({ width }) => width && `flex-basis: ${width};`}
`;
const CustomCommentWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  white-space: pre-wrap; /* 줄바꿈 적용 */
  /* ${({ expanded }) =>
    expanded &&
    `pointer-events: none;`}expanded 상태일 때 pointer-events 비활성화 */
`;

const CustomComment = styled.input`
  width: 90%;
  height: 100%;
  border: 1px solid #ccc;
  padding: 0.5rem;
  outline: none;
`;
const CommentButton = styled.button`
  width: 10%;
  padding: 0.3rem 0 0.35rem 0;
`;
const BoardHeaderItemIcon = styled(FontAwesomeIcon)`
  width: 100%;
  color: gray;
  /* border: 1px solid red; */
  padding: 0.2rem 3rem 5rem 3rem;
  font-size: 1.2em;

  &:hover {
    font-size: 1.5rem;
    color: black;
    cursor: pointer;
  }
`;

const CommentDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CommentDetaillist = styled.span`
  margin: 0.2rem 1rem 0.2rem 1rem;
`;

const MeetBoardItem = ({
  meetBoard,
  onClick,
  handleWrapperClick,
  expanded,
  comments,
  commentError,
  userId,
}) => {
  const { meetboardNum, meet_Num, user_Id, body, grade, createdAt, updatedAt } =
    meetBoard;
  const formattedBody = body.replace(/\n/g, "<br />"); // 줄바꿈을 <br> 태그로 변경
  const firstLine = body.split("\n")[0];
  const ownPost = (id) => {
    if (userId === id) {
      console.log("userId", userId, "id", id);
      return true;
    } else {
      console.log("userId", userId, "id", id);
      return false;
    }
  };

  const formatCreatedAt = (date) => {
    const formattedDate = new Date(date);
    const today = new Date();
    let formattedCreatedAt = "";
    if (
      formattedDate.getFullYear() === today.getFullYear() &&
      formattedDate.getMonth() === today.getMonth() &&
      formattedDate.getDate() === today.getDate()
    ) {
      // 오늘 날짜인 경우 시간만 표시
      formattedCreatedAt = formattedDate.toLocaleTimeString();
    } else {
      // 오늘 날짜가 아닌 경우 날짜 표시
      const year = formattedDate.getFullYear();
      const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
      const day = String(formattedDate.getDate()).padStart(2, "0");
      formattedCreatedAt = `${year}.${month}.${day}`;
    }
    return formattedCreatedAt;
  };

  const handleCommentChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <MeetBoardItemBlock>
      <div>
        <BoardHeaderItem width="10%">{meetboardNum}</BoardHeaderItem>
        <BoardHeaderItem width="15%">{user_Id}</BoardHeaderItem>
        <BoardHeaderItem width="50%">
          {expanded ? (
            <div dangerouslySetInnerHTML={{ __html: formattedBody }} />
          ) : (
            firstLine
          )}
        </BoardHeaderItem>
        <BoardHeaderItem width="15%">
          {formatCreatedAt(createdAt)}
        </BoardHeaderItem>
        <BoardHeaderItem width="5%" onClick={() => onClick(meetboardNum)}>
          <BoardHeaderItemIcon icon={faChevronDown} className="detail" />
        </BoardHeaderItem>
      </div>

      {expanded && (
        <>
          {ownPost(user_Id) && (
            <>
              <CustomButton2>수정</CustomButton2>
              <CustomButton2>삭제</CustomButton2>
            </>
          )}
          <div>
            <CustomCommentWrapper
              expanded={expanded}
              onClick={handleWrapperClick}
            >
              <CustomComment onChange={handleCommentChange} />
              <CommentButton>댓글작성</CommentButton>
            </CustomCommentWrapper>
          </div>
          <>
            {comments &&
              comments.map((comment) => {
                const formattedCommentCreatedAt = formatCreatedAt(
                  comment.createdAt
                );
                return (
                  <CommentDetail key={comment.meetcommentNum}>
                    <CommentDetaillist>{comment.user_Id}</CommentDetaillist>
                    <CommentDetaillist>{comment.body}</CommentDetaillist>
                    <CommentDetaillist>
                      {formattedCommentCreatedAt}
                    </CommentDetaillist>
                    <CommentDetaillist>
                      {ownPost(comment.user_Id) && (
                        <>
                          <CustomButton2>수정</CustomButton2>
                          <CustomButton2>삭제</CustomButton2>
                        </>
                      )}
                    </CommentDetaillist>
                  </CommentDetail>
                );
              })}
          </>
        </>
      )}
    </MeetBoardItemBlock>
  );
};

const MeetDetailBoard = ({
  onChange,
  form,
  onSubmit,
  meetBoards,
  onClick,
  handleWrapperClick,
  expanded,
  comments,
  commentError,
  userId,
}) => {
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
        <BoardHeaderBlock>
          <BoardHeaderItem width="10%">번호</BoardHeaderItem>
          <BoardHeaderItem width="15%">아이디</BoardHeaderItem>
          <BoardHeaderItem width="50%">내용</BoardHeaderItem>
          <BoardHeaderItem width="15%">날짜</BoardHeaderItem>
          <BoardHeaderItem width="5%">더보기</BoardHeaderItem>
        </BoardHeaderBlock>
        {meetBoards && (
          <MeetBoardListItem>
            {meetBoards.map((meetBoard) => (
              <MeetBoardItem
                meetBoard={meetBoard}
                key={meetBoard.meetboardNum}
                onClick={onClick}
                handleWrapperClick={handleWrapperClick}
                expanded={expanded}
                comments={comments}
                commentError={commentError}
                userId={userId}
              />
            ))}
          </MeetBoardListItem>
        )}
      </BoardListBlock>
    </MeetBoardBlock>
  );
};

export default MeetDetailBoard;
