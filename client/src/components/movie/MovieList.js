import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import Button from "../common/Button";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ChangePost = styled.div`
  display: flex;
  justify-content: center; 
`

const Changebutton = styled.div`
  
  button {
    background-color: white;
    cursor: pointer;
    margin: 10px;
    border: none;
    font-size: 20px;
    color: inherit;

    &:hover {
      color: #495057;
    }

    ${props =>
      props.active && css`
        font-weight: 600;
        border-bottom: 2px solid black;
      `
    }
  }
`;

const Sort = styled.div`
display: flex;

  button{
    background-color: white;
    cursor: pointer;
    border: none;
    margin: 10px;
  }
`

const MovieBlock = styled.div`
  width: 250px;
  margin: 16px;
  background-color: white;
  color: black;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid black;
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
    max-width: 100%;
    position: relative;
  }
`;

const MovieInfo = styled.div`
  display: block;
  padding: 20px;
  text-align: center;
  align-items: center;

  h4 {
    margin: 0;
  }
`;

const Movieimg = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 248px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;

  div {
    margin-top: 60%;
    margin-left: 30%;
  }
`;

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

const MovieList = ({
  movielist,
  handleCurrentMovies,
  handleUpcomingMovies,
  handleSortByPopularity,
  handleSortByStar,
  handleSortByCount,
}) => {
  console.log("111111111", movielist);

  return (
    <div>
      <ChangePost>
      <Changebutton>
        <button onClick={handleCurrentMovies}>현재 상영작</button>
        <button onClick={handleUpcomingMovies}>상영 예정작</button>
      </Changebutton>
      <Sort>
        <button onClick={handleSortByPopularity}>흥행도순</button>
        <hr />
        <button onClick={handleSortByStar}>평점순</button>
        <hr />
        <button onClick={handleSortByCount}>관람평 많은순</button>
        <hr />
        <button>보고싶어요순</button>
      </Sort>
      </ChangePost>
      <AppContainer>
        {Array.isArray(movielist) &&
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
                </MovieInfo>
              </MovieBlock>
            </div>
          ))}
      </AppContainer>
    </div>
  );
};

export default MovieList;
