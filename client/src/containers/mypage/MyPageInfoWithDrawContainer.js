import { styled } from "styled-components";
import { useState } from "react";
import MyPageInfoWithDraw from "../../components/mypage/MyPageInfoWithDraw";
import Swal from "sweetalert2";
import { withdraw } from "../../lib/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../modules/user";

const MyPageInfoWithDrawContainer = () => {
  const { userId } = useSelector(({ user }) => ({
    userId: user && user.user.id,
  }));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const handleCheckBox = () => {
    setChecked(!checked);
  };
  const onWithdrawClick = (id) => {
    console.log("ssssssssss", id);
    if (checked === false) {
      Swal.fire({
        text: "동의사항을 체크하십시오",
      });
    } else {
      Swal.fire({
        title: "회원탈퇴",
        text: "모두의무비를 정말 탈퇴하시겠습니까?",
        showCancelButton: true,
        cancelButtonText: "아니오",
        confirmButtonText: "네. 탈퇴합니다",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          navigate("/");
          withdraw({ id });
          dispatch(logout());
        },
      }).then((res) => {
        if (res.isConfirmed) {
          Swal.fire({
            icon: "success",
            text: "탈퇴 성공",
          });
        }
      });
    }
  };
  return (
    <MyPageInfoWithDrawContainerBlock>
      <MyPageInfoWithDraw
        checked={checked}
        handleCheckBox={handleCheckBox}
        onWithdrawClick={onWithdrawClick}
        userId={userId}
      />
    </MyPageInfoWithDrawContainerBlock>
  );
};
const MyPageInfoWithDrawContainerBlock = styled.div`
  margin: 1.5rem 0 0 0;
`;

export default MyPageInfoWithDrawContainer;
