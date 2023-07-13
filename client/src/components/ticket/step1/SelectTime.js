import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AreaItem, MovieList } from "./SelectMovie";
import { readTime, setTimeData } from "../../../modules/stepfirst";
import { uniqBy } from "lodash";

const BtnWrap = styled.div`
  display: flex;
`;
const FilterBtn = styled.button`
  position: relative;
  width: calc(100% / 6);
  height: 50px;
  background: none;
  border: none;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: 0.3s ease;
  &.selected {
    border-bottom: 2px solid #000;
    &:after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #000;
    }
  }
`;

const TimeWrap = styled.ul`
  padding: 0 20px;
`;

const ScheduleBtn = styled.div`
  position: relative;
  display: inline-block;
  width: 23%;
  margin-left: 2%;
  margin-bottom: 10px;
  &.selected {
    border: 1px solid;
  }
  &:nth-child(4n + 2) {
    margin-left: 0;
  }
  padding: 8px 14px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(248, 248, 248, 1) 100%
  );
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  strong {
    display: block;
    text-align: center;
  }
  span {
    font-size: 11px;
  }
`;

const SelectTime = () => {
  const [selectedFilter, setSelectedFilter] = useState("전체");
  const [selectedTime, setSelectedTime] = useState("");

  const handleFilter = (start) => {
    setSelectedFilter(start);
  };

  const { data, time } = useSelector(({ stepfirst }) => stepfirst);

  const dispatch = useDispatch();

  const onSelctedTime = useCallback(
    (start, end, seat) => {
      dispatch(setTimeData({ start, end, seat }));
    },
    [dispatch]
  );

  const handleSelectTime = (item) => {
    setSelectedTime(item.movietimes_num);
    onSelctedTime(item.start, item.end, item.seat);
  };

  useEffect(() => {
    dispatch(readTime());
  }, []);

  const groupMoviesByTitle = () => {
    const groupedMovies = {};

    time.forEach((item) => {
      const key = `${item.age} ${item.movie_name}`;
      if (!groupedMovies[key]) {
        groupedMovies[key] = {
          cinema: item.cinema,
          disp: item.disp,
          language: item.language,
          showtimes: [],
        };
      }
      groupedMovies[key].showtimes.push(item);
    });

    return groupedMovies;
  };

  const renderMovies = () => {
    const groupedMovies = groupMoviesByTitle();

    if (data.cinema && data.date) {
      const filteredMovies = Object.entries(groupedMovies).filter(
        ([key, { cinema }]) => cinema === data.cinema
      );

      return filteredMovies.map(([key, { disp, language, showtimes }]) => (
        <AreaItem key={key} className="movie_list time">
          <MovieList>
            <span
              className={
                `${key.split(" ")[0]}` === "all"
                  ? "age_all age"
                  : `${key.split(" ")[0]}` === "12"
                  ? "age_12 age"
                  : `${key.split(" ")[0]}` === "15"
                  ? "age_15 age"
                  : `${key.split(" ")[0]}` === "19"
                  ? "age_19 age"
                  : ""
              }
            ></span>
            {`${key.split(" ")[1]}`}
          </MovieList>
          <div>
            <p>{`${disp} ${language}`}</p>
            {showtimes.map((item) => (
              <ScheduleBtn
                key={item.movietimes_num}
                onClick={() => handleSelectTime(item)}
                className={
                  selectedTime === item.movietimes_num ? "selected" : ""
                }
              >
                <div>
                  <div>
                    <strong>{`${item.start} ~ ${item.end}`}</strong>
                    <span>{`${item.seat}자리`}</span>
                  </div>
                </div>
              </ScheduleBtn>
            ))}
          </div>
        </AreaItem>
      ));
    }

    return null;
  };

  return (
    <>
      {data.cinema && data.date && (
        <>
          <BtnWrap>
            <FilterBtn
              onClick={() => handleFilter("전체")}
              className={selectedFilter === "전체" ? "selected" : ""}
            >
              전체
            </FilterBtn>
            <FilterBtn
              onClick={() => handleFilter("스페셜관")}
              className={selectedFilter === "스페셜관" ? "selected" : ""}
            >
              스페셜관
            </FilterBtn>
            <FilterBtn
              onClick={() => handleFilter("Atmos")}
              className={selectedFilter === "Atmos" ? "selected" : ""}
            >
              Atmos
            </FilterBtn>
            <FilterBtn
              onClick={() => handleFilter("13시 이후")}
              className={selectedFilter === "13시 이후" ? "selected" : ""}
            >
              13시 이후
            </FilterBtn>
            <FilterBtn
              onClick={() => handleFilter("19시 이후")}
              className={selectedFilter === "19시 이후" ? "selected" : ""}
            >
              19시 이후
            </FilterBtn>
            <FilterBtn
              onClick={() => handleFilter("심야")}
              className={selectedFilter === "심야" ? "selected" : ""}
            >
              심야
            </FilterBtn>
          </BtnWrap>
          <TimeWrap>{renderMovies()}</TimeWrap>
        </>
      )}
    </>
  );
};

export default SelectTime;
