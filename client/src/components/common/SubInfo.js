import styled, { css } from "styled-components";

const SubInfoBlock = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}

  span + span:before {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: "\\B7";
  }
`;

const SubInfo = ({ username, publishedDate, hasMarginTop, views }) => {
  const formattedDate = new Date(publishedDate).toLocaleDateString();
  const displayDate = formattedDate !== "Invalid Date" ? formattedDate : null;

  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <h3>{username}</h3>
      </span>
      <h3>{displayDate && <span>{displayDate}</span>}</h3>
    </SubInfoBlock>
  );
};

export default SubInfo;
