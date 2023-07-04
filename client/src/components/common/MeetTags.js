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

const MeetTags = ({ tags }) => {
  return (
    <MeetTagsBlock>
      {tags.map((tag) => (
        <Link className="tag" to={`/meet/?tag=${tag}`} key={tag}>
          #{tag}
        </Link>
      ))}
    </MeetTagsBlock>
  );
};

export default MeetTags;
