import React from "react";
import { styled } from "styled-components";

const AdminTitle = ({ title }) => {
  return <StyledDiv>{title}</StyledDiv>;
};
export const AdminChartTitle = ({ title }) => {
  return <StyledChartDiv>{title}</StyledChartDiv>;
};

const StyledDiv = styled.h2`
  /* background-color: #191919; */
  /* color: #ee1c25; */
  /* border: 1px solid #ee1c25; */
  /* font-size: 1.4rem;
  font-weight: bold;
  padding: 0.5rem 2rem 0.5rem 0rem; */
  /* border-radius: 15px; */
`;

const StyledChartDiv = styled.div`
  background-color: #ee1c25;
  color: #191919;
  border: 2px solid #191919;
  border-radius: 15px;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0.5rem 2rem 0.5rem 2rem;
`;

export default AdminTitle;
