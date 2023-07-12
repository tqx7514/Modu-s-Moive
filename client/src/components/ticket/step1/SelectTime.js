import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AreaItem, Areat, MovieList } from "./SelectMovie";
import { readTime, setTimeData } from "../../../modules/stepfirst";

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
  &.selected{
    border: 1px solid;
  }
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
  const [selectedTime, setSelectedTime] = useState("");

  const handleFilter = (start) => {
    setSelectedFilter(start);
  };

  const { data, time } = useSelector(({ stepfirst }) => stepfirst);
  console.log(data);
  console.log('ssssssssssssssssss',time);

  const dispatch = useDispatch();

  const onSelctedTime = useCallback(
    (time,time2) => {
      console.log('2222222222222222222222222',time);
      dispatch(setTimeData(time,time2));
    },
    [dispatch]
  );

  const handleSelectTime = (start, end) => {
    // setSelectedTime(e.targestart);
    onSelctedTime(start, end);
    console.log(start, end);
  };
  
  useEffect(() => {
    dispatch(readTime());
  }, []);

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
        {data.cinema && data.date && (
          <>
            
              {time.map((t) => (
                <AreaItem
                  key={t.movietimes_num}
                  className="movie_list time"
                >
                  <MovieList>
                      
                    {t.movie_name}
                  </MovieList>
                  <div>
                    <div>
                      <p>{t.disp}</p>
                      <p>{t.language}</p>
                    </div>
                    <div>
                    
                        <ScheduleBtn
                          onClick={(e) => handleSelectTime(t.start, t.end)}
                          className={selectedTime ? 'selected' : ''}
                        >
                          <strong>{t.start}</strong>
                          <span>{t.seat}</span>
                          <span>{t.end}</span>
                        </ScheduleBtn>
    
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
