import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import SubInfo from "../common/SubInfo";
import { Link, useNavigate } from "react-router-dom";
import PostSearch from "../post/PostSearch";
import PostListInfo from "./PostListInfo";

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
  padding-right: 80px;
`;

const WritePostButton = styled(Button)`
  white-space: nowrap;
`;

const PostItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-right: 15px;
  h2 {
    flex: 1;
    font-size: 2rem;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

const Views = styled.b`
  width: 4rem;
  text-align: right;
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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}.`;
};

const PostItem = ({ post }) => {
  const { createdAt, userId, title, postNum, views } = post;
  const limitedTitle = title.length > 10 ? `${title.slice(0, 10)}...` : title;
  const formattedViews = views > 999 ? "999+" : views;
  const limitedUserId = userId.length > 6 ? `${userId.slice(0, 6)}..` : userId;
  const formattedDate = formatDate(createdAt);
  console.log("PostItem의 post입니다.", post);

  return (
    <PostItemBlock>
      <PostItemContent>
        <PublishedDate username={formattedDate} />
        <h2>
          <Link to={`/post/detail/${postNum}`}>{limitedTitle}</Link>
        </h2>
        <UserId username={limitedUserId} />
        <Views>{formattedViews}</Views>
      </PostItemContent>
    </PostItemBlock>
  );
};
// console.log("PostListComponent의 PostItem입니다.", PostItem);
const PostList = ({ posts, loading, error, showWriteButton }) => {
  console.log("PostListComponent의 PostList의 posts입니다.", posts);
  const [searchTitle, setSearchTitle] = useState("");
  const navigate = useNavigate();

  const handleSearch = (title) => {
    setSearchTitle(title);
    if (title === "") {
      navigate("/postlist");
    } else {
      navigate(`/postlist?title=${encodeURIComponent(title)}`);
    }
  };
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      <PostSearchBlock>
        <PostSearch onSearch={handleSearch} />
        <WritePostButtonWrapper>
          {showWriteButton && (
            <WritePostButton cyan to="/write">
              글쓰기
            </WritePostButton>
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
  );
};

export default PostList;
