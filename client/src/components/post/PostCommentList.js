import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import SubInfo from "../common/SubInfo";
import palette from "../../lib/styles/palette";
import { useDispatch, useSelector } from "react-redux";
import { writePostComment } from "../../modules/postcomment";

const PostCommentListBlock = styled.div`
  border: solid 1px black;
  padding: 1rem;
`;

const PostCommentForm = styled.form`
  display: flex;
  margin-left: 10rem;
  max-width: 40rem;
`;

const CommentInput = styled.input`
  flex: 1;
  margin-right: 1rem;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;

const CommentButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  font-size: inherit;
  cursor: pointer;
`;

const CommentItemBlock = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px black;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const CommentItemFirstLine = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const CommentItemSecondLine = styled.div`
  flex: 1;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const CommentItemThirdLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const CommentItemContent = styled.div`
  flex: 1;
  margin-right: 1rem;
  border: none;
  outline: none;
`;

const CommentItemBlockLine = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const CommentItemButton = styled.button`
  background: none;
  border: none;
  color: ${palette.gray[6]};
  font-size: 0.875rem;
  cursor: pointer;
`;

const UserId = styled(SubInfo)`
  width: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PublishedDate = styled(SubInfo)`
  width: 9rem;
  text-align: right;
  span {
    font-size: 0.875rem;
    color: ${palette.gray[6]};
  }
`;

const CommentListBlock = styled.div`
  margin-top: 2rem;
  border-bottom: 1px solid black;
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}.`;
};

const PostCommentItem = ({ comment, onRemove }) => {
  const { commentNum, content, createdAt } = comment;
  const userId = useSelector((state) => state.user.userId) || "unknown";
  const limitedUserId =
    userId && userId.length > 6 ? `${userId.slice(0, 6)}..` : userId;
  const formattedDate = formatDate(createdAt);
  return (
    <CommentItemBlock>
      <CommentItemFirstLine>
        <CommentItemContent>
          <CommentItemBlockLine>
            <UserId username={limitedUserId} />
            <CommentItemThirdLine>
              <CommentItemButton onClick={() => onRemove(commentNum)}>
                <FontAwesomeIcon icon={faTimes} />
              </CommentItemButton>
            </CommentItemThirdLine>
          </CommentItemBlockLine>
          <CommentItemSecondLine>
            <h2>{content}</h2>
          </CommentItemSecondLine>
          <CommentItemBlockLine>
            <PublishedDate username={formattedDate} />
          </CommentItemBlockLine>
        </CommentItemContent>
      </CommentItemFirstLine>
    </CommentItemBlock>
  );
};

const PostCommentList = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [commentNum, setCommentNum] = useState(0);

  const dispatch = useDispatch();

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      commentNum: commentNum,
      content: comment,
      createdAt: new Date().toISOString(),
    };
    dispatch(writePostComment(newComment));
    setComments([...comments, newComment]);
    setCommentNum(commentNum + 1);
    setComment("");
  };

  const handleCommentRemove = (commentNum) => {
    setComments(
      comments.filter((comment) => comment.commentNum !== commentNum)
    );
  };

  return (
    <PostCommentListBlock>
      <PostCommentForm onSubmit={handleCommentSubmit}>
        <CommentInput
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="댓글 작성하기"
        />
        <CommentButton type="submit">
          댓글 작성 <FontAwesomeIcon icon={faPen} />
        </CommentButton>
      </PostCommentForm>
      <CommentListBlock>
        {comments.map((comment) => (
          <PostCommentItem
            key={comment.commentNum}
            comment={comment}
            onRemove={handleCommentRemove}
          />
        ))}
      </CommentListBlock>
    </PostCommentListBlock>
  );
};

export default PostCommentList;
