import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getDiscount, getTotalPrice, getUsingSeat, setPerson, setSelectedSeat } from "../../../modules/stepsecond";
import { Link } from "../../../../node_modules/react-router-dom/dist/index";
import { setData } from "../../../modules/stepfirst";

const PayCompImg = styled.img`
  display: block;
  margin: 20px auto 10px;
`;
const PayNotice = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 450;
`;
const PayInfoWrap = styled.div`
  position: relative;
  width: 690px;
  height: 400px;
  margin: 0 auto;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;

  &:after{
    content: '';
    position: absolute;
    left: 50%;
    bottom: -1px;
    transform: translateX(-50%);
    width: calc(100% - 20px);
    height: 6px;
    background: url(/bg_ticket.gif);
  }

  .payInfoTop {
    border-bottom: 1px solid #ddd;
    padding-bottom: 30px;
  }
  .payInfoBot {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }

  img {
    width: 150px;
    margin-right: 40px;
    border-radius: 5px;
  }
`;

const ReserveInfo = styled.div`
  float: right;
  width: calc(100% - 190px);

  .ticketNum {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #000;

    p {
      margin-right: 40px;
    }
    b {
      font-size: 15px;
    }
  }
  .ticketInfo {
    li {
      display: flex;
      align-items: center;
      margin-top: 5px;

      p {
        width: 100px;
      }
      span {
        color: #888;
      }
    }
  }
  button {
    display: block;
    margin: 15px auto 0;
    border: none;
    background: #ff243e;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const PayInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  p {
    width: 100px;
  }
  img {
    width: 20px;
    margin-left: 35px;
  }
`;
const PayMethod = styled.div`
  float: right;
  display: flex;
  align-items: center;
  margin-top: 15px;

  span {
    display: block;
    margin-right: 100px;
    padding: 3px 7px;
    background: #aaa;
    border-radius: 5px;
    text-align: center;
    font-size: 12px;
    color: #fff;
  }
  p {
    font-size: 13px;
  }
