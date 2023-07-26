import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "../../../../node_modules/react-router-dom/dist/index";

const PayBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 58px;
  padding-left: 30px;
  background: #888;

  p {
    display: inline-block;
    color: #fff;
    margin-right: 15px;
  }

  h3 {
    display: inline-block;
    color: #fff;
    font-size: 28px;
    padding-bottom: 5px;
  }
`;

const PayBtn = styled.div`
  height: 100%;

  a {
    display: inline-block;
    width: 180px;
    height: 100%;
    padding-top: 16px;
    border: none;
    background: #fff;
    text-align: center;
    font-size: 17px;
    cursor: pointer;
    &.pay {
      background: #ff1744;
      color: #fff;
    }

    b {
      color: #0e9ff9;
      font-size: 19px;
    }
  }
`;

const SelectPayBtn = () => {
  const {number, totalPrice, seat} = useSelector(({stepsecond}) => stepsecond);

  const handlePayBtn = (e) => {
    if(!number || !seat || number !== seat.length){
      e.preventDefault();
      alert('좌석을 다시 선택해주세요');
    }
  };

  const formatPrice = totalPrice?.toLocaleString();
  return (
    <PayBtnWrap>
      <div>
        <p>총 합계</p>
        <h3>
          {totalPrice ? formatPrice : 0}
        </h3>
        <p>원</p>
      </div>
      <PayBtn>
        <Link 
          to="/ticket/pay" 
          className="pay"
          onClick={(e) => handlePayBtn(e)}
        >결제하기</Link>
        <Link 
          to="/ticket/pay" 
          className="lPay"
          onClick={(e) => handlePayBtn(e)}
        >
          <b>L.PAY</b> 결제하기
        </Link>
      </PayBtn>
    </PayBtnWrap>
  );
};

export default SelectPayBtn;
