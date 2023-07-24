import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Imgcarousel = styled.div`
  background-color: black;

  img {
    width: 100%;
    height: 420px;
    margin: 0 auto;
    object-fit: contain;
  }
`;
const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 1px;
  left: 3%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 1px;
  right: 3%;
  z-index: 3;
`;

const Slidera = styled(Slider)`
  position: relative;
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

const AdminCarousel = ({ movielist}) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 30000,
    nextArrow: (
      <NextTo>
        <img src="/arr_rg_31_wht.png"/>
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <img src="/arr_lf_31_wht.png"/>
      </Pre>
    ),
  };

  return (
    <Imgcarousel>
      <h1>무비</h1>
      <Slidera {...settings}>
        {Array.isArray(movielist) &&
          movielist?.map((image) => (
            <div key={image.id}>
              <img src={IMG_BASE_URL + image.poster_path} alt="영화 포스터" />
            </div>
          ))}
      </Slidera>
    </Imgcarousel>
  );
};

export default AdminCarousel;
