import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Imgcarousel = styled.div`
  img{
    margin: 0 auto;
  }
`


const ImageCarousel = ({images}) => {
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
  };

  return (
    <Imgcarousel>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.file_path}>
            <img src={IMG_BASE_URL + image.file_path} alt='영화 포스터'/>
          </div>
        ))}
      </Slider>
    </Imgcarousel>
  );
};

export default ImageCarousel;
