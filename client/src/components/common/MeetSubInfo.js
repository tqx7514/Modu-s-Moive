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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5rem;

  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: "\\B7";
  }
`;

const RegionBlock = styled.div`
  transition: background-color 0.3s ease;
  width: fit-content;
  text-align: center;

  &:hover {
    color: red;
    font-weight: bold;
  }
`;

const MeetSubInfo = ({
  region,
  publishedDate,
  hasMarginTop,
  views,
  setSelectedRegion,
}) => {
  return (
    <MeetSubInfoBlock hasMarginTop={hasMarginTop}>
      <Link to={`/meet?region=${region}`}>
        <RegionBlock onClick={() => setSelectedRegion(region)}>
          {region}
        </RegionBlock>
      </Link>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </MeetSubInfoBlock>
  );
};

export default MeetSubInfo;
