import React from "react";
import { styled } from "styled-components";

const AdminTitle = ({ title }) => {
  return <StyledDiv>{title}</StyledDiv>;
};

const StyledDiv = styled.div`
  background-color: #191919;
  color: #ee1c25;
  border: 1px solid #ee1c25;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0.5rem 2rem 0.5rem 2rem;
  border-radius: 15px;
`;

export default AdminTitle;
