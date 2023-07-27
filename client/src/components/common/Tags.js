import styled from "styled-components";
import palette from "../../lib/styles/palette";

const TagsBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.gray[9]};
    text-decoration: none;
    margin-right: 0.5rem;
  }
`;

const Tags = ({ tags }) => {
  const tagArray = Array.isArray(tags) ? tags : JSON.parse(tags);

  return (
    <TagsBlock>
      {tagArray.map((tag) => (
        <span key={tag} className="tag">
          #{tag}
        </span>
      ))}
    </TagsBlock>
  );
};

export default Tags;
