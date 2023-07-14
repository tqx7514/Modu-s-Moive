import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const CategoryBlock = styled.div`
  display: flex;
  width: 980px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin: 20px 0 20px 0;
`;

const Category = styled(NavLink)`
  font-size: 16px;
  color: inherit;
  margin: 10px 10px 10px 10px;
  display: inline-block;

  &:not(:last-child)::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 100%;
    background-color: #fff;
    margin-left: 10px;
  }

  &.active {
    font-weight: bold;
    font-size: 20px;
    margin: 0 10px;
  }
`;

const EventCategory = () => {
  return (
    <>
      <CategoryBlock>
        <Category to="/event/" activeclassname="active">
          전체
        </Category>
        <Category to="/event/movie" activeclassname="active">
          영화
        </Category>
        <Category to="/event/promote" activeclassname="active">
          제휴/할인
        </Category>
        <Category to="/event/other" activeclassname="active">
          기타
        </Category>
      </CategoryBlock>
    </>
  );
};

export default EventCategory;
