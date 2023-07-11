import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const PostCommentBlock = styled.div`
  border: solid 1px black;
  padding: 1rem;
`;

const CommentForm = styled.form`
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

const PostComment = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log("Comment submitted:", comment);
    setComment("");
  };

  return (
    <PostCommentBlock>
      <CommentForm onSubmit={handleCommentSubmit}>
        <CommentInput
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="댓글 작성하기"
        />
        <CommentButton type="submit">
          댓글 작성 <FontAwesomeIcon icon={faPen} />
        </CommentButton>
      </CommentForm>
    </PostCommentBlock>
  );
};

export default PostComment;
