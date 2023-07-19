import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

const MeetTagsBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;
const TagBlock = styled.div`
  transition: background-color 0.3s ease;
  padding: 0.2rem;
  border: 2px solid lightgray;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  &:hover {
    border: 2px solid red;
    background: white;
    font-weight: bold;
    color: hotpink;
  }
`;

const MeetTags = ({ tags }) => {
  return (
    <MeetTagsBlock>
      {tags.map((tag) => (
        <Link className="tag" to={`/meet/?tag=${tag}`} key={tag}>
          <TagBlock>#{tag}</TagBlock>
        </Link>
      ))}
    </MeetTagsBlock>
  );
};

export default MeetTags;
