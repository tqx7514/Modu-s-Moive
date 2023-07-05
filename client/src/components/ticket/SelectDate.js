import React from 'react'
import styled from 'styled-components';

const SelectDate = () => {
    const StepDateTime = styled.div`
    width: 40%;
    height: 100%;
    background: #fff;
  `;
  const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  color: #fff;
  background: #000;
  font-size: 18px;
  font-weight: 400;
  vertical-align: middle;
  border-right: 1px solid #222;
`;

  return (
    <>
        <StepDateTime>
            <Title>2023-06-26(오늘)</Title>
        </StepDateTime>
    </>
  )
}

export default SelectDate