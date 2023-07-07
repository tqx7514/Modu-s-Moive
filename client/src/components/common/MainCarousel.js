import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight } from 'react-icons/md'

const Imgcarousel = styled.div`
  background-color: black;

  img{
    width: 100%;
    height: 420px;
    margin: 0 auto;
    object-fit: contain;
    
  }
`
const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 3%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 3%;
  z-index: 3;
`;

const Slidera = styled(Slider)`
    position: relative;
    .slick-dots{
        bottom: 20px;
    }

`


const ImageCarousel = ({movielist}) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 30000,
    nextArrow: (
        <NextTo>
            <MdKeyboardArrowRight/>
        </NextTo>
    ),
    prevArrow: (
        <Pre>
            <MdKeyboardArrowLeft/>
        </Pre>
    ),
  };

  return (
    <Imgcarousel>
    <h1>무비</h1>
      <Slidera {...settings}>
        {Array.isArray(movielist) && movielist?.map((image) => (
          <div key={image.id}>
            <img src={IMG_BASE_URL + image.poster_path} alt='영화 포스터'/>
          </div>
        ))}
      </Slidera>
    </Imgcarousel>
  );
};

export default ImageCarousel;
