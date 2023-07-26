import { styled } from "styled-components";
import AdminTitle from "../../common/admin/AdminTitle";
import Responsive from "../../common/Responsive";

const AdminInquiry = ({ inquiry, count }) => {
  return (
    <AdminInquiryBlock>
      <HeaderBlock>
        <AdminTitle title="문의관리" />
        <div className="count">
          문의 총 <span>{count}</span>개
        </div>
      </HeaderBlock>
    </AdminInquiryBlock>
  );
};

const AdminInquiryBlock = styled(Responsive)``;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 2rem 1rem 2rem;
  border-bottom: 2px solid black;
  align-items: center;
  > div {
    font-size: 1.4rem;
    font-weight: bold;
    > span {
      color: #ee1c25;
    }
  }
`;

export default AdminInquiry;
