import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AreaItem, MovieList } from "./SelectMovie";
import { readTime } from "../../../modules/stepfirst";

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
  display: inline-block;
  width: 23%;
  margin-left: 2%;
  margin-bottom: 10px;
  &:nth-child(4n + 1) {
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

  const handleFilter = (e) => {
    setSelectedFilter(e.target.textContent);
  };

  const { data, time } = useSelector(({ stepfirst }) => stepfirst);
  console.log(time);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readTime());
  }, []);

  const groupedData = {};

  time.forEach((item) => {
    const { cinema, movie_name, age, disp, language, start } = item;
    const key = `${movie_name}-${disp}-${language}`;
    if (!groupedData[key]) {
      groupedData[key] = {
        cinema,
        movie_name,
        age,
        disp,
        language,
        start: [],
      };
    }
    groupedData[key].start.push(start);
  });

  const uniqueTimes = Object.values(groupedData);

  return (
    <>
      <BtnWrap>
        <FilterBtn
          onClick={handleFilter}
          className={selectedFilter === "전체" ? "selected" : ""}
        >
          전체
        </FilterBtn>
        <FilterBtn
          onClick={handleFilter}
          className={selectedFilter === "스페셜관" ? "selected" : ""}
        >
          스페셜관
        </FilterBtn>
        <FilterBtn
          onClick={handleFilter}
          className={selectedFilter === "Atmos" ? "selected" : ""}
        >
          Atmos
        </FilterBtn>
        <FilterBtn
          onClick={handleFilter}
          className={selectedFilter === "13시 이후" ? "selected" : ""}
        >
          13시 이후
        </FilterBtn>
        <FilterBtn
          onClick={handleFilter}
          className={selectedFilter === "19시 이후" ? "selected" : ""}
        >
          19시 이후
        </FilterBtn>
        <FilterBtn
          onClick={handleFilter}
          className={selectedFilter === "심야" ? "selected" : ""}
        >
          심야
        </FilterBtn>
      </BtnWrap>
      <TimeWrap>
        {data.cinema && data.date && !data.movie && (
          <>
            {uniqueTimes.map((item) => (
              <AreaItem
                key={`${item.cinema}-${item.movie_name}-${item.age}-${item.disp}-${item.language}`}
                className="movie_list time"
              >
                <MovieList>
                  <span
                    className={`${
                      item.age === "all"
                        ? "age_all"
                        : item.age === "12"
                        ? "age_12"
                        : item.age === "15"
                        ? "age_15"
                        : item.age === "19"
                        ? "age_19"
                        : ""
                    } age`}
                  ></span>
                  {item.movie_name}
                </MovieList>
                <div>
                  <div>
                    <p>{item.disp}</p>
                    <p>{item.language}</p>
                  </div>
                  <div>
                    {item.start.map((start, index) => (
                      <ScheduleBtn key={index}>
                        {start}
                      </ScheduleBtn>
                    ))}
                  </div>
                </div>
              </AreaItem>
            ))}
          </>
        )}
      </TimeWrap>
    </>
  );
};

export default SelectTime;
