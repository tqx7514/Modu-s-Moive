import React, { useEffect } from "react";
import styled from "styled-components";
import { AreaItem, MovieList } from "../step01/SelectMovie";
import { useDispatch, useSelector } from "react-redux";

const SelectPersonWrap = styled.div`
  width: 100%;
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

  span {
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
  position: relative;
  width: 320px;
  padding: 25px 0 0 55px;

  img {
    position: absolute;
    left: 0;
    top: 25px;
    width: 45px;
    height: 60px;
    border-radius: 5px;
  }
`;

const MovieSubInfo = styled.div`
  font-size: 11px;
`;

const MovieDateTime = styled.div`
  span {
    &:first-child {
      position: relative;
      margin-right: 10px;
      padding-right: 10px;
      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 80%;
        background: #ddd;
      }
    }
  }
`;

const CinemaInfo = styled.div`
  span {
    position: relative;
    margin-right: 5px;
    padding-right: 5px;
    &:after {
      content: "·";
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
`;

const PersonNum = styled.div`
  display: flex;
  align-items: center;
  width: 825px;
  padding: 0 40px;

  div.personBtn {
    display: flex;
    align-items: center;
  }
`;

const PersonBtn = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 40px;
  margin-right: 20px;
  margin-left: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;

  button {
    display: block;
    width: 25px;
    height: 100%;
    border: none;
    background: none;
    font-size: 30px;
    color: #666;
    cursor: pointer;
  }
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
  const { data, movie } = useSelector(({ stepfirst }) => stepfirst);
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";
  const selectedMovie = movie.find(
    (movieObj) => movieObj.movie_name === data.time.movie_name
  );

  const handleIncrease = (key) => {
    if (number >= 8) {
      alert("인원은 최대 8명까지 선택 가능합니다.");
    } else {
      onIncrease(key);
    }
  };
  const handleDecrease = (key, number) => {
    if (number <= 0) {
      return;
    } else {
      onDecrease(key);
    }
  };
  
  return (
    <SelectPersonWrap>
      <Title>
        인원/좌석 선택
        <span>인원은 최대 8명까지 선택 가능합니다.</span>
      </Title>
      <PersonSelect>
        <MovieInfo>
          {selectedMovie && (
            <>
              <img src={IMG_BASE_URL + selectedMovie.img} />
            </>
          )}
          <AreaItem className="stepsecond">
            <MovieList className="selectPerson">
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
              <span>
                {data.time.start} ~ {data.time.end}
              </span>
            </MovieDateTime>
            <CinemaInfo>
              <span>{data.time.cinema}</span>
              <span>{data.time.room}관</span>
              <span>{data.time.language}</span>
            </CinemaInfo>
          </MovieSubInfo>
        </MovieInfo>
        <PersonNum>
          <div className="personBtn">
            <p>성인</p>
            <PersonBtn>
              <button onClick={() => handleDecrease("adult", adultNumber)}>
                -
              </button>
              {adultNumber.number}
              <button onClick={() => handleIncrease("adult")}>+</button>
            </PersonBtn>
          </div>
          <div className="personBtn">
            <p>청소년</p>
            <PersonBtn>
              <button
                onClick={() => handleDecrease("teenager", teenagerNumber)}
              >
                -
              </button>
              {teenagerNumber.number}
              <button onClick={() => handleIncrease("teenager")}>+</button>
            </PersonBtn>
          </div>
          <div className="personBtn">
            <p>시니어</p>
            <PersonBtn>
              <button onClick={() => handleDecrease("senior", seniorNumber)}>
                -
              </button>
              {seniorNumber.number}
              <button onClick={() => handleIncrease("senior")}>+</button>
            </PersonBtn>
          </div>
          <div className="personBtn">
            <p>장애인</p>
            <PersonBtn>
              <button
                onClick={() => handleDecrease("disabled", disabledNumber)}
              >
                -
              </button>
              {disabledNumber.number}
              <button onClick={() => handleIncrease("disabled")}>+</button>
            </PersonBtn>
          </div>
        </PersonNum>
      </PersonSelect>
    </SelectPersonWrap>
  );
};

export default SelectPerson;
