import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Imgcarousel = styled.div`
  background-color: black;
  height: 774px;
  width: 100%;
  position: relative;
  z-index: 0;

  /* img {
    width: 100%;
    height: 774px;
    margin: 0 auto;
    object-fit: contain;
  } */
`;
const Pre = styled.div`
  width: 31px;
  height: 60px;
  position: absolute;
  margin-top: -15px;
  left: 30px;
  z-index: 3;
  background-size: auto;
`;

const NextTo = styled.div`
  width: 31px;
  height: 60px;
  position: absolute;
  margin-top: -15px;
  right: 30px;
  background-size: auto;
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
  &:after{
    content: "";
    position: absolute;
    z-index: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 140px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 1) 100%);
  }
`;

const IndexCarousel = ({ currentmovielist }) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";
  console.log("aaaaaaaaaaaaa", currentmovielist)

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
      <Slidera {...settings}>
        {/* {Array.isArray(currentmovielist) &&
          currentmovielist.map((image) => (
            <div key={image.id}>
              <img src={IMG_BASE_URL + (image.img || image.poster_path)} alt="영화 포스터" />
            </div>
          ))}
           */}
           <div>
            <img src="/Conan_1920774.jpg" alt="" />
           </div>
           <div>
            <img src="RUBYGILLMAN_1920774.jpg" alt="" />
           </div>
      </Slidera>
    </Imgcarousel>
  );
};

export default IndexCarousel;
