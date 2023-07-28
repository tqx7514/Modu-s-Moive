import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link, useLocation, useNavigate } from "../../../../node_modules/react-router-dom/dist/index";
import { getUsingSeat } from "../../../modules/stepsecond";

const FirstModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  &.on {
    display: block;
  }
`;

const FirstModalBox = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  min-height: 400px;
  background: #fff;
`;

const FirstModalWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-bottom: 20px;

  span {
    display: block;
    margin-top: 20px;
    letter-spacing: 5px;
    font-size: 12px;
    color: #dbdbdb;
  }
`;

const ModalTime = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  background: #666;
  color: #fff;
  font-size: 18px;
  font-weight: 500;

  button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    background: none;
    border: none;
    font-size: 30px;
    color: #fff;
    cursor: pointer;

    svg {
      display: block;
      height: 100%;
    }
  }
`;

const ModalViewSeat = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  ul {
    li {
      height: 5px;
      position: relative;
      margin-bottom: 2px;
    }
  
    p {
      display: none;
    }
  
    span {
      display: inline-block;
      width: 4px;
      height: 3px;
      background: #000;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      color: #000;
      cursor: pointer;
      text-indent: 100%;
      white-space: nowrap;
      overflow: hidden;
      margin-top: 0;
      margin-right: 3px;
  
      &.firstRoom {
        &:nth-child(3) {
          margin-right: 10px;
        }
        &:nth-child(14) {
          margin-left: 10px;
        }
      }
      &.disabled{
        background: #ddd;
      }
    }
  }
`;

const ModalSeat = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const ModalAge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  font-size: 13px;

  span {
    width: 22px;
    height: 22px;
    display: inline-block;
    margin-top: 0;
    margin-right: 10px;
    &.age_all {
      background: url("/age_all.png") no-repeat;
    }
    &.age_12 {
      background: url("/age_12.png") no-repeat;
    }
    &.age_15 {
      background: url("/age_15.png") no-repeat;
    }
    &.age_19 {
      background: url("/age_19.png") no-repeat;
    }
  }

  p {
    color: #229c56;
    border-bottom: 1px solid #229c56;
    margin: 0 5px;
  }
`;

const ModalGuide = styled.div`
  margin-top: 5px;
  padding-bottom: 30px;
  font-size: 11px;
  color: #666;
`;

const ModalBtn = styled.div`
  margin: 30px 0 20px;

  button {
    width: 160px;
    height: 40px;
    text-align: center;
    background: #414141;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:nth-child(2) {
      margin-left: 5px;
      background: #ff243e;
    }
  }
`;

const LoginModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .6);

  &.on{
    display: block;
  }
`;

const LoginModalWrap = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 195px;
  background: #fff;
  border-radius: 10px;
`;

const LoginModalBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px;
  text-align: center;

  p{
    padding: 30px 0;
  }

  a{
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 50px;
    padding: 10px 0;
    border-top: 1px solid #ddd;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #f8f8f8;
    cursor: pointer;
  }
