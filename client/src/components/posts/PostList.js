import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Link } from "react-router-dom";

const PostItemBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
`;

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemContent = styled.div`
  display: flex;
  align-items: center;
  h2 {
    flex: 1;
    font-size: 2rem;
    margin: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
`;

const PostItem = ({ post }) => {
  const { updatedAt, userId, tags, title, postNum } = post;
  const tagsArray = Array.isArray(tags) ? tags : JSON.parse(tags);
  return (
    <PostItemBlock>
      <PostItemContent>
        <h2>
          <Link to={`/post/detail/${postNum}`}>{title}</Link>
        </h2>
        <SubInfo username={userId} publishedDate={new Date(updatedAt)} />
      </PostItemContent>
      <Tags tags={tagsArray} />
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }

  return (
    <PostListBlock>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post.postNum} />
          ))}
        </div>
      )}
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
    </PostListBlock>
  );
};

export default PostList;
