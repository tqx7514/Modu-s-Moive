import React from 'react'
import styled from 'styled-components';

const PayBtnWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 58px;
    background: #888;
`;

const PayBtn = styled.div`
    height: 100%;

    button{
        display: inline-block;
        width: 180px;
        height: 100%;
        border: none;
        bacground: #fff;
        font-size: 17px;
        cursor: pointer;
        &.pay{
            background: #ff1744;
            color: #fff;
        }

        b{
            color: #0e9ff9;
            font-size: 19px;
        }
    }
`;

const SelectPayBtn = () => {
  return (
    <PayBtnWrap>
        <div>
            <p>총 합계</p>
            <h3>0 원</h3>
        </div>
        <PayBtn>
            <button className='pay'>결제하기</button>
            <button className='lPay'>
                <b>L.PAY</b> 결제하기
            </button>
        </PayBtn>
    </PayBtnWrap>
  )
}

export default SelectPayBtn;