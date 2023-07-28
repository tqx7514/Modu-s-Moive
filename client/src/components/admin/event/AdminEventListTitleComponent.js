import styled from "styled-components";

const AdminEventListTitleBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;
  display: flex;
  flex-wrap: nowrap;
  gap: 5rem;
  align-items: center;
  justify-content: space-between;
`;

const AdminEventItemTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AdminEventItem = styled.b``;

const AdminEventListTitleComponent = () => {
  return (
    <AdminEventListTitleBlock>
      <AdminEventItemTitleWrapper>
        <AdminEventItem>번호</AdminEventItem>
        <AdminEventItem>카테고리</AdminEventItem>
        <AdminEventItem>작성자</AdminEventItem>
        <AdminEventItem>제목</AdminEventItem>
        <AdminEventItem>이벤트 시작일</AdminEventItem>
        <AdminEventItem>이벤트 종료일</AdminEventItem>
        <AdminEventItem>등록일</AdminEventItem>
        <AdminEventItem>수정일</AdminEventItem>
        <AdminEventItem>조회수</AdminEventItem>
      </AdminEventItemTitleWrapper>
    </AdminEventListTitleBlock>
  );
};

export default AdminEventListTitleComponent;
