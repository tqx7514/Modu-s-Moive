import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StepArea = styled.div`
  width: 30%;
  height: 100%;
  div {
    display: flex;
  }
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

const CinemaBtn = styled.button`
  display: block;
  width: 50%;
  height: 61px;
  text-align: center;
  background: #f5f5f5;
  color: #7f7f7f;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: border 0.1s ease-in-out;
  cursor: pointer;
  border-right: 1px solid #ddd;
  &:first-child {
    border-right: none;
  }
  &.selected {
    color: #000;
    font-weight: 400;
    border-bottom: 2px solid;
  }
`;

const AreaUl = styled.ul`
  display: flex;
  height: calc(100% - 116px);
  border-right: 1px solid #ddd;
`;
const AreaLi = styled.li`
  width: 50%;
  height: 100%;
  background: #f5f5f5;
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

const SelectCinema = ({
  region,
  cinema,
  onSelectRegion,
  onSelectCinema,
  onFirstData,
}) => {
  const [selectedSpecial, setSelectedSpecial] = useState("전체");
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState("영화관");

  const handleSelectedSpecial = (e) => {
    setSelectedSpecial(e.target.textContent);
  };

  const handleSelectRegion = (grade) => {
    setSelectedRegion(grade);
    onSelectRegion(grade);
  };

  useEffect(() => {
    setSelectedRegion(1);
  }, []);

  const handleSelectCinema = (cinema) => {
    setSelectedCinema(cinema);
    onFirstData(cinema);
    onSelectCinema();
  };

    return (
      <StepArea>
        <Title>{selectedCinema}</Title>
        <div>
          <CinemaBtn
            onClick={(e) => handleSelectedSpecial(e)}
            className={selectedSpecial === "전체" ? "selected" : ""}
          >
            전체
          </CinemaBtn>
          <CinemaBtn
            onClick={(e) => handleSelectedSpecial(e)}
            className={selectedSpecial === "스페셜관" ? "selected" : ""}
            style={{ background: "white" }}
          >
            스페셜관
          </CinemaBtn>
        </div>
        <AreaUl>
        {selectedSpecial === '전체' ? (
          <>
          <AreaLi style={{ overflow: "inherit" }}>
            <ul>
              {region &&
                region.map((r) => (
                  <AreaItem
                    key={r.grade}
                    href="#none"
                    className={selectedRegion === r.grade ? "selected" : ""}
                    onClick={() => handleSelectRegion(r.grade)}
                  >
                    {r.region}
                    <span>({r.cinemas.length})</span>
                  </AreaItem>
                ))}
            </ul>
          </AreaLi>
          <AreaLi style={{ background: "white" }}>
            <ul>
              {cinema &&
                cinema.map((c) => (
                  <AreaItem
                    key={c.cinema_num}
                    onClick={() => handleSelectCinema(c.cinema)}
                    className={selectedCinema === c.cinema ? "selected" : ""}
                  >
                    {c.cinema}
                  </AreaItem>
                ))}
            </ul>
          </AreaLi>
          </>
      ) : (
      <>
        <AreaLi></AreaLi>
        <AreaLi style={{ background: "white" }}></AreaLi>
      </>
      )}
        </AreaUl>
      </StepArea>
    );
};

export default SelectCinema;
