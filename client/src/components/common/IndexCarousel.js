import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Imgcarousel = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 774px;
  width: 100%;
  z-index: 0;
  
  .carousel_button {
    position: absolute;
    bottom: 98px;
    right: 17%;
    display: flex;
    align-items: center;
  }

  .play {
    width: 0;
    height: 0;
    padding: 0;
    border-width: 6px 0 6px 10px;
    border-style: solid;
    border-color: transparent transparent transparent gray;
    text-indent: -9999em;
    background: transparent;
    cursor: pointer;
    &.active {
      border-color: transparent transparent transparent #fff;
    }
  }
  .pause {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    margin-left: 5px;
    padding: 0;
    text-indent: -9999em;
    background: gray;
    border: none;
    cursor: pointer;
    &.active {
      background-color: #fff;
    }
  }

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
    /* display: none; */
    background-color: #fff;
  }
  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
  }
  .slick-dots {
    z-index: 99;
    position: absolute;
    right: 20%;
    bottom: 95px;
    display: inline-block !important;
    justify-content: flex-end;
    width: auto !important;
    /* margin: 0 -455px 0 0; */
    /* margin: 0 auto; */

    button {
      &::before {
        color: #fff;
      }
    }
  }
  &:after {
    content: "";
    position: absolute;
    z-index: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 140px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 85%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

const PlayButton = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  width: 49px;
  height: 54px;
  margin: -27px 0 0 -24px;
  padding: 0;
  font: 0/0 a;
  border: 0;
  background-image: url("/btn_main_visual_play.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
`;

const Modal = styled.div`
  /* 모달 스타일 */
  position: fixed;
  bottom: 30%;
  left: 25%;
  width: 920px;
  height: 517.5px;
  background-color: white;
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
  z-index: 9999;
  overflow: hidden;
  border-radius: 10px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ModalContent = styled.div`
  padding: 25px;
  button {
    position: absolute;
    right: 10px;
    top: 5px;
    width: 19px;
    height: 19px;
    border: none;
    text-indent: -9999em;
    background: transparent url("/close_19.png") no-repeat 0 0;
    font-size: 12px;
    color: black;
    cursor: pointer;
  }
`;

const IndexCarousel = ({ currentmovielist }) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";
  console.log("aaaaaaaaaaaaa", currentmovielist);

  const [showModal, setShowModal] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);

  const closeModal = () => {
    setShowModal(false);
    // 모달이 닫힐 때 동영상을 정지시킴
    setVideoSrc(null);
  };

  const openModal = (videoSrc) => {
    setShowModal(true);
    // showModal이 true인 경우에만 videoSrc를 설정하여 동영상을 재생할 수 있도록 함
    setVideoSrc({ url: videoSrc, playing: true });
  };

  useEffect(() => {
    // 브라우저가 자동재생을 허용하는지 체크
    const isAutoplayEnabled =
      document.documentElement && "autoplay" in document.documentElement.style;

    setAutoplayEnabled(isAutoplayEnabled);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const sliderRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const play = () => {
    sliderRef.current.slickPlay();
    setIsPlaying(true);
  };

  const pause = () => {
    sliderRef.current.slickPause();
    setIsPlaying(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
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
    <>
      <Imgcarousel>
        <Slidera ref={sliderRef} {...settings} className="asdf">
          <div onClick={() => openModal("/Conan_1280720.mp4")}>
            <img src="/Conan_1920774.jpg" alt="명탐정코난" />
          </div>
          <div onClick={() => openModal("/RUBYGILLMAN_1280720.mp4")}>
            <img src="/RUBYGILLMAN_1920774.jpg" alt="틴에이지크라켄" />
          </div>
        </Slidera>
        <div className="carousel_button">
          <button
            className={`play ${isPlaying ? "active" : ""}`}
            onClick={play}
          >
            재생
          </button>
          <button
            className={`pause ${!isPlaying ? "active" : ""}`}
            onClick={pause}
          >
            정지
          </button>
        </div>
        <PlayButton onClick={() => openModal("/Conan_1280720.mp4")} />
      </Imgcarousel>
      <Modal show={showModal}>
        <ModalContent>
          <button onClick={closeModal}>닫기</button>
          {videoSrc && (
            <ReactPlayer
              url={videoSrc.url}
              controls
              width="100%"
              height="100%"
              playing={videoSrc.playing}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default IndexCarousel;
