import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md'

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
`;
const NextBtn = styled.button`
width: 30px;
height: 30px;
color: ${props => (props.disabled ? '#ddd' : '#bbb')};
cursor: ${props => (props.disabled ? 'default' : 'pointer')};
svg{
    width: 100%;
    height: 100%;
}
&:hover{
    color: ${props => (props.disabled ? '#ddd' : '#333')};
}
`;
const PrevBtn = styled.button`
width: 30px;
height: 30px;
color: ${props => (props.disabled ? '#ddd' : '#bbb')};
cursor: ${props => (props.disabled ? 'default' : 'pointer')};
svg{
    width: 100%;
    height: 100%;
}
&:hover{
    color: ${props => (props.disabled ? '#ddd' : '#333')};
}
`;

const MultipleItems = ({Calendar}) => {
    const sliderRef = useRef(null);
    const [isFirst, setIsFirst] = useState(true);
    const [isLast, setIsLast] = useState(false);
  
    useEffect(() => {
      const slidecount = Calendar.length;
      setIsLast(slidecount <= 8);
    }, [Calendar]);
  
    const handleBeforeChange = (currentslide, nextSlide) => {
      setIsFirst(nextSlide === 0);
      setIsLast(nextSlide + 8 >= Calendar.length);
    };
  
    const handlePrevClick = () => {
      sliderRef.current.slickPrev();
    };
  
    const handleNextClick = () => {
      sliderRef.current.slickNext();
    };
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 8,
      nextArrow: <NextBtn onClick={handleNextClick} disabled={isLast}><MdArrowForwardIos/></NextBtn>,
      prevArrow: <PrevBtn onClick={handlePrevClick} disabled={isFirst}><MdArrowBackIos/></PrevBtn>,
      beforeChange: handleBeforeChange,
    }

    return (
      <div>
        <StyledSlider ref={sliderRef} {...settings}>
          {Calendar.map((item, index) =>(
            <div key={index}>
                {item}
            </div>
          ))}
        </StyledSlider>
      </div>
    );
}

  export default MultipleItems;