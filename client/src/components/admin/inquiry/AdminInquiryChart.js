import { styled } from "styled-components";
import { AdminChartTitle } from "../../common/admin/AdminTitle";
const AdminInquiryChart = () => {
  return (
    <AdminInquiryChartBlock>
      <ChartBlock>
        <AdminChartTitle title="문의비율" />
      </ChartBlock>
    </AdminInquiryChartBlock>
  );
};

const AdminInquiryChartBlock = styled.div`
  flex: 1;
`;
const ChartBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 0 1rem;
`;

export default AdminInquiryChart;
