import React, {useState} from 'react'
import { MdDensityMedium, MdWindow } from "react-icons/md";
import styled, { css } from "styled-components";


const StepCinema = styled.div`
  width: 30%;
  height: 100%;
`;
const Title = styled.div`
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

const AreaItem = styled.li`
  padding: 10px 16px;
  cursor: pointer;
  font-size: 13px;
  &.movie_list {
    display: flex;
    align-items: center;
    &.selected {
      border: 2px solid;
    }
  }
  &.selected {
    position: relative;
    background: #fff;
    &:after {
      content: "";
      position: absolute;
      right: 5px;
      top: 2px;
      background: url("/check.png") no-repeat;
      width: 18px;
      height: 14px;
    }
  }
  span {
    font-size: 11px;
    color: #666;
    &.age {
      width: 22px;
      height: 22px;
      display: inline-block;
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
`;

const MovieUl = styled.ul`
  height: calc(100% - 116px);
  border-right: 1px solid #ddd;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: none;
    border-radius: 5px;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
      transition: all 0.3s ease;
    }
  }
`;

const FilterList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 61px;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ddd;
`;
const MovieSelect = ({
    movie,
    onSecondData,
    data,
}) => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
        onSecondData(movie);
    };
  return (
    <StepCinema style={{ background: "#f5f5f5" }}>
        <Title>{data.movie ? `${data.movie}` : '영화 선택'}</Title>
        <FilterList>
          <select>
            <option value={"예매순"}>예매순</option>
            <option value={"관객순"}>관객순</option>
            <option value={"평점순"}>평점순</option>
            <option value={"예정작"}>예정작</option>
          </select>
          <div>
            <MdDensityMedium />
            <MdWindow />
          </div>
        </FilterList>
        <MovieUl style={{ display: "block" }}>
          {movie.map((m) => (
            <AreaItem
              key={m.movie_num}
              onClick={() => handleSelectMovie(m.movie_name)}
              className={`movie_list ${
                selectedMovie === m.movie_name &&
                m.movie_name === data.movie
                  ? "selected"
                  : ""
              }`}
            >
              <span
                className={`${
                  m.age === "all"
                    ? "age_all"
                    : m.age === "12"
                    ? "age_12"
                    : m.age === "15"
                    ? "age_15"
                    : m.age === "19"
                    ? "age_19"
                    : ""
                } age`}
              ></span>
              {m.movie_name}
            </AreaItem>
          ))}
        </MovieUl>
      </StepCinema>
  )
}

export default MovieSelect;