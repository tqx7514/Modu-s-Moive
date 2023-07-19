import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { changeField, initializeForm, login } from "../../modules/auth";
import { check } from "../../modules/user";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from "../../../node_modules/react-router-dom/dist/index";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8080,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { id, password } = form;
    console.log("id", id);
    if (id === "") {
      toast.error("아이디를 입력해 주세요", toastOptions);
    } else if (password === "") {
      toast.error("비밀번호를 입력해 주세요", toastOptions);
    } else {
      dispatch(login({ id, password }));
    }
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError("로그인 실패");
      toast.error("아이디 또는 비밀번호를 잘못 입력하셨습니다.", toastOptions);
      return;
    }
    if (auth) {
      dispatch(check({}));
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      const { from } = location.state || { from: { pathname: "/" } };
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("로칼스토리지는 일안하는중~");
      }
      navigate(from);
    }
  }, [navigate, user, location.state]);
  

  return (
    <div>
      <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
