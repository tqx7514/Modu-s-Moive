import styled from "styled-components";
import Responsive from "../../common/Responsive";
import palette from "../../../lib/styles/palette";

const AdminEventViewerBlock = styled(Responsive)`
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
    max-width: 980px;
    max-height: 1215px;
    width: auto;
    height: auto;
  }
`;

const AdminEventViewerComponent = ({
  event,
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
  if (loading || !event) {
    return null;
  }

  const {
    eventTitle,
    eventContent,
    startEventDate,
    endEventDate,
    createdAt,
    updatedAt,
    view,
  } = event;

  return (
    <>
      <AdminEventViewerBlock>
        <AdminEventViewerHead>
          <h1>{eventTitle}</h1>
          <AdminEventViewerInfoWrapper>
            <AdminEventInfoItem>조회수: {view}</AdminEventInfoItem>
            <AdminEventInfoItem>
              이벤트 시작일: {startEventDate}
            </AdminEventInfoItem>
            <AdminEventInfoItem>
              이벤트 종료일: {endEventDate}
            </AdminEventInfoItem>
            <AdminEventInfoItem>등록일: {createdAt}</AdminEventInfoItem>
            <AdminEventInfoItem>수정일: {updatedAt}</AdminEventInfoItem>
          </AdminEventViewerInfoWrapper>
          {actionButtons}
          <AdminEventViewerContent
            dangerouslySetInnerHTML={{ __html: eventContent }}
          />
        </AdminEventViewerHead>
      </AdminEventViewerBlock>
    </>
  );
};

export default AdminEventViewerComponent;
