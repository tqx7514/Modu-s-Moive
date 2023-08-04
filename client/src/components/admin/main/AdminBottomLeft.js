import { styled } from "styled-components";
import { AdminBlock2 } from "../../../containers/admin/inquiry/AdminInquiryContainer";
import AdminMonthChart from "./AdminMonthChart";

const AdminBottomLeftBlock = styled.div`
  border-radius: 5px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  background-color: #fff;
  > .title {
    font-size: 1.1rem;
    padding: 0.4rem 0rem 0.4rem 0.5rem;
    border-bottom: 0.2px solid lightgray;
    margin-bottom: 1rem;
  }
`;

const AdminBottomLeft = () => {
  return (
    <AdminBottomLeftBlock>
      <div className="title">월별 매출 차트</div>
      <AdminBlock2>
        <AdminMonthChart />
      </AdminBlock2>
    </AdminBottomLeftBlock>
  );
};

export default AdminBottomLeft;
