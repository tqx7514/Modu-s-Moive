import React, { useState, useCallback } from "react";
import styled from "styled-components";

const StarInfo = styled.div`

  img {
    width: 137px;
    height: 137px;
  }
`;

const StarImg = styled.span`
  cursor: pointer;
  display: inline-block;
  width: 32px;
  height: 62px;
  background: url(${(props) => props.starimage}) no-repeat;
  &.reversible {
    background-position: -32px 0;
  }
`;

const StarRating = ({ onRate, onChangestar, star, content, commentNum, onEdit, oncloseModal }) => {
  const [rating, setRating] = useState(10);

  const handleStarClick = useCallback(
    (selectedRating) => {
      setRating(selectedRating);
      onRate(selectedRating);
    },
    [onRate]
  );

  const handleStarMouseEnter = useCallback(
    (selectedRating) => {
      setRating(selectedRating);
      onChangestar({ target: { value: selectedRating } });
    },
    [onChangestar]
  );

  const handleStarMouseLeave = useCallback(() => {
    // 별점 값 유지
  }, []);

  const getCharacterImage = (rating) => {
    if (rating >= 9) {
      return "/temp_reviewcharacterbig_01.png";
    } else if (rating >= 7) {
      return "/icon_reviewcharacterbig_4.svg";
    } else if (rating >= 5) {
      return "/icon_reviewcharacterbig_3.svg";
    } else if (rating >= 3) {
      return "/icon_reviewcharacterbig_2.svg";
    } else {
      return "/icon_reviewcharacterbig_1.svg";
    }
  };

  return (
    <StarInfo>
      <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
        <StarImg
          key={value}
          value={star}
          starimage={value <= rating ? "/ico_star64_on.png" : "/ico_star64_off.png"}
          className={value % 2 === 0 ? "reversible" : ""}
          onClick={() => handleStarClick(value)}
          onMouseEnter={() => handleStarMouseEnter(value)}
          onMouseLeave={handleStarMouseLeave}
          style={{
            backgroundImage: `url(${value <= rating ? "/ico_star64_on.png" : "/ico_star64_off.png"})`,
          }}
        />
      ))}
      </div>
      <img src={getCharacterImage(rating)} alt={`별점 ${rating}`} />
      
    </StarInfo>
  );
};

export default StarRating;
