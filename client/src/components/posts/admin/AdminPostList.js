import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import SubInfo from "../../common/SubInfo";
import { Link } from "../../../../node_modules/react-router-dom/dist/index";
import Responsive from "../../common/Responsive";

const AdminPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
`;

const AdminBody = styled.div`
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  background: gray;
`;

const AdminPostItemBlock = styled.div`
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

const AdminPostItemContent = styled.div`
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

const AdminPostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const PublishedDate = styled(SubInfo)`
  width: 9rem;
  text-align: right;
  span {
    font-size: 0.875rem;
    color: ${palette.gray[6]};
  }
`;

const UserId = styled(SubInfo)`
  width: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Views = styled.b`
  width: 4rem;
  text-align: right;
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}.`;
};

const AdminPostItem = ({ post }) => {
  const { createdAt, userId, title, postNum, views } = post;
  const limitedTitle = title.length > 10 ? `${title.slice(0, 10)}...` : title;
  const formattedViews = views > 999 ? "999+" : views;
  const limitedUserId = userId.length > 6 ? `${userId.slice(0, 6)}..` : userId;
  const formattedDate = formatDate(createdAt);

  return (
    <AdminPostItemBlock>
      <AdminPostItemContent>
        <PublishedDate username={formattedDate} />
        <h2>
          <Link to={`/adminpost/detail/${postNum}`}>{limitedTitle}</Link>
        </h2>
        <UserId username={limitedUserId} />
        <Views>{formattedViews}</Views>
      </AdminPostItemContent>
    </AdminPostItemBlock>
  );
};

const AdminPostList = ({ posts, loading, error }) => {
  return (
    <AdminPageWrapper>
      <AdminBody>
        <AdminPostListBlock>
          {!loading && posts && (
            <div>
              {posts.map((post) => (
                <AdminPostItem post={post} key={post.postNum} />
              ))}
            </div>
          )}
        </AdminPostListBlock>
      </AdminBody>
    </AdminPageWrapper>
  );
};

export default AdminPostList;
