import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;
const StyledInput = styled.input`
  flex: 1;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const IdArea = styled.div`
  display: flex;
  align-items: center;
  & > ${StyledInput} {
    flex: 1;
    margin-right: 0.5rem;
  }
  & > button {
    margin-left: 0.5rem;
  }
`;

const ErrorArea = styled.div`
  margin-bottom: 0.1rem;
  color: red;
`;

const PassArea = styled.div`
  margin-bottom: 0.1rem;
  color: green;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthForm = ({
  type,
  form,
  onChange,
  onSubmit,
  error,
  handleCheckDuplicate,
  checkError,
  isDuplicate,
}) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <IdArea>
          <StyledInput
            autoComplete="id"
            name="id"
            placeholder="아이디"
            onChange={onChange}
            value={form.id}
          />
          {type === "register" && (
            <Button type="button" onClick={handleCheckDuplicate}>
              중복확인
            </Button>
          )}
        </IdArea>
        {!isDuplicate ? (
          <ErrorArea>{checkError}</ErrorArea>
        ) : (
          <PassArea>{checkError}</PassArea>
        )}

        <br />
        {type === "register" && (
          <>
            <StyledInput
              autoComplete="name"
              name="name"
              placeholder="이름"
              onChange={onChange}
              value={form.name}
            />
          </>
        )}
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "register" && (
          <>
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
            <StyledInput
              name="email"
              placeholder="이메일"
              type="email"
              onChange={onChange}
              value={form.email}
            />
            <StyledInput
              name="tel"
              placeholder="전화번호"
              type="tel"
              onChange={onChange}
              value={form.tel}
            />
            <StyledInput
              name="age"
              placeholder="나이"
              type="number"
              onChange={onChange}
              value={form.age}
            />
            <input
              type="radio"
              name="gender"
              onChange={onChange}
              checked={form.gender === "남자"}
              value="남자"
            />
            <label>남자</label>

            <input
              type="radio"
              name="gender"
              onChange={onChange}
              checked={form.gender === "여자"}
              value="여자"
            />
            <label>여자</label>
            <br />
          </>
        )}
        {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
        <ButtonWithMarginTop
          cyan="true"
          fullwidth="true"
          style={{ marginTop: "1rem" }}
        >
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
