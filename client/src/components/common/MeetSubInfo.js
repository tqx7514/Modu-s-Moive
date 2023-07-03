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

const MeetSubInfo = ({ userId, publishedDate, hasMarginTop }) => {
  return (
    <MeetSubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={`/meet?userId=${userId}`}>{userId}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </MeetSubInfoBlock>
  );
};

export default MeetSubInfo;
