import React, { useState } from "react";
import styled from "styled-components";

const StarInfo = styled.div``;

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

const StarRating = ({ onRate }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onRate(selectedRating);
  };

  const handleStarMouseEnter = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleStarMouseLeave = () => {
    // 별점 값 유지
  };

  return (
    <StarInfo>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
        <StarImg
          key={value}
          starimage={value <= rating ? "/ico_star64_on.png" : "/ico_star64_off.png"}
          className={value % 2 === 0 ? "reversible" : ""}
          onClick={() => handleStarClick(value)}
          onMouseEnter={() => handleStarMouseEnter(value)}
          onMouseLeave={handleStarMouseLeave}
          style={{ backgroundImage: `url(${value <= rating ? "/ico_star64_on.png" : "/ico_star64_off.png"})` }}
        />
      ))}
      <h1>{rating}</h1>
    </StarInfo>
  );
};

export default StarRating;

