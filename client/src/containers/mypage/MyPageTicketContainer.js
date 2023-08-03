import React, { useEffect } from "react";
import MypageTicket from "../../components/mypage/MypageTicket";
import { useDispatch } from "react-redux";
import { getUsingSeat } from "../../modules/stepsecond";
import { readMovie } from "../../modules/stepfirst";

const MyPageTicketContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsingSeat());
    setTimeout(() => {
      
      dispatch(readMovie());
    }, 100);
  }, [dispatch]);
  return (
    <div>
      <MypageTicket />
    </div>
  );
};

export default MyPageTicketContainer;
