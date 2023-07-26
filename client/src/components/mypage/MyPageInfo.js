import { styled } from "styled-components";
import MyPageInfoEditContainer from "../../containers/mypage/MyPageInfoEditContainer";
import MyPageInfoWithDrawContainer from "../../containers/mypage/MyPageInfoWithDrawContainer";

const MyPageInfo = ({
  category,
  onEditClick,
  onWithdrawClick,
  confirmed,
  info,
  click,
}) => {
  const shouldShowEditContainer = category === "Edit" && confirmed === true;
  return (
    <MyPageInfoBlock>
      <CategoryBlock>
        <div
          style={category === "Edit" ? activeStyle : undefined}
          onClick={onEditClick}
        >
          <img src="/Profile.png" alt="" />
          회원정보변경
        </div>
        <div
          style={category === "Withdraw" ? activeStyle : undefined}
          onClick={onWithdrawClick}
        >
          <img src="/Withdraw.png" alt="" />
          회원탈퇴
        </div>
      </CategoryBlock>
      {shouldShowEditContainer && (
        <MyPageInfoEditContainer info={info} click={click} />
      )}
      {category === "Withdraw" && <MyPageInfoWithDrawContainer />}
    </MyPageInfoBlock>
  );
};
const MyPageInfoBlock = styled.div`
  margin: 3rem 0 0 0;
`;

const CategoryBlock = styled.div`
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    background: #f8f8f8;
    width: 188px;
    height: 126px;
    cursor: pointer;

    > img {
      margin-right: 0.5rem;
    }

    &:hover {
      background: lightsteelblue;
    }
  }
`;
const activeStyle = {
  fontWeight: "bold",
  background: "lightsteelblue",
};

export default MyPageInfo;
