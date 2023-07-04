import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoCarousel = ({ videos }) => {

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: Math.min(3, videos.length),
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 30000,
  };

    return (
      <div className="carousel">
        <Slider {...settings}>
          {videos.map((video) => (
            <div key={videos.key}>
              <iframe
                title={video.name}
                width="300"
                height="200"
                src={`https://www.youtube.com/embed/${video.key}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
export default VideoCarousel;