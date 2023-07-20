import React from 'react'
import styled from 'styled-components'

const SelectSeatWrap = styled.div`
  width: 100%;
  height: 640px;
  background: #000;
`;

const SelectInfo = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding-top: 10px;

  p{
    text-align: center;
    color: #fff;
    font-size: 11px;
  }
`;

const Screen = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 30px;

  div{
    padding: 5px;
    background: #6e6e6e;
    text-align: center;
    color: #fff;
    letter-spacing: 5px;
  }
`;

const Seat = styled.div`
  display: flex;
  justify-content: center;
  width: 650px;
  margin: 0 auto;
  color: #fff;

  li{
    position: relative;
  }

  p{
    position: absolute;
    left: -20px;
    top: 5px;
    display: inline-block;
    font-size: 12px;
  }

  span{
    display: inline-block;
    width: 21px;
    height: 16px;
    background: #e8e8e8;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    text-align: center;
    line-height: 16px;
    color: #000;
    font-size: 10px;
    cursor: pointer;
    margin-right: 5px;
  }
`;

const SelectSeat = () => {
  const seatRow = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatCol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <>
        <SelectSeatWrap>
          <SelectInfo>
            <p>- 좌석 선택 후 결제하기 버튼을 클릭하세요</p>
          </SelectInfo>
          <Screen>
            <div>
              S C R E E N
            </div>
          </Screen>
          <Seat>
              <ul>
                {seatRow.map((row, rowIndex) => (
                  <li key={rowIndex}>
                    <p>{row}</p>
                    {seatCol.map((col, colIndex) => (
                      <span key={colIndex}>{col}</span>
                    ))}
                  </li>
                ))}
              </ul>
          </Seat>
        </SelectSeatWrap>
    </>
  )
}

export default SelectSeat