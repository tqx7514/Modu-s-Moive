import styled from "styled-components";

const PostCommentBlock = styled.div`
  border: solid 1px black;
`;
const PostComment = () => {
  return (
    <PostCommentBlock>
      <b>댓글 표시</b>
    </PostCommentBlock>
  );
};
export default PostComment;
