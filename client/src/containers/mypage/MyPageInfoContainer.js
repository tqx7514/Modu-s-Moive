import React, { useState } from "react";
import MyPageInfo from "../../components/mypage/MyPageInfo";
import Swal from "sweetalert2";
import { checkPW } from "../../lib/api/auth";
import { useSelector } from "react-redux";

const MyPageInfoContainer = ({ click }) => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const [category, setCategory] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [info, setInfo] = useState(null);
  const handleEditClick = async () => {
    setCategory("Edit");
    try {
      const { value: input } = await Swal.fire({
        title: "비밀번호를 입력해주세요",
        input: "password",
        showCancelButton: true,
        confirmButtonText: "확인",
        cancelButtonText: "취소",
        showLoaderOnConfirm: true,
        preConfirm: async (input) => {
          try {
            const response = await checkPW({
              id: user && user.id,
              password: input,
            });
            setConfirmed(true);
            return response.data; // Assuming the response contains the user info.
          } catch (error) {
            Swal.showValidationMessage("비밀번호가 틀렸습니다");
          }
        },
        allowOutsideClick: () => !Swal.isLoading(),
      });

      if (input) {
        // console.log("UserInfo", input);
        setInfo(input);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleWithdrawClick = () => {
    setCategory("Withdraw");
    setConfirmed(false);
  };
  // console.log("infoooooooooooo", info);
  return (
    <div>
      <MyPageInfo
        category={category}
        onEditClick={handleEditClick}
        onWithdrawClick={handleWithdrawClick}
        confirmed={confirmed}
        info={info}
        click={click}
      />
    </div>
  );
};

export default MyPageInfoContainer;
