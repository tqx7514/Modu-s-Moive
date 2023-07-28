import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import SubInfo from "../common/SubInfo";
import palette from "../../lib/styles/palette";
import { useDispatch } from "react-redux";
import {
  initializePostComment,
  readPostComment,
  writePostComment,
} from "../../modules/postcomment";
import Responsive from "../common/Responsive";
import PostCommentActionButtons from "./PostCommentActionButtons";

const PostCommentListBlock = styled(Responsive)`
  // border: solid 1px black;
  padding: 1rem;
  margin-top: 3rem;
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
  border: none;
  border-bottom: 1px solid black;
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
  margin-top: 1rem;
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

const UserId = styled.div`
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
  // border-bottom: 1px solid black;
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}.`;
};

const PostCommentItem = ({
  comment,
  onRemove,
  postNum,
  user,
  ownPostComment,
}) => {
  const { userId, commentNum, content, createdAt } = comment;
  const formattedDate = formatDate(createdAt);

  return (
    <CommentItemBlock>
      <CommentItemFirstLine>
        <CommentItemContent>
          <CommentItemBlockLine>
            <UserId>{userId}</UserId>
            {user && user.id === userId && (
              <CommentItemThirdLine>
                <CommentItemButton>
                  <PostCommentActionButtons
                    onRemove={onRemove}
                    commentNum={commentNum}
                    postNum={postNum}
                  />
                </CommentItemButton>
              </CommentItemThirdLine>
            )}
          </CommentItemBlockLine>
          <CommentItemSecondLine>
            <h2>{content}</h2>
          </CommentItemSecondLine>
          <CommentItemBlockLine>
            <h5>
              <PublishedDate username={formattedDate} />
            </h5>
          </CommentItemBlockLine>
        </CommentItemContent>
      </CommentItemFirstLine>
    </CommentItemBlock>
  );
};

const PostCommentList = ({
  user,
  post,
  onRemove,
  postNum,
  postcomment,
  ownPostComment,
}) => {
  console.log("PostCommentList의 postcomment입니다.", postcomment);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      content: comment,
      userId: user.id,
      postNum: post.postNum,
    };
    dispatch(writePostComment(newComment));
    setTimeout(() => {
      dispatch(initializePostComment());
      dispatch(readPostComment(post.postNum));
    }, 100);
    setComment("");
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
        {postcomment &&
          postcomment.map((comment) => (
            <PostCommentItem
              user={user}
              key={comment.commentNum}
              comment={comment}
              onRemove={onRemove}
              postNum={postNum}
              postcomment={comment.userId}
              ownPostComment={ownPostComment}
            />
          ))}
      </CommentListBlock>
    </PostCommentListBlock>
  );
};

export default PostCommentList;
