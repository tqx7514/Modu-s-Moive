import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { changeField, initializeForm, register } from "../../modules/auth";
import { useNavigate } from "react-router-dom";
import { check } from "../../modules/user";

// import { Cookies } from "react-cookie";

// const cookies = new Cookies();

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { id, password, passwordConfirm, email } = form;
    if ([id, password, passwordConfirm, email].includes("")) {
      setError("빈칸 모두입력하세요");
      return;
    }
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다");
      dispatch(changeField({ form: "register", key: "password", value: "" }));
      dispatch(
        changeField({ form: "register", key: "passwordConfirm", value: "" })
      );
      return;
    }
    dispatch(register({ id, password, email }));
  };
  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  // const setCookie = (value) => {
  //   return cookies.set("accessToken", value);
  // };

  // const getCookie = (name) => {
  //   return cookies.get(name);
  // };

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError("이미 존재하는 계정명입니다.");
        return;
      }
      setError("회원가입 실패");
      return;
    }
    if (auth) {
      console.log("회원가입성공");
      console.log(auth);
      // setCookie(auth.accessToken);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigate("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("로칼스토리지는 일안하는중~");
      }
    }
  }, [user, navigate]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterForm;
