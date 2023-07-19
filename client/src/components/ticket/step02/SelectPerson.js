import React from 'react';
import styled from 'styled-components';
import { AreaItem, MovieList } from '../step01/SelectMovie';
import { useDispatch, useSelector } from 'react-redux';

const PersonSeatWrap = styled.div`
  width:100%;
`;

const Title = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  padding: 12.5px 0;
  background: #000;
  color: #fff;
  text-align: center;
  font-size: 18px;
  
  span{
    position: absolute;
    right: 20px;
    bottom: 10px;
    font-size: 13px;
  }
`;

const PersonSelect = styled.div`
  display: flex;
  width: 100%;
  height: 117px;
  padding: 0 20px;
  background: #fff;
`;

const MovieInfo = styled.div`
  width: 320px;
  padding: 25px 0 0 55px;
`;

const MovieSubInfo = styled.div`
  font-size: 11px;
`;

const MovieDateTime = styled.div`
  span{
    &:first-child{
      position: relative;
      margin-right: 10px;
      padding-right: 10px;
      &:after{
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height:80%;
        background: #ddd;
      }
    }
  }
`;

const CinemaInfo = styled.div`
  span{
    position: relative;
    margin-right: 5px;
    padding-right: 5px;
    &:after{
      content: '·';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:last-child{
      &:after{
        display: none;
      }
    }
  }
`;

const PersonNum = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const SelectPerson = ({
  number,
  adultNumber,
  teenagerNumber,
  seniorNumber,
  disabledNumber,
  onIncrease, 
  onDecrease,
}) => {
  const {data} = useSelector(({stepfirst}) => stepfirst);

  const handleIncrease = (key) => {
    if (number >= 8) {
      alert('인원은 최대 8명까지 선택 가능합니다.');
    } else {
      onIncrease(key);
    }
  };
  const handletDecrease = (key)=>{
    console.log('ddddddddddddddddd',`${key}Number`)
    if(`${key}Number`<=0){
      alert('더이상 줄일수 없습니다.')
    }else{
      onDecrease(key)
    }
  }

  return (
    <PersonSeatWrap>
      <Title>
        인원/좌석 선택
        <span>인원은 최대 8명까지 선택 가능합니다.</span>
      </Title>
      <PersonSelect>
        <MovieInfo>
          <AreaItem className='stepsecond'>
            <MovieList>
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
              ></span>
              {data.time.movie_name} ({data.time.disp})
            </MovieList>
          </AreaItem>
          <MovieSubInfo>
            <MovieDateTime>
              <span>{data.date}</span>
              <span>{data.time.start} ~ {data.time.end}</span>
            </MovieDateTime>
            <CinemaInfo>
              <span>{data.time.cinema}</span>
              <span>{data.time.room}관</span>
              <span>{data.time.language}</span>
            </CinemaInfo>
          </MovieSubInfo>
        </MovieInfo>
        <PersonNum>
          <div>
            <p>성인</p>
            <div>
              <button onClick={()=>handletDecrease("adult")}>-</button>
              {adultNumber}
              <button onClick={() => handleIncrease("adult")}>+</button>
            </div>
          </div>
          <div>
            <p>청소년</p>
            <div>
              <button onClick={()=>onDecrease("teenager")}>-</button>
              {teenagerNumber}
              <button onClick={() => handleIncrease("teenager")}>+</button>
            </div>
          </div>
          <div>
            <p>시니어</p>
            <div>
            <button onClick={()=>onDecrease("senior")}>-</button>
              {seniorNumber}
              <button onClick={() => handleIncrease("senior")}>+</button>
            </div>
          </div>
          <div>
            <p>장애인</p>
            <div>
            <button onClick={()=>onDecrease("disabled")}>-</button>
              {disabledNumber}
              <button onClick={() => handleIncrease("disabled")}>+</button>
            </div>
          </div>
        </PersonNum>
      </PersonSelect>
    </PersonSeatWrap>
  );
};

export default SelectPerson;