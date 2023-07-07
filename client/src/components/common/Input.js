import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
`;

const CustomInput = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none; /* 사용자 크기 조정 비활성화 */
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <AppWrapper>
      <InputWrapper>
        <CustomInput value={inputValue} onChange={handleInputChange} />
      </InputWrapper>
    </AppWrapper>
  );
};

export default App;
