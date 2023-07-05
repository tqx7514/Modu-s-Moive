import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "./Responsive";
import Button from "./Button";

const PostSearchBlock = styled(Responsive)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
`;

const PostSearch = ({ title, tags, error, showWriteButton }) => {
  return (
    <PostSearchBlock>
      <input type="textBox" />
      <Button cyan>검색</Button>
    </PostSearchBlock>
  );
};

export default PostSearch;
