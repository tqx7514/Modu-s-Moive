import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const StyledSlider = styled(Slider)`
  height: 260px;
  width: 100%;
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

const VideoCarousel = ({ videos }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: Math.min(3, videos.length),
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,
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
    <div className="carousel">
      <StyledSlider {...settings}>
        {videos.map((video) => (
          <div key={video.key}>
            {/* <LazyLoad height={200} offset={100}> */}
              <iframe
                title={video.name}
                width="300"
                height="200"
                src={`https://www.youtube.com/embed/${video.key}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            {/* </LazyLoad> */}
          </div>
        ))}
      </StyledSlider>
    </div>
  );
};
export default VideoCarousel;
