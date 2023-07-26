import { styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";
const MyPageInfoWithDraw = ({
  checked,
  handleCheckBox,
  onWithdrawClick,
  userId,
}) => {
  const navigate = useNavigate();
  return (
    <MyPageInfoWithDrawBlock>
      <h2>유의사항</h2>
      <hr />
      <div>
        - 모두의무비 아이디를 탈퇴하시면 서비스 부정 이용 방지를 위하여 제휴사
        회원정책에 따라 일정 기간 동안 회원 재 가입이 불가합니다.
      </div>
      <div>
        - 모두의무비 제휴사 탈퇴 시, 제휴사에서 사용하시던
        <span> 포인트, 쿠폰 및 엘스탬프</span> 등은 복원할 수 없습니다.
      </div>
      <div>
        - 모두의무비 제휴사에서 진행중인 주문 또는 이용중인 서비스가 있을 경우
        탈퇴가 불가합니다.
      </div>
      <div>
        - 모두의무비 전체탈회를 하시려면 카드해지를 먼저 완료 한 뒤 아이디
        탈퇴를 진행해야합니다. ※ 카드해지 탈퇴 즉시 개인정보가 삭제되면, 어떠한
        방법으로도 복원할 수 없습니다. (전자상거래 서비스 등의 거래내역은
        전자상거래 등에서의 소비자보호에 관한 법률에 의거하여 보호됩니다.)
      </div>
      <div>
        - 모두의무비 아이디를 탈퇴하시면 모두페이 결제취소가 불가능합니다.
      </div>
      <hr />
      <SCustomCheckboxWrapper>
        <SCustomCheckbox type="checkbox" isChecked={checked} />
        <SCustomLabel onClick={handleCheckBox} isChecked={checked} />
        <div onClick={handleCheckBox} className="checklabel">
          &nbsp;&nbsp;&nbsp;&nbsp; 위 유의사항을 모두 확인하였고 회원탈퇴에
          동의합니다.
        </div>
      </SCustomCheckboxWrapper>
      <ButtonWrapper>
        <Button onClick={() => navigate("/")}>취소</Button>
        <WithDrawButton onClick={() => onWithdrawClick(userId)}>
          탈퇴
        </WithDrawButton>
      </ButtonWrapper>
    </MyPageInfoWithDrawBlock>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.div`
  color: #fff;
  background-color: #333;
  padding: 0 10px;
  min-width: 9.375rem;
  height: 40px;
  line-height: 40px;
  border-radius: 2px;
  text-align: center;
  margin: 1rem 0.2rem 0 0;
  font-size: 1rem;
  cursor: pointer;
`;

const WithDrawButton = styled(Button)`
  background-color: #ee1c25;
`;

const MyPageInfoWithDrawBlock = styled.div`
  > hr {
    margin: 0.2rem 0 2rem 0;
  }

  > div {
    margin: 0 0 1rem 0.5rem;
    font-size: 1.2rem;
    color: gray;
    > span {
      font-weight: bold;
    }
  }
`;
const SCustomCheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  > .checklabel {
    cursor: pointer;
  }
`;

const SCustomCheckbox = styled.input`
  visibility: hidden;
  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: #66bb6a;
          border-color: #66bb6a;
          &:after: {
            opacity: 1;
          }
        `
      : null}
`;

const SCustomLabel = styled.label`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 28px;
  height: 28px;
  position: absolute;
  left: 0;
  top: 0;
  ${({ isChecked }) => {
    return isChecked
      ? css`
          background-color: #66bb6a;
          border-color: #66bb6a;
          &:after {
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            content: "";
            height: 6px;
            left: 7px;
            position: absolute;
            top: 8px;
            transform: rotate(-45deg);
            width: 12px;
          }
        `
      : css`
          background-color: #fff !important;
          &:after {import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

            opacity: 1;
          }
        `;
  }}
`;

export default MyPageInfoWithDraw;
