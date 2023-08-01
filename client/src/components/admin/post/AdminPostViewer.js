import styled from "styled-components";
import Responsive from "../../common/Responsive";
import palette from "../../../lib/styles/palette";
import SubInfo from "../../common/SubInfo";
import Tags from "../../common/Tags";
import React from "react";

const AdminPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
`;

const AdminBody = styled.div`
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  /* background: gray; */
`;

const AdminPostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const AdminPostHead = styled.div`
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

const AdminInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const AdminInfoItem = styled.div`
  font-size: 1.125rem;
  color: ${palette.gray[8]};
  margin-right: 2rem;
`;

const AdminPostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[9]};
  margin-bottom: 5rem;
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};

const AdminPostViewer = ({ post, error, loading, actionButtons, user }) => {
  console.log("post", post);
  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <AdminPostViewerBlock>존재하지 않는 포스트입니다.</AdminPostViewerBlock>
      );
    }
    return <AdminPostViewerBlock>오류 발생</AdminPostViewerBlock>;
  }
  if (loading || !post) {
    return null;
  }
  const { title, body, userId, updatedAt, tags, views, postNum } = post;
  const tagsArray = Array.isArray(tags) ? tags : JSON.parse(tags);
  const formattedDate = formatDate(updatedAt);
  console.log("AdminPostViewer");
  return (
    <>
      <AdminPageWrapper>
        <AdminBody>
          <AdminPostViewerBlock>
            <AdminPostHead>
              <h1>{title}</h1>
              <SubInfo username={userId} hasMarginTop />
              <AdminInfoWrapper>
                <AdminInfoItem>{formattedDate}</AdminInfoItem>
                <AdminInfoItem>조회수: {views}</AdminInfoItem>
              </AdminInfoWrapper>
              {actionButtons}
              <Tags tags={tagsArray} />
            </AdminPostHead>
            <AdminPostContent dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
            {/* <AdminPostCommentListContainer /> */}
          </AdminPostViewerBlock>
        </AdminBody>
      </AdminPageWrapper>
    </>
  );
};

export default AdminPostViewer;
