import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {MdCheckCircleOutline, MdCheckCircle} from "react-icons/md"
import { Link } from "../../../../node_modules/react-router-dom/dist/index";

const PayInfo = styled.div`
  width: 300px;
  height: 100%;
  border-right: 1px solid #ddd;

  &.method {
    width: 490px;
  }

  &.payment{
    position: relative;
    width: 414px;
    border-right: none;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  color: #fff;
  background: #000;
  font-size: 18px;
  font-weight: 400;
  vertical-align: middle;
  border-right: 1px solid #222;
`;

const MovieInfo = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 30px 30px 20px;
  border-bottom: 1px solid #ddd;

  img {
    display: block;
    width: 120px;
    height: 170px;
    margin: 0 auto 20px;
  }

  span {
    &.age {
      width: 22px;
      height: 22px;
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 10px;
      vertical-align: bottom;
    }
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

  h5 {
    display: inline-block;
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 3px;
    font-size: 11px;
    font-weight: 500;

    p {
      display: inline-block;
      width: 50px;
      font-weight: 400;
    }
  }
`;

const SeatInfo = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px 30px 0;
  border-bottom: 1px solid #ddd;

  label {
    display: block;
    font-size: 11px;
    font-weight: 500;

    p {
      display: inline-block;
      width: 50px;
      font-weight: 400;
    }
  }
`;

const PayMethod = styled.div`
  width: 100%;
  height: calc(50% - 27.5px);
  padding: 20px;
  border-bottom: 1px solid #eee;
  background: #f8f8f8;
`;

const Lpoint = styled.div`
  width: 100%;
  margin-top: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background: #fff;
  &.active{
    border: 1px solid #ddd;
  }

  .pointBtn {
    width: 100%;
    display: flex;

    button {
      width: 50%;
      height: 40px;
      background: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      &.active{
        background: #f8f8f8;
        border-bottom: 1px solid #ddd;
      }


      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0;
      }
      &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 1px solid #ddd;
      }

      b{
        color: #2aa3fe;
      }
    }
  }
`;

const PointhtmlForm = styled.div`
  .pointhtmlForm{
    padding: 20px;
    
    .usePoint{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      input{
        width: calc(100% - 110px);
        height: 40px;
        padding: 10px;
        background: #efefef;
        color: #666;
        border: none;
        border-radius: 5px;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      }
      button{
        width: 100px;
        height: 40px;
        background: #adadad;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }

    .confirmBtn{
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      button{
        width: 160px;
        height: 40px;
        background: #fff;
        border: 1px solid #000;
        border-radius: 5px;
        cursor: pointer;
        &.confirm{
          border: none;
          background: #adadad;
          color: #fff;
          margin-left: 5px;
        }
      }
    }

    p{
      font-size: 13px;
      span{
        cursor: pointer;
      }
    }
  }
`;

const EtcDiscount = styled.div`
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  button{
    width: 24%;
    height: 55px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

const SavePoint = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 30px;
  border-bottom: 1px solid #ddd;

  input[type='checkbox']{
    display: none;
    border-radius: 100%;
  }

  input[type='checkbox'] + label{
    position: relative;
    display: inline-block;
    width: 120px;
    height: 24px;
    padding-left: 24px;
  }

  input[type='checkbox'] + label::after{
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: url("/check2.png") 50% 50% no-repeat;
  }

  input[type='checkbox']:checked + label::after{
    background: url("/check2.png") 50% 50% no-repeat;
    background-color: #222;
    border: 1px solid #222;
  }


  span{
    width: 20px;
    height: 20px;
    font-size: 24px;
  }
`;

const Payment = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #414141;
  
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height: 50px;
    padding: 20px 30px;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    color: #fff;

    p{
      font-size: 12px;
    }

    b{
      span{
        font-size: 11px;
        font-weight: 400;
      }
    }
  }

  a{
    display: block;
    width: 100%;
    height: 55px;
    padding-top:13px;
    background: #ff243e;
    border: none;
    text-align: center;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
`;

const SelectPay = ({OnDiscount, onReservation}) => {
  const [selectTab, setSelctTab] = useState(0);
  const [inputPoint, setInputPoint] = useState("");

  const { data, movie } = useSelector(({ stepfirst }) => stepfirst);
  const { 
    adult, 
    teenager, 
    senior, 
    disabled, 
    seat, 
    totalPrice,
    discount
  } = useSelector(({ stepsecond }) => stepsecond);


  console.log('asdfasfasdfas', inputPoint, 'asdfasdf', totalPrice)
  const {user} = useSelector(({user}) => user);

  const formatPrice = totalPrice?.toLocaleString();
  const totalPriceNumber = parseInt(totalPrice, 10);
  const formatTotalPrice = (totalPriceNumber - `${discount ? discount : 0}`).toLocaleString();

  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

  const selectedMovie = movie.find(
    (movieObj) => movieObj.movie_name === data.time.movie_name
  );

  const handleSelectTab = (type) => {
    if(type === 'find'){
      setSelctTab(type);
    } else if(type === 'card'){
      setSelctTab(type)
    } else{
      setSelctTab(0)
      setInputPoint("");
      OnDiscount(0);
    }
  };

  const handleChangePoint = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    setInputPoint(inputValue);
  };

  const handleAllPoint = () => {
    if(user.point > totalPrice){
      setInputPoint(totalPrice);
    } else{
      setInputPoint(user.point);
    }
  };

  const handleDiscount = (e) => {
    if(inputPoint % 100 !== 0){
      alert("100단위로 입력하세요.");
      return;
    };

    if(inputPoint > user.point){
      alert('보유한 포인트를 초과할 수 없습니다.');
      return;
    }

    if(inputPoint > totalPrice){
      alert('상품 금액을 초과할 수 없습니다.');
      return;
    };
    

    OnDiscount(inputPoint)
  };

  return (
    <>
      <PayInfo>
        <Title>예매정보</Title>
        <MovieInfo>
          {selectedMovie && (
            <>
              <img src={IMG_BASE_URL + selectedMovie.img} />
              <div>
                <span
                  className={`${
                    data.time.age === "all"
                      ? "age_all"
                      : data.time.age === "12"
                      ? "age_12"
                      : data.time.age === "15"
                      ? "age_15"
                      : data.time.age === "19"
                      ? "age_19"
                      : ""
                  } age`}
                />
                <h5>
                  {data.time.movie_name}({data.time.disp}
                  {data.time.language})
                </h5>
                <label>
                  <p>일시</p>
                  {data.date}
                  {data.time.start} ~ {data.time.end}
                </label>
                <label>
                  <p>영화관</p>
                  {data.time.cinema}
                  {data.time.room}관, {data.time.disp}
                </label>
                <label>
                  <p>인원</p>
                  {adult.number > 0 && (
                    <>
                      {adult.name}
                      {adult.number}
                      {teenager.number > 0 ||
                      senior.number > 0 ||
                      disabled.number > 0
                        ? ", "
                        : ""}
                    </>
                  )}
                  {teenager.number > 0 && (
                    <>
                      {teenager.name}
                      {teenager.number}
                      {senior.number > 0 || disabled.number > 0 ? ", " : ""}
                    </>
                  )}
                  {senior.number > 0 && (
                    <>
                      {senior.name}
                      {senior.number}
                      {disabled.number > 0 ? ", " : ""}
                    </>
                  )}
                  {disabled.number > 0 && (
                    <>
                      {disabled.name}
                      {disabled.number}
                    </>
                  )}
                </label>
              </div>
            </>
          )}
        </MovieInfo>
        <SeatInfo>
          <label>
            <p>좌석</p>
            {seat}
          </label>
        </SeatInfo>
      </PayInfo>

      <PayInfo className="method">
        <Title>결제수단</Title>
        <PayMethod>
          할인/포인트
          <Lpoint className={selectTab && 'active'}>
            <div className="pointBtn">
              <button 
                className={selectTab === 'card' && 'active'}
                onClick={() => handleSelectTab('find')}
              >
                POINT {selectTab ? <b>{user.point}P</b> : <b>조회</b>}
              </button>
              <button 
                className={selectTab === 'find' && 'active'}
                onClick={() => handleSelectTab('card')}
              >POINT 카드번호</button>
            </div>
            {selectTab === 'find' ? (
              <PointhtmlForm >
                <div className="pointhtmlForm">
                  <div className="usePoint">
                    <input 
                      type="number" 
                      className="point" 
                      placeholder="포인트 입력 (100P 단위로 사용가능)" 
                      value={inputPoint}
                      onChange={(e) => handleChangePoint(e)}
                    />
                    <button 
                      className="maxPoint"
                      onClick={() => handleAllPoint()}
                    >최대적용</button>
                  </div>
                  <div className="confirmBtn">
                    <button 
                      className="cancle"
                      onClick={() => handleSelectTab(0)}
                    >취소</button>
                    <button 
                      className="confirm"
                      onClick={(e) => handleDiscount(e)}
                    >적용</button>
                  </div>
                  <p>L.POINT 이용안내<span>아이콘</span></p>
                </div>
              </PointhtmlForm>
            ) 
            : selectTab === 'card' ? (
              <PointhtmlForm >
                <div className="pointhtmlForm">
                  <div className="usePoint">
                    <input type="text" className="point" placeholder="카드 번호 입력" />
                    <button className="maxPoint">최대적용</button>
                  </div>
                  <div className="confirmBtn">
                    <button 
                      className="cancle"
                      onClick={() => handleSelectTab(0)}
                    >취소</button>
                    <button className="confirm">적용</button>
                  </div>
                  <p>L.POINT 이용안내<span>아이콘</span></p>
                </div>
              </PointhtmlForm>
            ) : '' }
          </Lpoint>
          <EtcDiscount>
            <button>VIP/Friends<span>0</span></button>
            <button>관람권<span>0</span></button>
            <button>할인권<span>0</span></button>
            <button>제휴포인트/할인</button>
          </EtcDiscount>
        </PayMethod>
        <PayMethod>최종 결제수단</PayMethod>
      </PayInfo>
      <PayInfo className="payment">
        <Title>결제하기</Title>
        <SavePoint>
          <div className="checkbox">
            <input type="checkbox" name="" id="saveCheck"/>
            <label htmlFor="saveCheck">
              POINT 적립
            </label>
          </div>
          <div>
            <label htmlFor="idSave">
              <input type="radio" name="howSave" id="idSave" checked/>
              ID적립
            </label>
            <label htmlFor="cardSave">
              <input type="radio" name="howSave" id="cardSave" />
              카드번호 적립
            </label>
          </div>
        </SavePoint>
        <Payment>
          <div>
            <p>상품금액</p>
            <b>{formatPrice}<span>원</span></b>
          </div>
          <div>
            <p>할인금액</p>
            <b><span>-</span> {discount} <span>원</span></b>
          </div>
          <div>
            <p>결제금액</p>
            <b>{formatTotalPrice}<span>원</span></b>
          </div>
          <Link to="/ticket/payComplete" onClick={onReservation}>결제하기</Link>
        </Payment>
      </PayInfo>
    </>
  );
};

export default SelectPay;
