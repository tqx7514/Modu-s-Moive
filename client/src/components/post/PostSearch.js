import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const PostSearchBlock = styled(Responsive)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
`;

const PostSearchBox = styled.div`
  border: 1px solid black;
  width: 500px;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    height: 2rem;
    padding: 0.5rem;
    border: none;
    outline: none;
  }
  button {
    height: 2rem;
    padding: 0 1rem;
    border: none;
    outline: none;
    background: ${palette.gray[8]};
    color: white;
    cursor: pointer;
  }
`;

const PostSearch = ({ onSearch }) => {
  const [searchResult, setSearchResult] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchResult(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchResult);
    navigate(`/postlist?title=${encodeURIComponent(searchResult)}`);
  };

  return (
    <PostSearchBlock>
      <PostSearchBox>
        <input
          type="text"
          placeholder="제목 검색"
          value={searchResult}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </button>
      </PostSearchBox>
    </PostSearchBlock>
  );
};

export default PostSearch;
