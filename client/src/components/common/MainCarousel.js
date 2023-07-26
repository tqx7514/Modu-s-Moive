import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ReactPlayer from "../../../node_modules/react-player/lib/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Imgcarousel = styled.div`
  background-color: black;
  height: 420px;
  width: 1920px;
  img {
    margin: 0 auto;
    width: 100%;
  }
  .carousel_button {
    position: absolute;
    bottom: 445px;
    left: 53%;
    display: flex;
    align-items: center;
  }

  .play {
    width: 0;
    height: 0;
    padding: 0;
    border-width: 6px 0 6px 10px;
    border-style: solid;
    border-color: transparent transparent transparent #fff;
    text-indent: -9999em;
    background: transparent;
    cursor: pointer;
    &.active {
      border-color: transparent transparent transparent gray;
    }
  }
  .pause {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    margin-left: 5px;
    padding: 0;
    text-indent: -9999em;
    background: #fff;
    cursor: pointer;
    &.active {
      background-color: gray;
    }
  }
`;

const Pre = styled.div`
  width: 30px;
  height: 60px;
  position: absolute;
  margin-left: 0;
  left: 20px;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 30px;
  height: 60px;
  position: absolute;
  margin-right: 0;
  right: 20px;
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

const PlayButton = styled.button`
  position: absolute;
  left: 50%;
  top: 35%;
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

const MainCarousel = ({ currentmovielist }) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";
  const [showModal, setShowModal] = useState(false);
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

  const [autoplayEnabled, setAutoplayEnabled] = useState(false);

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
        <Slidera ref={sliderRef} {...settings}>
          <div onClick={() => openModal("/Conan_1280720.mp4")}>
            <img src="/Conan_1920420.jpg" alt="명탐정 코난" />
          </div>
          <div onClick={() => openModal("/RUBYGILLMAN_1280720.mp4")}>
            <img src="/RUBYGILLMAN_1920420.jpg" alt="틴 에이지 크라켄" />
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

export default MainCarousel;
