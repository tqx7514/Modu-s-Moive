import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const MeetSubInfoBlock = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: "\\B7";
  }
`;
const RegionBlock = styled.div`
  transition: background-color 0.3s ease;
  /* padding: 0.5rem; */

  &:hover {
    color: blue;
    font-weight: bold;
  }
`;

const MeetSubInfo = ({ region, publishedDate, hasMarginTop, likes }) => {
  return (
    <MeetSubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <Link to={`/meet?region=${region}`}>
          <RegionBlock>지역 : {region}</RegionBlock>
        </Link>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </MeetSubInfoBlock>
  );
};

export default MeetSubInfo;
