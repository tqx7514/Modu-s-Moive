import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Button from "../common/Button";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import MainCarousel from "../common/MainCarousel";

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 980px;
  margin: 0 auto;
  padding: 50px 0 0 0;
  h4{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ChangePost = styled.div`
  display: flex;
  color: #495057;
  width: 980px;
  margin: 0 auto;
  justify-content: space-between;
`;
const Changebutton = styled.div`
  button {
    background-color: white;
    cursor: pointer;
    margin: 10px;
    border: none;
    font-size: 18px;
    color: inherit;
  }
`;
const activeStyle = {
  color: "black",
  fontWeight: "bold",
  borderBottom: "2px solid black",
  display: "inline-block",
};

const Sort = styled.div`
  display: flex;
  margin-left: auto;

  button {
    background-color: white;
    cursor: pointer;
    border: none;
    font-size: 13px;
  }

  button span {
    color: #495057;
    border-right: 1px solid black;
    padding: 0 13px;
  }

  .span {
    border: none;
  }
`;

const MovieBlock = styled.div`
  width: 184px;
  margin: 0 7.5px;
  background-color: white;
  color: black;
  border-radius: 5px;
  position: relative;

  &:hover {
    .movieImg {
      display: block;
    }
  }

  Button {
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: inherit;
    border: 1px solid white;
    margin-bottom: 10%;

    &:hover {
      background-color: inherit;
    }
  }

  img {
    width: 100%;
    height: 262px;
    border-radius: 4px;
    position: relative;
  }
`;

const MovieInfo = styled.div`
  display: block;
  text-align: center;
  align-items: center;
  font-size: 13px;
  margin-bottom: 42px;
  div {
    display: flex;
    justify-content: center;
  }
  img{
    width: 22px;
    height: 22px;
    border-radius: 3px;
    margin-right: 5px;
  }
`;

const Movieimg = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 262px;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  display: none;

  div {
    margin-top: 45%;
    margin-left: 26%;
  }
`;

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

const MovieList = ({
  currentmovielist,
  handleCurrentMovies,
  handleUpcomingMovies,
  handleSortByPopularity,
  handleSortByStar,
  handleSortByCount,
  SortPopularity,
  SortStar,
  SortCount
}) => {
  const [isActive, setIsActive] = useState(true); // 현재상영작 버튼을 초기에 활성화 상태로 설정

  const handleClickCurrentMovies = () => {
    handleCurrentMovies();
    setIsActive(true);
  };

  const handleClickUpcomingMovies = () => {
    handleUpcomingMovies();
    setIsActive(false);
  };
  console.log("movilist=========+++>",currentmovielist);

  return (
    <div>
      <MainCarousel currentmovielist={currentmovielist} />
      <ChangePost>
        <Changebutton>
          <button
            onClick={handleClickCurrentMovies}
            style={isActive === true ? activeStyle : undefined}
          >
            현재 상영작
          </button>
          <button
            onClick={handleClickUpcomingMovies}
            style={isActive === false ? activeStyle : undefined}
          >
            상영 예정작
          </button>
        </Changebutton>
        <Sort>
          <button onClick={isActive ? handleSortByPopularity : SortPopularity}>
            <span>흥행도순</span>
          </button>

          <button onClick={isActive ? handleSortByStar : SortStar}>
            <span>평점순</span>
          </button>

          <button onClick={isActive ? handleSortByCount : SortCount}>
            <span>관람평 많은순</span>
          </button>

          <button>
            <span className="span">보고싶어요순</span>
          </button>
        </Sort>
      </ChangePost>
      <AppContainer>
      {isActive === true ? (
          // 현재 상영작 목록 출력
          Array.isArray(currentmovielist) &&
          currentmovielist.map((item) => (
            <div className="movie-poster" key={item.movie_num}>
              <MovieBlock>
                <img src={IMG_BASE_URL + item.img} alt="영화포스터" />
                {true && (
                  <Movieimg className="movieImg">
                    <div>
                      <Link to={"/ticket"}>
                        <Button>예매하기</Button>
                      </Link>
                      <Link to={`/currentmovie/detail/${item.movie_id}`}>
                        <Button>상세정보</Button>
                      </Link>
                    </div>
                  </Movieimg>
                )}
                <MovieInfo>
                  <div>
                  {item.age === "all" ? (
                      <img src="/age_all.png" alt="전체 관람 가능" />
                    ) : item.age === "12" ? (
                      <img src="/age_12.png" alt="12세 이상 관람 가능" />
                    ) : item.age === "15" ? (
                      <img src="/age_15.png" alt="15세 이상 관람 가능" />
                    ) : item.age === "19" ? (
                      <img src="/age_19.png" alt="19세 이상 관람 가능" />
                    ) : null}
                  <h4>{item.movie_name}</h4>
                  </div>
                  <MdStarRate />
                  <span>{item.star}</span>
                </MovieInfo>
              </MovieBlock>
              </div>
          ))
        ) : (
          Array.isArray(currentmovielist) &&
          currentmovielist.map((item) => (
            <div className="movie-poster" key={item.id}>
              <MovieBlock>
                <img src={IMG_BASE_URL + item.poster_path} alt="영화포스터" />
                {true && (
                  <Movieimg className="movieImg">
                    <div>
                      <Link to={"/ticket"}>
                        <Button>예매하기</Button>
                      </Link>
                      <Link to={`/currentmovie/detail/${item.id}`}>
                        <Button>상세정보</Button>
                      </Link>
                    </div>
                  </Movieimg>
                )}
                <MovieInfo>
                  <h4>{item.title}</h4>
                  <MdStarRate />
                  <span>{item.vote_average}</span>
                </MovieInfo>
              </MovieBlock>
          </div>
          ))
        )}
      </AppContainer>
    </div>
  );
};

export default MovieList;
