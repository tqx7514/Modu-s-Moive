import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
// import PostCommentList from "./PostCommentList";

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const InfoItem = styled.div`
  font-size: 1.125rem;
  color: ${palette.gray[8]};
  margin-right: 2rem;
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
  margin-bottom: 5rem;
`;

// const PostCommentBlock = styled.div`
// margin-top: 3rem;
// `;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};

const PostViewer = ({ post, error, loading, actionButtons, user }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생</PostViewerBlock>;
  }
  if (loading || !post) {
    return null;
  }
  const { title, body, userId, updatedAt, tags, views, postNum } = post;
  const tagsArray = Array.isArray(tags) ? tags : JSON.parse(tags);
  const formattedDate = formatDate(updatedAt);
  return (
    <>
      <PostViewerBlock>
        <PostHead>
          <h1>{title}</h1>
          <SubInfo username={userId} hasMarginTop />
          <InfoWrapper>
            <InfoItem>{formattedDate}</InfoItem>
            <InfoItem>조회수: {views}</InfoItem>
          </InfoWrapper>
          {actionButtons}
          <Tags tags={tagsArray} />
        </PostHead>
        <PostContent dangerouslySetInnerHTML={{ __html: body }} />
        <hr />
        {/* <PostCommentBlock> */}
        {/* <PostCommentList postNum={postNum} userId={user} /> */}
        {/* </PostCommentBlock> */}
      </PostViewerBlock>
    </>
  );
};

export default PostViewer;
