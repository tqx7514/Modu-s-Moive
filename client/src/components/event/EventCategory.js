import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "event",
    text: "전체",
    path: "/event",
  },
  {
    name: "movie",
    text: "영화",
    path: "/movieevent",
  },
  {
    name: "promotion",
    text: "제휴/할인",
    path: "/promotionevent",
  },
  {
    name: "etc",
    text: "기타",
    path: "/etcevent",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(Link)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${(props) =>
    props.active.toString() === "true" &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const EventCategory = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          to={c.path}
          active={category === c.name ? "true" : "false"}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default EventCategory;
