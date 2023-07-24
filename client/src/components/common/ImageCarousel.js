import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Imgcarousel = styled.div`
`;
const StyledSlider = styled(Slider)`
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
  .img1{
    width: 980px;
    height: 566px;
    object-fit: contain;
  }

`;

const Pre = styled.div`
   left: 94%;
   top: -5px;
   position: absolute;
   margin-top: -20px;
`;

const NextTo = styled.div`
  right: 20px;
   top: -5px;
   margin-top: -20px;
   position: absolute;
   z-index: 3;
`;


const ImageCarousel = ({images}) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 30000,
    nextArrow: (
      <NextTo>
          <img src="/arr_rg_11.png" alt="" />
      </NextTo>
  ),
  prevArrow: (
      <Pre>
          <img src="/arr_lf_11.png" alt="" />
      </Pre>
  ),
  };

  return (
    <Imgcarousel>
      <StyledSlider {...settings}>
        {images && images.map((image) => (
          <div key={image.file_path}>
            <img className = "img1" src={IMG_BASE_URL + image.file_path} alt='영화 포스터'/>
          </div>
        ))}
      </StyledSlider>
    </Imgcarousel>
  );
};

export default ImageCarousel;