`;

const StepFirstModal = ({ modal, setIsModal }) => {
  const [isLogin, setIslogin] = useState(false);

  const { data } = useSelector(({ stepfirst }) => stepfirst);
  const { seat, reservation } = useSelector(({ stepsecond }) => ({
    seat: stepsecond,
    reservation: stepsecond.reservation,
  }));
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const handleModal = () => {
    setIsModal(false);
  };

  const handleLinkClick = () => {
    setIslogin(true);
  };

  const findMatchingReservation = () => {
    if (!data || !data.date || !data.time) {
      return null;
    }
  
    const matchingReservation = reservation?.filter((item) => {
      return (
        item.cinema === data.cinema &&
        item.movie_name === data.time.movie_name &&
        item.date === data.date &&
        item.start === data.time.start &&
        item.room === data.time.room
      );
    });
  
    return matchingReservation;
  };

  const isSeatDisabled = (row, col) => {
    if (!matchingReservation) {
      return false;
    }

    const seatId = `${row}${col}`;
    const isDisabled = matchingReservation.some((item) => {
      return item.seat.includes(seatId);
    });

    return isDisabled;
  };
  
  const matchingReservation = findMatchingReservation();

  const seatRow = ["A", "B", "C", "D", "E", "F"];
  const seatCol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsingSeat());
  }, [dispatch]);
  

  return (
    <FirstModal className={modal === true ? "on" : ""}>
      <FirstModalBox>
        <FirstModalWrap>
          <ModalTime>
            {data.time.start} ~ {data.time.end}({data.time.room}관)
            <button onClick={handleModal}>
              <MdClose />
            </button>
          </ModalTime>
          <ModalSeat>
            잔여좌석<h3>{data.time.seat}</h3>
          </ModalSeat>
          <span>SCREEN</span>
          <ModalViewSeat>
            <ul>
            {seatRow.map((row, rowIndex) => (
              <li key={rowIndex}>
                <p>{row}</p>
                {seatCol.map((col, colIndex) => {
                  const seatId = `${row}${col}`;
                  let classes = "";
                  if (data.time.room === 1) {
                    classes += "firstRoom ";
                  }
                  if (isSeatDisabled(row, col)) {
                    classes += "disabled ";
                  }
                  return (
                    <span
                      key={colIndex}
                      className={classes.trim()}
                    >
                      {col}
                    </span>
                  );
                })}
              </li>
            ))}
            </ul>
          </ModalViewSeat>
          <ModalAge>
            <span
              className={
                data.time.age === "all"
                  ? "age_all age"
                  : data.time.age === "12"
                  ? "age_12 age"
                  : data.time.age === "15"
                  ? "age_15 age"
                  : data.time.age === "19"
                  ? "age_19 age"
                  : ""
              }
            />
            본 영화는
            {data.time.age === "12" ? (
              <p
                style={{ color: "#e9b630", borderBottom: "1px solid #e9b630" }}
              >
                만 12세 이상 관람가
              </p>
            ) : data.time.age === "15" ? (
              <p
                style={{ color: "#dd7430", borderBottom: "1px solid #dd7430" }}
              >
                만 15세 이상 관람가
              </p>
            ) : data.time.age === "19" ? (
              <p
                style={{ color: "#d92b36", borderBottom: "1px solid #d92b36" }}
              >
                만 18세 이상 관람가
              </p>
            ) : (
              <p>전체관람가</p>
            )}
            영화입니다.
          </ModalAge>
          <ModalGuide>
            {data.time.age === "12" ? (
              <p>
                만 12세 미만의 고객님(영, 유아 포함)은 반드시 부모님 또는 성인
                보호자의 동반하에
                <br />
                관람이 가능합니다. 연령 확인 불가 시 입장이 제한될 수 있습니다.
              </p>
            ) : data.time.age === "15" ? (
              <p>
                만 15세 미만의 고객님(영, 유아 포함)은 반드시 부모님 또는 성인
                보호자의 동반하에
                <br />
                관람이 가능합니다. 연령 확인 불가 시 입장이 제한될 수 있습니다.
              </p>
            ) : data.time.age === "19" ? (
              <p>
                만 18세 미만의 고객님(영, 유아 포함)은 부모님 또는 성인 보호자를
                동반하여도
                <br />
                관람이 불가합니다. 또한 만 18세 이상이라도 재학중인 학생은
                관람이 불가합니다.
                <br />
                영화 관람 시, 반드시 신분증을 지참하여 주시기 바랍니다.
              </p>
            ) : (
              ""
            )}
          </ModalGuide>
          <ModalBtn>
            <button onClick={handleModal}>취소</button>
            {user ? (
              <button>
                <Link to="/ticket/PersonSeat">인원/좌석 선택</Link>
              </button>
            ) : (
              <button onClick={handleLinkClick}>인원/좌석 선택</button>
            )}
          </ModalBtn>
        </FirstModalWrap>
      </FirstModalBox>
      <LoginModal className={isLogin && 'on'}>
        <LoginModalWrap>
          <LoginModalBox>
            <p>로그인이 필요한 서비스 입니다.</p>
            <Link to="/ticket/PersonSeat">확인</Link>
          </LoginModalBox>
        </LoginModalWrap>
      </LoginModal>
    </FirstModal>
  );
};

export default StepFirstModal;
