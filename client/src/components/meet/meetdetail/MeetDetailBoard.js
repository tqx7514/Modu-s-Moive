import React, { useState } from "react";
import { styled, css } from "styled-components";
import Button from "../../common/Button";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { changeCommentField } from "../../../modules/meetcomment";
import MeetActionButtons from "../MeetActionButtons";
import MeetDetailActionButtons from "./MeetDetailActionButtons";

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
  white-space: pre-wrap;
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
    background-color: mintcream;
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

  > h4 {
    margin-right: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${({ wrapText }) =>
      wrapText &&
      css`
        word-wrap: break-word; /* 해당 속성을 추가합니다. */
      `}
  }
`;

const CustomCommentWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  white-space: pre-wrap;
  cursor: text;
`;

const CustomComment = styled.input`
  width: 90%;
  height: 100%;
  border: 1px solid #ccc;
  padding: 0.5rem;
  outline: none;
  cursor: text;
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
  margin: 0 1rem 0 1rem;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ active }) => (active ? "lightgray" : "white")};
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

const ModalBlock = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const MeetBoardItem = ({
  meetBoard,
  onClick,
  handleWrapperClick,
  expandedId,
  comments,
  commentError,
  userId,
  onChangeComment,
  onSubmitComment,
  onRemoveBoard,
  onRemoveComment,
  onEditBoard,
  onEditComment,
  isAdmin,
}) => {
  const { meetboardNum, meet_Num, user_Id, body, grade, createdAt, updatedAt } =
    meetBoard;
  const formattedBody = body.replace(/\n/g, "<br />");
  const firstLine = body.split("\n")[0];
  const showEllipsis = firstLine.length > 30;
  const dispatch = useDispatch();
  const ownPost = (id) => {
    if (userId === id) {
      return true;
    } else {
      return false;
    }
  };

  const formatCreatedAt = (date) => {
    const formattedDate = new Date(date);
    const today = new Date();
    let formattedCreatedAt = "";

    // 오늘 날짜인 경우
    if (
      formattedDate.getFullYear() === today.getFullYear() &&
      formattedDate.getMonth() === today.getMonth() &&
      formattedDate.getDate() === today.getDate()
    ) {
      const hours = formattedDate.getHours();
      const minutes = String(formattedDate.getMinutes()).padStart(2, "0");
      formattedCreatedAt = `${hours}:${minutes}`;
    } else {
      const year = String(formattedDate.getFullYear()).slice(-2);
      const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
      const day = String(formattedDate.getDate()).padStart(2, "0");
      formattedCreatedAt = `${year}.${month}.${day}`;
    }

    return formattedCreatedAt;
  };

  const handleCommentWrapperClick = (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 방지
  };

  const [commentValue, setCommentValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;

  const handleCommentChange = (e) => {
    const meetboard_Num = meetboardNum;
    const value = e.target.value;
    setCommentValue(value);
    dispatch(changeCommentField({ userId, body: value, meetboard_Num }));
  };

  const handleCommentSubmit = () => {
    onSubmitComment();
    setCommentValue("");
  };

  // 댓글 페이지 계산
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments =
    comments && comments.slice(indexOfFirstComment, indexOfLastComment);

  // 페이지 변경
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MeetBoardItemBlock>
      <div>
        <BoardHeaderItem width="10%">{meetboardNum}</BoardHeaderItem>
        <BoardHeaderItem width="15%">{user_Id}</BoardHeaderItem>
        <BoardHeaderItem width="50%" wrapText>
          {expandedId === meetboardNum ? (
            <h4 dangerouslySetInnerHTML={{ __html: formattedBody }} />
          ) : (
            <h4>{showEllipsis ? `${firstLine.slice(0, 30)}...` : firstLine}</h4>
          )}
        </BoardHeaderItem>

        <BoardHeaderItem width="13%">
          {formatCreatedAt(createdAt)}
        </BoardHeaderItem>
        <BoardHeaderItem width="7%" onClick={() => onClick(meetboardNum)}>
          <BoardHeaderItemIcon icon={faChevronDown} className="detail" />
        </BoardHeaderItem>
      </div>

      {expandedId === meetboardNum && (
        <>
          <ModalBlock>
            {(ownPost(user_Id) || isAdmin) && (
              <MeetDetailActionButtons
                onEdit={onEditBoard}
                onRemove={onRemoveBoard}
                type="글"
                meetBoard={meetBoard}
              />
            )}
          </ModalBlock>
          <div>
            <CustomCommentWrapper
              expanded={expandedId === meetboardNum}
              onClick={handleCommentWrapperClick}
            >
              <CustomComment
                value={commentValue}
                onChange={handleCommentChange}
              />
              <CommentButton onClick={handleCommentSubmit}>
                댓글작성
              </CommentButton>
            </CustomCommentWrapper>
          </div>
          <>
            {currentComments &&
              currentComments.map((comment) => {
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
                      {(ownPost(comment.user_Id) || isAdmin) && (
                        <MeetDetailActionButtons
                          onRemove={onRemoveComment}
                          type="댓글"
                          num={comment.meetcommentNum}
                          num2={meetboardNum}
                          comments={comment}
                          onEdit={onEditComment}
                        />
                      )}
                    </CommentDetaillist>
                  </CommentDetail>
                );
              })}
          </>

          <Pagination>
            {comments &&
              Array.from(
                Array(Math.ceil(comments.length / commentsPerPage)),
                (_, index) => (
                  <PageButton
                    key={index}
                    active={index + 1 === currentPage}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </PageButton>
                )
              )}
          </Pagination>
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
  onRemoveBoard,
  onClick,
  handleWrapperClick,
  expandedId,
  comments,
  commentError,
  onRemoveComment,
  userId,
  onChangeComment,
  onSubmitComment,
  onEditBoard,
  onEditComment,
  isAdmin,
}) => {
  return (
    <MeetBoardBlock>
      <ButtonBlock>
        <CustomInput
          name="body"
          value={form.body}
          onChange={onChange}
          rows={5}
        />
        <CustomButton onClick={onSubmit}>글쓰기</CustomButton>
      </ButtonBlock>
      <BoardListBlock>
        <BoardHeaderBlock>
          <BoardHeaderItem width="10%">번호</BoardHeaderItem>
          <BoardHeaderItem width="15%">아이디</BoardHeaderItem>
          <BoardHeaderItem width="50%">내용</BoardHeaderItem>
          <BoardHeaderItem width="13%">날짜</BoardHeaderItem>
          <BoardHeaderItem width="7%">더보기</BoardHeaderItem>
        </BoardHeaderBlock>
        {meetBoards && (
          <MeetBoardListItem>
            {meetBoards.map((meetBoard) => (
              <MeetBoardItem
                meetBoard={meetBoard}
                key={meetBoard.meetboardNum}
                onClick={onClick}
                handleWrapperClick={handleWrapperClick}
                expandedId={expandedId}
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
            ))}
          </MeetBoardListItem>
        )}
      </BoardListBlock>
    </MeetBoardBlock>
  );
};

export default MeetDetailBoard;
