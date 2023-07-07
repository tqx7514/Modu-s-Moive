import React from "react";
import { styled } from "styled-components";
import Button from "../../common/Button";
import Input from "../../common/Input";

const MeetBoardBlock = styled.div``;
const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 0 0;
  height: 5rem;
`;

const CustomInput = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
`;

const CustomButton = styled(Button)`
  padding: 0.4rem 2rem 0.5rem 2rem;
  font-weight: normal;
  width: 15%;
`;

const MeetDetailBoard = () => {
  return (
    <MeetBoardBlock>
      <ButtonBlock>
        <CustomInput />
        <CustomButton>글쓰기</CustomButton>
      </ButtonBlock>
    </MeetBoardBlock>
  );
};

export default MeetDetailBoard;
