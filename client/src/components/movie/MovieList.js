import React from 'react';
import styled, { css } from 'styled-components';
import Button from "../common/Button";
import { MdStarRate } from 'react-icons/md';
import { Link } from "react-router-dom";


const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoriesBlock = styled.div`
  display: flex;
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  ${props =>
    props.active &&
    css`
      border-bottom: 2px solid black;
    `};

  & + & {
    margin-left: 1rem;
  }
`;

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
      .movieImg{
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

const MovieList = ({movielist}) => {
  console.log("111111111", movielist);
  return (
    <div>
      <button>현재 상영작</button>
      <button>상영 예정작</button>
      <AppContainer>
        {movielist.map(item => (
          <div className='movie-poster' key={item.id} >
            <MovieBlock>
              <img src={IMG_BASE_URL + item.poster_path} alt="영화포스터" />
              {true && (
                <Movieimg className='movieImg'>
                  <div>
                    <Link to={'/ticket'}>
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
                <MdStarRate /><span>{item.vote_average}</span>
              </MovieInfo>
            </MovieBlock>
          </div>
        ))}
      </AppContainer>
    </div>
  );
};

export default MovieList;
