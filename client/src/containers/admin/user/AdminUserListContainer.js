import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { userList, userDel, updateGrade, initialize } from "../../../modules/admin/adminuser";
import Adminuser from "../../../components/admin/users/Adminuser";
import Swal from "sweetalert2";

const AdminUserListContainer = () => {
  const dispatch = useDispatch();
  const { userlists, count, loading, lastPage } = useSelector(
    ({ adminuser, loading }) => ({
      userlists: adminuser.userlists,
      count: adminuser.count,
      loading: loading["/admin/USER_LIST"],
      userlist: adminuser.userlist,
      lastPage: adminuser.lastPage,
    })
  );

  console.log("userlist===================+>", userlists);

  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(1);
  const [detail, setDetail] = useState(false);
  useEffect(() => {
    dispatch(userList({ page, category }));
    return () => {
      dispatch(initialize());
    };
  }, [page, category]);

  const handleAllClick = () => {
    setCategory(1);
    setPage(1);
  };
  const handleUndoneClick = () => {
    setCategory(3);
    setPage(1);
  };
  const handleDoneClick = () => {
    setCategory(2);
    setPage(1);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePreviousPage = () => {
    setPage(page - 1);
  };
  const handleDetailClick = () => {
    setDetail(!detail);
  };

  const onDelete = async (id) => {
    Swal.fire({
      title: "회원삭제",
      text: `회원정보를 삭제하시겠습니까?`,
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "확인",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        console.log("id========+>", id);
        dispatch(userDel({ id }));
        setTimeout(() => {
          dispatch(userList({ page, category }));
        }, 200);
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "회원정보가 삭제되었습니다.",
        });
      }
    });
  };

  return (
    <Adminuser
      userlist={userlists}
      onDelete={onDelete}
      count={count}
      loading={loading}
      category={category}
      onAllClick={handleAllClick}
      onUndoneClick={handleUndoneClick}
      onDoneClick={handleDoneClick}
      lastPage={lastPage}
      currentPage={page}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      detail={detail}
      handleDetailClick={handleDetailClick}
    />
  );
};

export default AdminUserListContainer;
