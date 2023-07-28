import { styled } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { updateInfo } from "../../lib/api/auth";
import Swal from "sweetalert2";

const MyPageInfoEdit = ({ info, click }) => {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8080,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [editPW, setEditPW] = useState(false);
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [pwError, setPwError] = useState(null);
  const [pwConfirmError, setPwConfirmError] = useState(null);
  const [email, setEmail] = useState(info.email);
  const [tel, setTel] = useState(info.tel);
  const [age, setAge] = useState(info.age);
  const [gender, setGender] = useState(info.gender);

  const onEditPWClick = () => {
    setEditPW(!editPW);
  };
  const handlePwChange = (e) => {
    setPw(e.target.value);
    if (e.target.value.length < 8) {
      console.log("에러");
      setPwError("비밀번호는 8글자 이상이어야 합니다");
    } else {
      setPwError(null);
    }
  };
  const handlePwConfirmChange = (e) => {
    setPwConfirm(e.target.value);
    if (pw !== e.target.value) {
      setPwConfirmError("비밀번호가 일치하지 않습니다");
    } else {
      setPwConfirmError(null);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleTelChange = (e) => {
    setTel(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleValidation = () => {
    if (editPW) {
      if (pw.length < 8) {
        toast.error("패스워드는 8글자 이상이어야합니다.", toastOptions);
        return false;
      } else if (pw !== pwConfirm) {
        toast.error(
          "비밀번호와 비밀번호확인이 일치하지않습니다.",
          toastOptions
        );
        return false;
      }
    }

    if (email === "") {
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
    console.log("아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ");
    const id = info.id;
    if (handleValidation()) {
      Swal.fire({
        title: "회원정보수정",
        text: "정말로 수정하시겠습니까?",
        showCancelButton: true,
        confirmButtonText: "확인",
        cancelButtonText: "취소",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          updateInfo({ id, pw, email, tel, age, gender });
          click();
        },
      }).then((res) => {
        if (res.isConfirmed) {
          Swal.fire({
            icon: "success",
            text: "수정 성공 / 마이페이지 홈으로 돌아갑니다",
          });
        }
      });
    }
  };

  return (
    <>
      <MyPageInfoEditBlock>
        <span>회원정보입력</span>
        <StyledHR />
        <InfoBlock>
          <div className="infoline">
            <div className="name">이름</div>
            <div className="value">{info.name}</div>
          </div>
          <div className="infoline">
            <div className="name">아이디</div>
            <div className="value">{info.id}</div>
          </div>
          <div className="infoline">
            <div className="name">비밀번호</div>
            <div className="pwArea">
              <div className="value">
                {!editPW && <span>********</span>}
                {!editPW && <Button onClick={onEditPWClick}>변경</Button>}
              </div>
              {editPW && (
                <div>
                  <StyledInput
                    name="password"
                    type="password"
                    onChange={handlePwChange}
                    value={pw}
                    placeholder="비밀번호를 입력해주세요"
                    style={{ marginBottom: "0.5rem" }}
                  />
                  <div className="message">{pwError}</div>
                  <StyledInput
                    name="passwordConfirm"
                    type="password"
                    onChange={handlePwConfirmChange}
                    value={pwConfirm}
                    placeholder="비밀번호확인"
                  />
                  <div className="message">{pwConfirmError}</div>
                </div>
              )}
            </div>
          </div>
          <div className="infoline">
            <div className="name">이메일</div>
            <StyledInput
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="infoline">
            <div className="name">휴대폰번호</div>
            <StyledInput
              name="tel"
              type="tel"
              value={tel}
              onChange={handleTelChange}
            />
          </div>
          <div className="infoline">
            <div className="name">나이</div>
            <StyledInput
              name="age"
              type="number"
              value={age}
              onChange={handleAgeChange}
            />
          </div>
          <div className="infoline" id="last">
            <div className="name">성별</div>
            <input
              type="radio"
              name="gender"
              onChange={handleGenderChange}
              checked={gender === "남자"}
              value="남자"
            />
            <label>남자</label>
            <input
              type="radio"
              name="gender"
              onChange={handleGenderChange}
              checked={gender === "여자"}
              value="여자"
            />
            <label>여자</label>
          </div>
        </InfoBlock>
        <ButtonWrapper>
          <Button2 onClick={() => navigate("/")}>취소</Button2>
          <EditButton type="submit" onClick={onSubmit}>
            수정
          </EditButton>
        </ButtonWrapper>
      </MyPageInfoEditBlock>
      <ToastContainer />
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Button2 = styled.div`
  color: #fff;
  background-color: #333;
  padding: 0 10px;
  min-width: 9.375rem;
  height: 40px;
  line-height: 40px;
  border-radius: 2px;
  text-align: center;
  margin: 1rem 0.2rem 0 0;
  font-size: 1rem;
  cursor: pointer;
`;

const EditButton = styled(Button2)`
  background-color: #ee1c25;
`;
const MyPageInfoEditBlock = styled.div`
  margin: 2rem 0 0 0;

  > span {
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`;
const Button = styled.div`
  color: #fff;
  background-color: #333;
  padding: 0 10px;
  min-width: 5.375rem;
  height: 30px;
  line-height: 30px;
  border-radius: 2px;
  text-align: center;
  margin: 0 0 0 1rem;
  font-size: 1rem;
  cursor: pointer;
`;

const StyledHR = styled.hr`
  margin: 0.3rem 0 0 0;
  border: 0.5px solid black;
`;

const InfoBlock = styled.div`
  > .infoline {
    display: flex;
    min-height: 5rem;
    align-items: center;
    border-bottom: 1px solid lightgray;
    .message {
      color: red;
      font-size: 13px;
    }
    .name {
      width: 15%;
      color: gray;
    }
    .value {
      display: flex;
      align-items: center;
      flex: 1;
    }
    > label {
      margin-right: 0.5rem;
    }
  }
  #last {
    border-bottom: 2.5px solid black;
  }
`;

const StyledInput = styled.input`
  flex: 1;
  font-size: 1rem;
  border: none;
  outline: none;
  width: 100%;
  height: 34px;
  margin: 0;
  color: #8a8a8a;
  background-color: #f0f0f0;
  border-radius: 5px;
  &:focus {
    color: black;
    border-radius: 10px;
    background-color: white;
    border: 3px solid pink;
  }
`;

export default MyPageInfoEdit;
