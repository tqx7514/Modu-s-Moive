import React from 'react'
import styled from 'styled-components';

const PayBtnWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 58px;
    padding-left: 30px;
    background: #888;
    
    p{
        display: inline-block;
        color: #fff;
        margin-right: 15px;
    }

    h3{
        display: inline-block;
        color: #fff;
        font-size: 28px;
        padding-bottom: 8px;
    }
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
            <h3>0</h3>
            <p>원</p>
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