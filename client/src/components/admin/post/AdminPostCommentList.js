import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import palette from "../../../lib/styles/palette";
import Responsive from "../../common/Responsive";
import SubInfo from "../../common/SubInfo";

const AdminPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
`;

const AdminBody = styled.div`
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  background: gray;
`;

const AdminPostCommentListBlock = styled(Responsive)`
  border: solid 1px black;
  padding: 1rem;
  margin-top: 3rem;
`;

const AdminCommentItemBlock = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px black;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const AdminCommentItemFirstLine = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const AdminCommentItemSecondLine = styled.div`
  flex: 1;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const AdminCommentItemThirdLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const AdminCommentItemContent = styled.div`
  flex: 1;
  margin-right: 1rem;
  border: none;
  outline: none;
`;

const AdminCommentItemBlockLine = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const AdminCommentItemButton = styled.button`
  background: none;
  border: none;
  color: ${palette.gray[0]};
  font-size: 0.875rem;
  cursor: pointer;
`;

const AdminUserId = styled.div`
  width: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const AdminPublishedDate = styled(SubInfo)`
  width: 9rem;
  text-align: right;
  span {
    font-size: 0.875rem;
    color: ${palette.gray[6]};
  }
`;

const AdminCommentListBlock = styled.div`
  margin-top: 2rem;
  border-bottom: 1px solid black;
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}.`;
};

const AdminPostCommentItem = ({ comment, onRemove, postNum, user }) => {
  const { userId, commentNum, content, createdAt } = comment;
  const formattedDate = formatDate(createdAt);

  const handleDelete = () => {
    onRemove({ commentNum, postNum });
  };

  return (
    <AdminPageWrapper>
      <AdminBody>
        <AdminCommentItemBlock>
          <AdminCommentItemFirstLine>
            <AdminCommentItemContent>
              <AdminCommentItemBlockLine>
                <AdminUserId>{userId}</AdminUserId>
                <AdminCommentItemThirdLine>
                  <AdminCommentItemButton onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTimes} />
                  </AdminCommentItemButton>
                </AdminCommentItemThirdLine>
              </AdminCommentItemBlockLine>
              <AdminCommentItemSecondLine>
                <h2>{content}</h2>
              </AdminCommentItemSecondLine>
              <AdminCommentItemBlockLine>
                <h5>
                  <AdminPublishedDate username={formattedDate} />
                </h5>
              </AdminCommentItemBlockLine>
            </AdminCommentItemContent>
          </AdminCommentItemFirstLine>
        </AdminCommentItemBlock>
      </AdminBody>
    </AdminPageWrapper>
  );
};

const AdminPostCommentList = ({
  user,
  post,
  onRemove,
  postNum,
  postcomment,
}) => {
  return (
    <AdminPostCommentListBlock>
      <AdminCommentListBlock>
        {postcomment &&
          postcomment.map((comment) => (
            <AdminPostCommentItem
              user={user}
              key={comment.commentNum}
              comment={comment}
              onRemove={onRemove}
              postNum={postNum}
              postcomment={comment.userId}
            />
          ))}
      </AdminCommentListBlock>
    </AdminPostCommentListBlock>
  );
};

export default AdminPostCommentList;
