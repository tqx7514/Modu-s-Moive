import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import SubInfo from "../common/SubInfo";
import { Link } from "react-router-dom";
import PostSearch from "../post/PostSearch";
import PostListInfo from "./PostListInfo";
import PostLike from "../post/PostLike";

const PostItemBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;
  &:first-child {
    padding-top: 0;
    border-bottom: 1px solid ${palette.gray[5]};
  }
  &:last-child {
    margin-bottom: 2rem;
  }
  & + & {
    border-bottom: 1px solid ${palette.gray[5]};
  }
`;

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
  width: 160px;
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

const PostSearchBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0rem;
`;

const PostItem = ({ post }) => {
  const { createdAt, userId, title, postNum, views } = post;
  return (
    <PostItemBlock>
      <PostItemContent>
        <SubInfo publishedDate={new Date(createdAt)} />|
        <h2>
          <Link to={`/post/detail/${postNum}`}>{title}</Link>
        </h2>
        |
        <SubInfo username={userId} />|<b>{views}</b>
        <PostLike />
      </PostItemContent>
    </PostItemBlock>
  );
};
console.log("PostItem확인중입니다.", PostItem);
const PostList = ({ posts, loading, error, showWriteButton }) => {
  console.log(
    "PostList확인중입니다.",
    "posts:",
    posts,
    "loading:",
    loading,
    "error:",
    error,
    "showWriteButton:",
    showWriteButton
  );
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }

  return (
    <>
      <PostListBlock>
        <PostSearchBlock>
          <PostSearch />
          <WritePostButtonWrapper>
            {showWriteButton && (
              <Button cyan to="/write">
                새 글 작성하기
              </Button>
            )}
          </WritePostButtonWrapper>
        </PostSearchBlock>
        <PostListInfo />
        {!loading && posts && (
          <div>
            {posts.map((post) => (
              <PostItem post={post} key={post.postNum} />
            ))}
          </div>
        )}
      </PostListBlock>
    </>
  );
};

export default PostList;
