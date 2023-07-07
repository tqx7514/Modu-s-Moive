import React from "react";
import styled from "styled-components";

const PostListInfoBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;
  display: flex;
  flex-wrap: nowrap;
  gap: 5rem;
`;

const TitleInfoWrapper = styled.div`
  display: flex;
  gap: 16rem;
`;

const CountWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const PostListInfo = () => {
  return (
    <>
      <PostListInfoBlock>
        <TitleInfoWrapper>
          <b>등록일</b>
          <b>제목</b>
          <b>작성자</b>
        </TitleInfoWrapper>
        <CountWrapper>
          <b>조회수</b>
          <b>좋아요</b>
        </CountWrapper>
      </PostListInfoBlock>
    </>
  );
};

export default PostListInfo;
