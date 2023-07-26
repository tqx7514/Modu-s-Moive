import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { MdStarRate, MdOutlineWatchLater } from "react-icons/md";
import Button from "../common/Button";

const Imgcarousel = styled.div`
  background-color: black;
  position: static;
  margin-top: 624px;
  margin-bottom: 70px;

  .movie_title {
    color: white;
    width: 970px;
    margin: 0 auto;
    justify-content: right;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
  }
`;
const Pre = styled.div`
  width: 19px;
  height: 35px;
  position: absolute;
  top: 38%;
  left: -30px;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 19px;
  height: 35px;
  position: absolute;
  top: 38%;
  right: -30px;
  z-index: 3;
`;

const Slidera = styled(Slider)`
  position: relative;
  width: 980px;
  margin: 0 auto;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
  }
  .slick-dots {
    bottom: 20px;
  }
`;

const MovieBlock = styled.div`
  width: 184px;
  margin: 0 7.5px;
  background-color: black;
  color: white;
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
  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
  img {
    width: 22px;
    height: 22px;
    border-radius: 3px;
    margin-right: 5px;
  }
`;

const MovielistCarousel = ({ currentmovielist }) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";
  console.log("aaaaaaaaaaaaa", currentmovielist);

  const currentmovie = currentmovielist && currentmovielist.currentmovielist;
  console.log("MovieListCarousel의 currentmovie", currentmovie);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: (
      <NextTo>
        <img src="/arr_rg_31_wht.png" />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <img src="/arr_lf_31_wht.png" />
      </Pre>
    ),
  };

  return (
    <Imgcarousel>
      <div className="movie_title">
        <MdOutlineWatchLater />
        &nbsp;07.25 24:40기준
      </div>
      <Slidera {...settings}>
        {Array.isArray(currentmovie) &&
          currentmovie.map((item) => (
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
          ))}
      </Slidera>
    </Imgcarousel>
  );
};

export default MovielistCarousel;
