import React from "react";
import styled from "styled-components";

const CustomButton = ({ title1, title2 }) => {
  return (
    <CustomButtonBlock>
      <p className="btnText">{title1}</p>
      <div className="btnTwo">
        <p className="btnText2">{title2}</p>
      </div>
    </CustomButtonBlock>
  );
};

const CustomButtonBlock = styled.div`
  background: #3d4c53;
  margin: 20px auto;
  width: 8rem;
  min-height: 3rem;
  overflow: hidden;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

  > .btnTwo {
    position: relative;
    width: 8rem;
    min-height: 2rem;
    margin-top: -100px;
    padding-top: 2px;
    background: #26a69a;
    left: -250px;
    transition: 0.3s;
    > .btnText2 {
      margin-top: 63px;
      margin-right: -130px;
      color: #fff;
    }
  }
  > .btnText {
    color: white;
    transition: 0.3s;
  }

  &:hover .btnTwo {
    left: -130px;
  }
  &:hover .btnText {
    margin-left: 65px;
  }
  &:active {
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);
  }
`;

export default CustomButton;
