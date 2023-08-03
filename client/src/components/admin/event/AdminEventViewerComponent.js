import styled from "styled-components";
import Responsive from "../../common/Responsive";
import palette from "../../../lib/styles/palette";

const AdminEventViewerBlock = styled.div`
  margin-top: 4rem;
`;

const AdminEventViewerHead = styled.div`
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

const AdminEventViewerInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const AdminEventInfoItem = styled.div`
  font-size: 1.125rem;
  color: ${palette.gray[8]};
  margin-right: 2rem;
`;

const AdminEventViewerContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
  margin-bottom: 5rem;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getDate()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
};

const AdminEventViewerComponent = ({
  adminevent,
  error,
  loading,
  actionButtons,
}) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <AdminEventViewerBlock>
          존재하지 않는 이벤트입니다.
        </AdminEventViewerBlock>
      );
    }
    return <AdminEventViewerBlock>오류 발생</AdminEventViewerBlock>;
  }
  if (loading || !adminevent) {
    return null;
  }

  const {
    categoryId,
    eventTitle,
    eventContent,
    startEventDate,
    endEventDate,
    createdAt,
    updatedAt,
    view,
  } = adminevent;
  const formattedDate = formatDate(createdAt);
  const formattedUpdateDate = formatDate(updatedAt);

  return (
    <>
      <AdminEventViewerBlock>
        <AdminEventViewerHead>
          <h1>{eventTitle}</h1>
          <AdminEventViewerInfoWrapper>
            <AdminEventInfoItem>카테고리: {categoryId}</AdminEventInfoItem>
            <AdminEventInfoItem>조회수: {view}</AdminEventInfoItem>
            <AdminEventInfoItem>
              이벤트 시작일: {startEventDate}
            </AdminEventInfoItem>
            <AdminEventInfoItem>
              이벤트 종료일: {endEventDate}
            </AdminEventInfoItem>
            <AdminEventInfoItem>등록일: {formattedDate}</AdminEventInfoItem>
            <AdminEventInfoItem>
              수정일: {formattedUpdateDate}
            </AdminEventInfoItem>
          </AdminEventViewerInfoWrapper>
          {actionButtons}
          <img src={eventContent} alt="" />
        </AdminEventViewerHead>
      </AdminEventViewerBlock>
    </>
  );
};

export default AdminEventViewerComponent;
