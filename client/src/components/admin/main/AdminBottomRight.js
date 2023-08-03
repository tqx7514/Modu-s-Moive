import { styled } from "styled-components";
import { AdminBlock2 } from "../../../containers/admin/inquiry/AdminInquiryContainer";
import AdminMovieChart from "./AdminMovieChart";

export const AdminBottomRightBlock = styled.div`
  border-radius: 5px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  background-color: #fff;
  margin: 0 0 1rem 1rem;
  > .title {
    font-size: 1.1rem;
    padding: 0.4rem 0rem 0.4rem 0.5rem;
    border-bottom: 0.2px solid lightgray;
  }
`;

const AdminBottomRight = () => {
  return (
    <AdminBottomRightBlock>
      <div className="title">현재 상영중인 영화별 매출 차트</div>
      <AdminBlock2>
        <AdminMovieChart />
      </AdminBlock2>
    </AdminBottomRightBlock>
  );
};

export default AdminBottomRight;