`;
const Warring = styled.ul`
  width: 690px;
  margin: 20px auto 0;
  padding-left: 10px;

  li{
    position: relative;
    font-size: 11px;
    color: #333;
    &.red{
        color: #ff243e;
    }
    &:after{
        content: '';
        position: absolute;
        left: -10px;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 3px;
        background: #666;
        border-radius: 100%;
    }
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;

  a{
    width: 150px;
    height: 40px;
    padding-top:6px;
    border: 1px solid #000;
    border-radius: 5px;
    text-align: center;
    margin-right: 5px;
    &.store{
        color: #fff;
        background: #444;
        border: none;
    }
    &.home{
        color: #fff;
        background: #ff243e;
        border: none;
        margin-right: 0;
    }
  }
`;
const PayComp = () => {
  const { user, data, movie, reservation, seat, person, totalPrice, discount } =
    useSelector(({ user, stepfirst, stepsecond }) => ({
      user: user,
      data: stepfirst.data,
      movie: stepfirst.movie,
      reservation: stepsecond.reservation,
      seat: stepsecond.seat,
      person: stepsecond.person,
      totalPrice: stepsecond.totalPrice,
      discount: stepsecond.discount,
    }));

  const dispatch = useDispatch();
  const onReset = useCallback(() => {
    dispatch(setData({key: "cinema", value: ""}));
    dispatch(setData({key: "time", value: ""}));
    dispatch(setPerson(''));
    dispatch(setSelectedSeat(null));
    dispatch(getDiscount(0));
    dispatch(getTotalPrice(0));
  }, [dispatch])
  useEffect(() => {
    dispatch(getUsingSeat());
  }, [dispatch]);

  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

  const selectedMovie = movie.find(
    (movieObj) => movieObj.movie_name === data.time.movie_name
  );

  const personContent = person?.slice(0).join(", ");
  const seatContent = seat?.slice(0).join(",");

  const checkTicket = reservation.filter(
    (ticket) =>
      ticket.user_id === user.user.id &&
      ticket.date === data.date &&
      ticket.start === data.time.start &&
      ticket.seat === seatContent
  );
  console.log("userrrrrrrrrrrrrrrr", checkTicket);


  const formatPrice = totalPrice?.toLocaleString();
  const totalPriceNumber = parseInt(totalPrice, 10);
  const formatTotalPrice = (
    totalPriceNumber - `${discount ? discount : 0}`
  ).toLocaleString();

  return (
    <div>
      <PayCompImg src="/pay.png" />
      <PayNotice>
        {user && user.user.name} 회원님, 결제가 성공적으로 완료되었습니다.
      </PayNotice>
      <PayInfoWrap>
        <div className="payInfoTop">
          {selectedMovie && (
            <>
              <img src={IMG_BASE_URL + selectedMovie.img} alt="영화포스터"/>
              <ReserveInfo>
                <div className="ticketNum">
                  <p>예매번호</p>
                  <b>{checkTicket && checkTicket[0]?.reserve_num}</b>
                </div>
                <ul className="ticketInfo">
                  <li>
                    <p>상영일시</p>
                    <span>
                      {data.date}({data.day}){data.time.start}~{data.time.end}
                    </span>
                  </li>
                  <li>
                    <p>상영관</p>
                    <span>
                      {data.time.cinema}
                      {data.time.room}관
                    </span>
                  </li>
                  <li>
                    <p>관람인원</p>
                    <span>{personContent}</span>
                  </li>
                  <li>
                    <p>좌석</p>
                    <span>{seatContent}</span>
                  </li>
                </ul>
                <button>휴대폰으로 바로티켓 받기</button>
              </ReserveInfo>
            </>
          )}
        </div>
        <div className="payInfoBot">
          <PayInfo>
            <p>주문금액</p>
            <b>{formatPrice}</b>원
            <img src="/dash.png" alt="-이미지"/>
          </PayInfo>
          <PayInfo>
            <p>할인금액</p>
            <b>{discount}</b>원
            <img src="/equal.png" alt="=이미지"/>
          </PayInfo>
          <PayInfo>
            <p>총 결제 금액</p>
            <b>{formatTotalPrice}</b>원
          </PayInfo>
        </div>
        <PayMethod>
          <span>신용카드</span>
          <p>우리카드</p>
        </PayMethod>
      </PayInfoWrap>
      <Warring>
            <li className="red">온라인 예매 내역 취소는 상영 시작 20분 전까지 온라인에서 가능합니다.</li>
            <li className="red">상영시작 20분전 이후 부터는 영화관 현장에서만 취소 가능합니다.</li>
            <li className="red">
                무대인사, 스페셜상영회, GV, 라이브뷰잉 등 특별 상영 회차의 예매 취소는 
                상영전일 23시 59분 59초까지만 취소 가능합니다.
            </li>
            <li>적립 예정 POINT는 영화 관람 다음 날 적립 됩니다.</li>
            <li>예고편 상영 등 사정에 의해 본 영화 시작이 10여분 정도 차이 날 수 있습니다.</li>
            <li>
                개인정보 보호 정책에 따라 주민번호로 예매 티켓을 찾을 수 없습니다.
                 꼭 예매 번호를 확인해 주세요.
            </li>
            <li>스토어에서 구매한 상품은 마이페이지 > 예매/구매 내역에서 확인 및 사용할 수 있습니다.</li>
      </Warring>
      <BtnWrap>
        <Link to={`/mypage/${user.user.id}`} onClick={onReset} className="mypage">결제내역</Link>
        <Link to="/" onClick={onReset} className="store">스토어 바로가기</Link>
        <Link to="/" onClick={onReset} className="home">홈으로 바로가기</Link>
      </BtnWrap>
    </div>
  );
};

export default PayComp;
