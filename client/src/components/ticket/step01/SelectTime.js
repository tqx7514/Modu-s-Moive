import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AreaItem, MovieList } from "./SelectMovie";
import { readTime, setData, setTimeData } from "../../../modules/stepfirst";
import StepFirstModal from "./StepFirstModal";

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
    display: inline-block;
    font-size: 11px;
    &.seat {
      float: left;
    }
    &.room {
      float: right;
    }
  }
  .endTime {
    display: none;
    position: absolute;
    left: 50%;
    top: -40px;
    transform: translateX(-50%);
    height: 32px;
    padding: 0 8px;
    background: #333;
    font-size: 12px;
    color: #fff;
    line-height: 32px;
    white-space: nowrap;
    border-radius: 5px;
    &:after {
      content: "";
      position: absolute;
      top: 32px;
      left: 50%;
      transform: translateX(-50%);
      border-top: 4px solid #333;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 5px solid transparent;
    }
  }
  &:hover {
    .endTime {
      display: block;
    }
  }
`;

const SelectTime = () => {
  const [selectedFilter, setSelectedFilter] = useState("전체");
  const [selectedTime, setSelectedTime] = useState("");
  const [isModal, setIsModal] = useState(false);

  const handleFilter = (start) => {
    setSelectedFilter(start);
  };

  const { data, time } = useSelector(({ stepfirst }) => stepfirst);
  const dispatch = useDispatch();

  const onSelctedTime = useCallback(
    (cinema, movie_name, age, disp, language, start, end, room, seat) => {
      dispatch(
        setTimeData({
          cinema,
          movie_name,
          age,
          disp,
          language,
          start,
          end,
          room,
          seat,
        })
      );
    },
    [dispatch]
  );

  const handleSelectTime = (item) => {
    const currentTime = new Date();
    const [startHour, startMinute] = item.start.split(":").map(Number);

    // 현재 시간과 비교
    if (
      item.date < new Date().toISOString().split("T")[0] || // 현재 날짜가 item.date 보다 큰 경우
      (item.date === new Date().toISOString().split("T")[0] &&
        (currentTime.getHours() > startHour ||
          (currentTime.getHours() === startHour &&
            currentTime.getMinutes() >= startMinute)))
    ) {
      alert("현재 선택한 영화관/상영작을 선택할 수 없습니다.");
      return;
    }
    setSelectedTime(item.movietimes_num);
    onSelctedTime(
      item.cinema,
      item.movie_name,
      item.age,
      item.disp,
      item.language,
      item.start,
      item.end,
      item.room,
      item.seat
    );
    setIsModal(true);
  };

  const resetSelectedTime = useCallback(() => {
    setSelectedTime("");
  }, []);

  useEffect(() => {
    resetSelectedTime();
  }, [data.cinema, data.date, data.movie, resetSelectedTime]);

  useEffect(() => {
    dispatch(readTime());
  }, [dispatch]);

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModal]);

  const groupMoviesByTitle = () => {
    const groupedMovies = {};

    time.forEach((item) => {
      const key = `${item.age} ${item.movie_name}`;
      if (!groupedMovies[key]) {
        groupedMovies[key] = {
          cinema: item.cinema,
          disp: item.disp,
          language: item.language,
          date: item.date,
          showtimes: [],
        };
      }
      groupedMovies[key].showtimes.push(item);
    });

    return groupedMovies;
  };

  const renderMovies = () => {
    const groupedMovies = groupMoviesByTitle();
    const sameDateTime = time.filter((item) => item.date === data.date);

    if (data.cinema && data.date && !data.movie) {
      const filteredMovies = Object.entries(groupedMovies).filter(
        ([key, { cinema }]) => cinema === data.cinema
      );

      return filteredMovies.map(([key, { disp, language, showtimes }]) => {
        const filteredShowtimesSameDateTime = showtimes.filter((item) => {
          return sameDateTime.includes(item);
        });

        const filteredShowtimes = filteredShowtimesSameDateTime.filter(
          (item) => {
            if (selectedFilter === "전체") return true;
            if (selectedFilter === "스페셜관") return item.disp === "스페셜관";
            if (selectedFilter === "Atmos") return item.disp === "Atmos";
            if (selectedFilter === "13시 이후")
              return Number(item.start.split(":")[0]) >= 13;
            if (selectedFilter === "19시 이후")
              return Number(item.start.split(":")[0]) >= 19;
            if (selectedFilter === "심야")
              return Number(item.start.split(":")[0]) >= 24;
            return true;
          }
        );

        if (filteredShowtimes.length === 0) return null;

        return (
          <AreaItem key={key} className="movie_list time">
            <MovieList className="schedule">
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
              {`${key.replace(/all|12|15|19 /g, "")}`}
            </MovieList>
            <div>
              <p>{`${disp} ${language}`}</p>
              {filteredShowtimes.map((item) => (
                <ScheduleBtn
                  key={item.movietimes_num}
                  onClick={() => handleSelectTime(item)}
                  className={
                    selectedTime === item.movietimes_num ? "selected" : ""
                  }
                >
                  <div>
                    <div>
                      <strong>{item.start}</strong>
                      <span className="seat">{item.seat}</span>
                      <span className="room">{item.room}관</span>
                    </div>
                  </div>
                  <div className="endTime">종료: {item.end}</div>
                </ScheduleBtn>
              ))}
            </div>
          </AreaItem>
        );
      });
    }

    if (data.cinema && data.date && data.movie) {
      const key = `${data.movie.age} ${data.movie.movie_name}`;
      const movie = groupedMovies[key];

      if (movie && movie.cinema === data.cinema) {
        const filteredShowtimesSameDateTime = movie.showtimes.filter((item) => {
          return sameDateTime.includes(item);
        });

        const filteredShowtimes = filteredShowtimesSameDateTime.filter(
          (item) => {
            if (selectedFilter === "전체") return true;
            if (selectedFilter === "스페셜관") return item.disp === "스페셜관";
            if (selectedFilter === "Atmos") return item.disp === "Atmos";
            if (selectedFilter === "13시 이후")
              return Number(item.start.split(":")[0]) >= 13;
            if (selectedFilter === "19시 이후")
              return Number(item.start.split(":")[0]) >= 19;
            if (selectedFilter === "심야")
              return Number(item.start.split(":")[0]) >= 24;
            return true;
          }
        );

        if (filteredShowtimes.length === 0) return null;

        return (
          <AreaItem className="movie_list time">
            <MovieList className="schedule">
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
              {`${key.replace(/all|12|15|19 /g, "")}`}
            </MovieList>
            <div>
              <p>{`${movie.disp} ${movie.language}`}</p>
              {filteredShowtimes.map((item) => (
                <ScheduleBtn
                  key={item.movietimes_num}
                  onClick={() => handleSelectTime(item)}
                  className={
                    selectedTime === item.movietimes_num ? "selected" : ""
                  }
                >
                  <div>
                    <div>
                      <strong>{item.start}</strong>
                      <span className="seat">{item.seat}</span>
                      <span className="room">{item.room}관</span>
                    </div>
                  </div>
                  <div className="endTime">종료: {item.end}</div>
                </ScheduleBtn>
              ))}
            </div>
          </AreaItem>
        );
      }
    }

    return null;
  };

  return (
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
      <StepFirstModal modal={isModal} setIsModal={setIsModal} />
    </>
  );
};

export default SelectTime;
