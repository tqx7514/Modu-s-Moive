import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Link } from "../../../node_modules/react-router-dom/dist/index";

const MyticketWrap = styled.div`
  width: 100%;
  min-height: 525px;
  margin: 30px 0;
  padding-top: 30px;
  background: #f8f8f8;

  .infoWrap {
    position: relative;
    width: 100%;
    min-height: calc(525px - 30px);
    padding-left: 180px;
    padding-bottom: 100px;
    &:after {
      content: "";
      position: absolute;
      left: 150px;
      top: 0;
      width: 1px;
      height: 100%;
      border-left: 1px dashed #ccc;
    }
    .infoList {
      position: relative;
      margin-bottom: 20px;
      &.last {
        margin-bottom: 30px;
      }
      &.on{
        &:after{
            width: 11px;
            height: 11px;
            border: 6px solid #ff243e;
        }
      }
      &:after {
        content: "";
        position: absolute;
        left: -41px;
        top: 0;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background: #fff;
        border: 1px solid #ddd;
        z-index: 99;
      }

      .date {
        position: absolute;
        left: -150px;
        top: 0;
        font-size: 12px;
      }

      .simpleInfo {
        display: flex;
        justify-content: space-between;
        width: 100%;

        div {
          display: flex;
          align-items: center;

          h3 {
            margin-right: 15px;
            font-size: 15px;
            font-weight: 500;
          }
          p {
            font-size: 12px;
            margin-right: 20px;
          }
          span {
            font-size: 11px;
            color: #666;
          }
          .open,
          .close {
            border: none;
            background: none;
            font-size: 20px;
            cursor: pointer;
            padding: 0 15px;
          }
        }
      }

      .moreInfo {
        width: 100%;
        margin-top: 20px;
        padding: 20px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;

        .moreTopInfo {
          display: flex;

          img {
            width: 100px;
          }
        }
      }
    }
  }
`;

const MoreInfo = styled.div`
  display: none;
  position: relative;
  width: 100%;
  height: 400px;
  margin: 20px 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  &.open {
    display: block;
  }

  &:after {
    content: "";
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
      margin-top: 15px;

      p {
        width: 100px;
      }
      span {
        color: #888;
      }
      a {
        font-size: 12px;
        padding: 3px 10px;
        border: 1px solid #ddd;
        border-radius: 100px;
        margin-left: 15px;
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

const MypageTicket = () => {
  const [openInfo, setOpenInfo] = useState([]);
  console.log(openInfo);

  const { user, reservation, movie } = useSelector(
    ({ user, stepsecond, stepfirst }) => ({
      user: user.user,
      reservation: stepsecond.reservation,
      movie: stepfirst.movie,
    })
  );

  const handleOpenInfo = (index) => {
    if (openInfo.includes(index)) {
      setOpenInfo(openInfo.filter((item) => item !== index)); // 이미 열려있으면 닫기
    } else {
      setOpenInfo([...openInfo, index]); // 아니면 열기
    }
  };

  const findUser = reservation.filter((r) => r.user_id === user.id);

  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

  const formatDate = (dateString) => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dayOfWeek = daysOfWeek[date.getDay()]; // 요일 가져오기
    return `${year}-${month}-${day} (${dayOfWeek})`;
  };

  return (
    <div>
      <MyticketWrap>
        {findUser && findUser.length > 0 ? (
          <>
            <ul className="infoWrap">
              {findUser.map((item, index, array) => {
                const formatPrice = item.price.toLocaleString();
                const formatDiscount = item.discount.toLocaleString();
                const formatTotal = (
                  item.price - item.discount
                ).toLocaleString();

                const currentDate = formatDate(item.createdAt);
                const prevDate =
                  index > 0 ? formatDate(array[index - 1].createdAt) : null;
                const nextDate =
                  index < array.length - 1
                    ? formatDate(array[index + 1].createdAt)
                    : null;

                const lastList =
                  prevDate === currentDate && nextDate !== currentDate;

                return (
                  <li
                    key={index}
                    className={`infoList ${lastList ? "last" : ""} ${
                      openInfo.includes(index) ? "on" : ""
                    }`}
                  >
                    {index === 0 ||
                    formatDate(item.createdAt) !==
                      formatDate(findUser[index - 1].createdAt) ? (
                      <div className="date">
                        <b>{formatDate(item.createdAt)}</b>
                        <b></b>
                      </div>
                    ) : null}
                    <div className="simpleInfo">
                      <div>
                        <h3>{item.movie_name}(디지털)</h3>
                        <p>
                          <b>{formatTotal}</b>원
                        </p>
                        <span>예매번호 {item.reserve_num}</span>
                      </div>
                      <div>
                        {openInfo.includes(index) ? (
                          <button
                            className="close"
                            onClick={() => handleOpenInfo(index)}
                          >
                            <IoIosArrowUp />
                          </button>
                        ) : (
                          <button
                            className="open"
                            onClick={() => handleOpenInfo(index)}
                          >
                            <IoIosArrowDown />
                          </button>
                        )}
                      </div>
                    </div>
                    {openInfo.includes(index) && (
                      <MoreInfo className="open">
                        <div className="moreTopInfo">
                          {movie &&
                            movie.map((movieObj) => {
                              if (movieObj.movie_name === item.movie_name) {
                                return (
                                  <img
                                    key={movieObj.movie_name}
                                    src={IMG_BASE_URL + movieObj.img}
                                  />
                                );
                              }
                              return null;
                            })}
                          <ReserveInfo>
                            <ul className="ticketInfo">
                              <li>
                                <p>상영일시</p>
                                <span>{formatDate(item.date)}</span>
                                <span style={{ marginLeft: "15px" }}>
                                  {item.start}~{item.end}
                                </span>
                              </li>
                              <li>
                                <p>상영관</p>
                                <span>
                                  {item.cinema}
                                  {item.room}관
                                </span>
                                <Link to={`/cinema/?${item.cinema}`}>
                                  상영관보기
                                </Link>
                              </li>
                              <li>
                                <p>관람인원</p>
                                <span>{item.person}</span>
                              </li>
                              <li>
                                <p>좌석</p>
                                <span>{item.seat}</span>
                              </li>
                            </ul>
                            <button>휴대폰으로 바로티켓 받기</button>
                          </ReserveInfo>
                          <div className="payInfoBot">
                            <PayInfo>
                              <p>주문금액</p>
                              <b>{formatPrice}</b>원
                              <img src="/dash.png" alt="-이미지" />
                            </PayInfo>
                            <PayInfo>
                              <p>할인금액</p>
                              <b>{formatDiscount}</b>원
                              <img src="/equal.png" alt="=이미지" />
                            </PayInfo>
                            <PayInfo>
                              <p>총 결제 금액</p>
                              <b>{formatTotal}</b>원
                            </PayInfo>
                          </div>
                          <PayMethod>
                            <span>신용카드</span>
                            <p>우리카드</p>
                          </PayMethod>
                        </div>
                      </MoreInfo>
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <h1>예매내역이 없습니다.</h1>
        )}
      </MyticketWrap>
    </div>
  );
};

export default MypageTicket;
