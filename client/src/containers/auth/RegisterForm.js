import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { changeField, initializeForm, register } from "../../modules/auth";
import { useNavigate } from "react-router-dom";
import { check } from "../../modules/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
import * as authAPI from "../../lib/api/auth";

// 프론트에서 쿠키 설정 ( 지금은 백에서 설정해서 안쓰지만 추후에 쓸수도있어 놔둠 )
// import { Cookies } from "react-cookie";
// const cookies = new Cookies();

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const [isDuplicated, setIsDuplicated] = useState(false);
  const [checkError, setCheckError] = useState("중복확인 해주세요");
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8080,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const handleCheckDuplicate = (e) => {
    e.preventDefault();
    const { id } = form;
    authAPI
      .checkDuplicate({ id })
      .then((response) => {
        // 중복확인 성공 시 처리 로직 작성
        const isDuplicate = response.data; // 백에서 넘어온 중복 여부 값
        if (isDuplicate) {
          // 중복된 아이디인 경우
          setCheckError("중복된 아이디입니다.");
          setIsDuplicated(false);
        } else {
          // 중복되지 않은 아이디인 경우
          setCheckError("사용가능한 아이디입니다.");
          setIsDuplicated(true);
        }
      })
      .catch((error) => {
        // 중복확인 실패 시 처리 로직 작성
        console.error("중복확인 요청 실패:", error);
        setIsDuplicated(false);
      });
  };

  useEffect(() => {
    setIsDuplicated(false);
    setCheckError("중복확인 해주세요");
  }, [form.id]);

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
  const handleValidation = () => {
    const { id, name, password, passwordConfirm, email, tel, age, gender } =
      form;
    if (id.length < 3) {
      toast.error("아이디는 3글자 이상이어야합니다.", toastOptions);
      return false;
    } else if (name === "") {
      toast.error("이름은 비어있으면 안됩니다.", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("패스워드는 8글자 이상이어야합니다.", toastOptions);
      return false;
    } else if (password !== passwordConfirm) {
      toast.error("비밀번호와 비밀번호확인이 일치하지않습니다.", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("이메일은 비어있으면 안됩니다.", toastOptions);
      return false;
    } else if (tel === "") {
      toast.error("전화번호는 비어있으면 안됩니다.", toastOptions);
      return false;
    } else if (age === "") {
      toast.error("나이는 비어있으면 안됩니다.", toastOptions);
      return false;
    } else if (gender === "") {
      toast.error("성별은 비어있으면 안됩니다.", toastOptions);
      return false;
    }
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { id, name, password, passwordConfirm, email, tel, age, gender } =
      form;
    if (!isDuplicated) {
      // 중복확인을 통과하지 않았을 경우 처리
      // alert("중복확인을 해주세요!");
      toast.error("중복확인해주세요.", toastOptions);
      console.log("ddddddddddddddddddddddddddddddddddd");
      return;
    }
    if (!handleValidation()) {
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
    dispatch(register({ id, name, password, email, tel, age, gender }));
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
        console.error(e);
      }
    }
  }, [user, navigate]);

  return (
    <>
      <AuthForm
        type="register"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
        handleCheckDuplicate={handleCheckDuplicate}
        checkError={checkError}
        isDuplicate={isDuplicated}
      />
      <ToastContainer />
    </>
  );
};

export default RegisterForm;
