import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect, useCallback } from "react";
import {
  readRegion,
  readCinema,
  myCinema,
  DelmyCinema,
  viewCinema,
} from "../../modules/cinema";
import Cinema from "../../components/cinema/Cinema";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import Swal from "sweetalert2";

const CinemaContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { region, cinema, user, viewcinema } = useSelector(
    ({ cinema, user, loading }) => ({
      region: cinema.region,
      cinema: cinema.cinema,
      user: user.user && user.user.id,
      viewcinema: cinema.viewcinema,
    })
  );
  console.log("cinemas======>", cinema);
  console.log("regions======>", region);
  console.log("viewcinema", viewcinema);
  console.log("user", user);

  useEffect(() => {
    dispatch(readRegion());
    dispatch(readCinema());
    dispatch(viewCinema());
  }, [dispatch]);

  const onCreate = async (selectedCinema, selectedAddrDetail) => {
    Swal.fire({
      title: "MY영화관",
      text: `MY 영화관 등록을 하시겠습니까?`,
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "등록",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        dispatch(myCinema({ selectedCinema, selectedAddrDetail, user }));
        setTimeout(() => {
          dispatch(readRegion());
          dispatch(readCinema());
          dispatch(viewCinema());
        }, 200);
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "MY영화관 등록이 완료되었습니다.",
        });
      }
    });
  };

  const onDelete = async (selectedCinema, cinemaId) => {
    Swal.fire({
      title: "MY영화관",
      text: `MY 영화관 등록을 취소하시겠습니까?`,
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "확인",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        dispatch(DelmyCinema({ selectedCinema, cinemaId }));
        setTimeout(() => {
          dispatch(readRegion());
          dispatch(readCinema());
          dispatch(viewCinema());
        }, 200);

        navigate("/cinema");
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "MY영화관 등록이 취소되었습니다.",
        });
      }
    });
  };

  const ownPost = (id) => {
    return user && user === id;
  };

  return (
    <Cinema
      cinema={cinema}
      region={region}
      mycinema={viewcinema}
      user={user}
      onCreate={onCreate}
      onDelete={onDelete}
      ownPost={ownPost}
    />
  );
};

export default CinemaContainer;
