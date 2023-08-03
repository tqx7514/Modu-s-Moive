import { styled } from "styled-components";

const AdminBottomRightBlock = styled.div`
  border-radius: 5px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  /* margin-bottom: 2rem; */
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  background-color: #fff;
  > .title {
    font-size: 1.1rem;
    padding: 0.4rem 0rem 0.4rem 0.5rem;
    border-bottom: 0.2px solid lightgray;
  }
`;

const AdminBottomRight = () => {
  return (
    <AdminBottomRightBlock>
      <div className="title">영화별 매출 차트</div>
    </AdminBottomRightBlock>
  );
};

export default AdminBottomRight;
