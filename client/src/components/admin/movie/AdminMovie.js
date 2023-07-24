import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Button from "../../common/Button";
import { MdStarRate, BsStopwatch } from "react-icons/md";
import { Link } from "react-router-dom";
import AdminCarousel from "../../common/AdminCarousel";

const AdminMovieInfo = styled.div`
  background-color: gray;
`;

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 980px;
  margin: 0 auto;
  padding: 50px 0 0 0;
  h4 {
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
  button {
    cursor: pointer;
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

const AdminMovie = ({
  movielist,
  handleCurrentMovies,
  handleUpcomingMovies,
  handleUpcomingMovie,
  handleSortByPopularity,
  handleSortByStar,
  handleSortByCount,
  onEdit,
  onRemove,
  currentType,
}) => {

  const handleRemove = (movie_num) => {
    // 여기서 삭제 버튼을 눌렀을 때 처리할 로직을 구현합니다.
    onRemove(movie_num);
  };

  return (
    <AdminMovieInfo>
      <AdminCarousel movielist={movielist} />
      <ChangePost>
        <Changebutton>
          <button
            onClick={handleCurrentMovies}
            style={currentType === "currentmovielist" ? activeStyle : undefined}
          >
            현재상영작(DB)
          </button>
          <button
            onClick={handleUpcomingMovies}
            style={currentType === "movielist" ? activeStyle : undefined}
          >
            현재 상영작(API)
          </button>
          <button
            onClick={handleUpcomingMovie}
            style={currentType === "upcoming" ? activeStyle : undefined}
          >
            상영 예정작
          </button>
        </Changebutton>
        <Sort>
          <button onClick={handleSortByPopularity}>
            <span>흥행도순</span>
          </button>

          <button onClick={handleSortByStar}>
            <span>평점순</span>
          </button>

          <button onClick={handleSortByCount}>
            <span>관람평 많은순</span>
          </button>

          <button>
            <span className="span">보고싶어요순</span>
          </button>
        </Sort>
      </ChangePost>
      <AppContainer>
        {currentType === "currentmovielist" &&
          Array.isArray(movielist) &&
          movielist.map((item) => (
            <div className="movie-poster" key={item.movie_id}>
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
                  <h4>{item.movie_name}</h4>
                  <MdStarRate />
                  <span>{item.star}</span>
                  <div>
                  <button onClick={() => handleRemove(item.movie_num)}>
                      삭제하기
                      </button>
                  </div>
                </MovieInfo>
              </MovieBlock>
            </div>
          ))}
        {currentType === "movielist" &&
          Array.isArray(movielist) &&
          movielist.map((item) => (
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
                  <div>
                    <button
                      onClick={() =>
                        onEdit({
                          title: item.title,
                          vote_count: item.vote_count,
                          vote_average: item.vote_average,
                          popularity: item.popularity,
                          id: item.id,
                          poster_path: item.poster_path,
                        })
                      }
                    >
                      추가하기
                    </button>
                  </div>
                </MovieInfo>
              </MovieBlock>
            </div>
          ))}
        {currentType === "upcoming" &&
          Array.isArray(movielist) &&
          movielist.map((item) => (
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
                  <div>
                    <button
                      onClick={() =>
                        onEdit({
                          title: item.title,
                          vote_count: item.vote_count,
                          vote_average: item.vote_average,
                          popularity: item.popularity,
                          id: item.id,
                          poster_path: item.poster_path,
                        })
                      }
                    >
                      추가하기
                    </button>
                  </div>
                </MovieInfo>
              </MovieBlock>
            </div>
          ))}
      </AppContainer>
    </AdminMovieInfo>
  );
};

export default AdminMovie;
