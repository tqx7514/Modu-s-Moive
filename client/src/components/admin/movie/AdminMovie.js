import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Button from "../../common/Button";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import { AdminBottomRightBlock } from "../main/AdminBottomRight";

const AdminMovieInfo = styled.div``;

const AppContainer = styled.div`
  /* display: flex; */
  flex-wrap: wrap;
  justify-content: center;
  width: 980px;
  margin: 0 auto;
  padding: 50px 0 0 0;
  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ChangePost = styled.div`
  display: flex;
  color: #495057;
  width: 980px;
  margin: 0 auto;
  justify-content: space-between;
`;
const Changebutton = styled.div`
  button {
    background-color: white;
    cursor: pointer;
    margin: 10px;
    border: none;
    font-size: 18px;
    color: inherit;
  }
`;
const activeStyle = {
  color: "black",
  fontWeight: "bold",
  borderBottom: "2px solid black",
  display: "inline-block",
};

const MovieBlock = styled.div`
  width: 184px;
  margin: 0 7.5px;
  background-color: white;
  color: black;
  border-radius: 5px;
  position: relative;

  &:hover {
    .movieImg {
      display: block;
    }
  }

  Button {
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: inherit;
    border: 1px solid white;
    margin-bottom: 10%;

    &:hover {
      background-color: inherit;
    }
  }

  img {
    width: 100%;
    height: 262px;
    border-radius: 4px;
    position: relative;
  }
`;

const MovieInfo = styled.div`
  display: block;
  text-align: center;
  align-items: center;
  font-size: 13px;
  margin-bottom: 42px;
  button {
    cursor: pointer;
  }
`;

const Movieimg = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 262px;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  display: none;

  div {
    margin-top: 45%;
    margin-left: 26%;
  }
`;

const InquiryHeaderBlock = styled.div`
  margin: 2rem 0 0 0;
  padding: 1rem 0 1rem 0;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
`;
const InquiryHeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
  }
  ${({ width }) => width && `flex-basis: ${width};`}

  > h4 {
    margin-right: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${({ wrapText }) =>
      wrapText &&
      css`
        word-wrap: break-word;
      `}
  }

  > div > .body {
    margin-top: 1rem;
  }

  > .done {
    border: 1px solid black;
    border-radius: 52px;
    width: 76px;
    height: 33px;
    font-size: 13px;
    text-align: center;
    line-height: 31px;
    background-color: lightgreen;
    font-weight: bold;
    /* color: white; */
  }
  > .undone {
    border: 1px solid black;
    border-radius: 52px;
    width: 76px;
    height: 33px;
    font-size: 13px;
    text-align: center;
    line-height: 31px;
    background-color: lightpink;
    font-weight: bold;
    /* color: white; */
  }
`;

const InquiryBlock = styled.div`
  border: ${(props) => (props.clicked ? "1px solid black" : "none")};
  border-radius: 12px;
`;

const Buttons = styled.button`
  margin-right: 0.5rem;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  min-height: 2rem;
  min-width: 6rem;
  border: none;
  border-radius: 5px;
  background-color: gainsboro;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  ${(props) =>
    props.category &&
    css`
      background-color: slategray;
      color: lightgoldenrodyellow;
    `}
  &:hover {
    background-color: slategray;
    color: lightgoldenrodyellow;
  }
`;
const CategoryBlock = styled.div`
  display: flex;
  justify-content: end;
  margin: 1.5rem 2rem 0 0;
  align-items: center;
`;

const AdminInquiryBlock = styled.div`
  /* background-color: gray; */
  /* height: 160vh; */
  > .end {
    border-top: 1px solid lightgray;
    margin: 0.2rem 0 1rem 0;
  }
`;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 2rem 1rem 2rem;
  border-bottom: 2px solid black;
  align-items: center;
  width: 100%;

  > div {
    font-size: 1.4rem;
    font-weight: bold;
    > span {
      color: #ee1c25;
    }
  }
`;
const InquiryContent = styled.div`
  display: flex;
  padding: 0.5rem 0 0.5rem 0;
`;

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

const AdminMovie = ({
  movielist,
  handleCurrentMovies,
  handleUpcomingMovies,
  handleUpcomingMovie,
  onEdit,
  onRemove,
  currentType,
}) => {
  const handleRemove = (movie_num) => {
    onRemove(movie_num);
  };

  return (
    <AdminBottomRightBlock>
      <div className="title">
        <h2>영화 관리</h2>
      </div>
      <ChangePost>
        <Changebutton>
          <button
            onClick={handleCurrentMovies}
            style={currentType === "currentmovielist" ? activeStyle : undefined}
          >
            현재상영작(DB)
          </button>
          <button
            onClick={handleUpcomingMovies}
            style={currentType === "movielist" ? activeStyle : undefined}
          >
            현재 상영작(API)
          </button>
          <button
            onClick={handleUpcomingMovie}
            style={currentType === "upcoming" ? activeStyle : undefined}
          >
            상영 예정작
          </button>
        </Changebutton>
      </ChangePost>
      <AppContainer>
        <div>
          {currentType === "currentmovielist" ? (
            <InquiryHeaderBlock>
              <InquiryHeaderItem width="15%">무비번호</InquiryHeaderItem>
              <InquiryHeaderItem width="20%">이미지</InquiryHeaderItem>
              <InquiryHeaderItem width="20%">무비아이디</InquiryHeaderItem>
              <InquiryHeaderItem width="35%">무비이름</InquiryHeaderItem>
              <InquiryHeaderItem width="10%">예매</InquiryHeaderItem>
              <InquiryHeaderItem width="10%">별점</InquiryHeaderItem>
              <InquiryHeaderItem width="10%">인기</InquiryHeaderItem>
              <InquiryHeaderItem width="10%">연령</InquiryHeaderItem>
              <InquiryHeaderItem width="10%">삭제</InquiryHeaderItem>
            </InquiryHeaderBlock>
          ) : (
            <InquiryHeaderBlock>
              <InquiryHeaderItem width="20%">이미지</InquiryHeaderItem>
              <InquiryHeaderItem width="20%">무비아이디</InquiryHeaderItem>
              <InquiryHeaderItem width="35%">무비이름</InquiryHeaderItem>
              <InquiryHeaderItem width="10%">예매</InquiryHeaderItem>
              <InquiryHeaderItem width="10%">별점</InquiryHeaderItem>
              <InquiryHeaderItem width="10%">인기</InquiryHeaderItem>
              <InquiryHeaderItem width="10%">추가</InquiryHeaderItem>
            </InquiryHeaderBlock>
          )}
          {currentType === "currentmovielist" &&
            Array.isArray(movielist) &&
            movielist.map((item) => (
              <InquiryBlock>
                <InquiryContent>
                  <InquiryHeaderItem width="15%">
                    {item.movie_num}
                  </InquiryHeaderItem>
                  <InquiryHeaderItem width="20%">
                    <img src={IMG_BASE_URL + item.img} />
                  </InquiryHeaderItem>
                  <InquiryHeaderItem width="20%">
                    {item.movie_id}
                  </InquiryHeaderItem>
                  <InquiryHeaderItem width="35%">
                    {item.movie_name}
                  </InquiryHeaderItem>
                  <InquiryHeaderItem width="10%">
                    {item.tiketing}
                  </InquiryHeaderItem>
                  <InquiryHeaderItem width="10%">{item.star}</InquiryHeaderItem>
                  <InquiryHeaderItem width="10%">
                    {item.popularity}
                  </InquiryHeaderItem>
                  <InquiryHeaderItem width="10%">{item.age}</InquiryHeaderItem>
                  <InquiryHeaderItem width="10%">
                    <button onClick={() => onRemove(item.movie_num)}>삭제</button>
                  </InquiryHeaderItem>
                </InquiryContent>
              </InquiryBlock>
            ))}
        </div>
        <div className="end"></div>
        {/* <MyPageInquiryPagination
                  lastPage={lastPage}
                  currentPage={currentPage}
                  handleNextPage={handleNextPage}
                  handlePreviousPage={handlePreviousPage}
                /> */}
        <div>
          {currentType === "movielist" &&
            Array.isArray(movielist) &&
            movielist.map((item) => (
              <InquiryBlock>
                <InquiryContent>
                  <InquiryHeaderItem width="20%">
                    <img src={IMG_BASE_URL + item.poster_path} />
                  </InquiryHeaderItem>
                  <InquiryHeaderItem width="20%">{item.id}</InquiryHeaderItem>
                  <InquiryHeaderItem width="35%">
                    {item.title}
                  </InquiryHeaderItem>
                  <InquiryHeaderItem width="10%">
                    {item.popularity}
                  </InquiryHeaderItem>
                  <InquiryHeaderItem width="10%">
                    {item.vote_average}
                  </InquiryHeaderItem>
                  <InquiryHeaderItem width="10%">
                    {item.vote_count}
                  </InquiryHeaderItem>
                  <InquiryHeaderItem width="10%">
                    <button
                      onClick={() =>
                        onEdit(
                          item.title,
                          item.vote_count,
                          item.vote_average,
                          item.popularity,
                          item.id,
                          item.poster_path,
                        )
                      }
                    >
                      등록
                    </button>
                  </InquiryHeaderItem>
                </InquiryContent>
              </InquiryBlock>
            ))}
        </div>
        <div className="end"></div>
        {/* <MyPageInquiryPagination
              lastPage={lastPage}
              currentPage={currentPage}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
            /> */}
        {currentType === "upcoming" &&
          Array.isArray(movielist) &&
          movielist.map((item) => (
            <InquiryBlock>
              <InquiryContent>
                <InquiryHeaderItem width="20%">
                  <img src={IMG_BASE_URL + item.poster_path} />
                </InquiryHeaderItem>
                <InquiryHeaderItem width="20%">{item.id}</InquiryHeaderItem>
                <InquiryHeaderItem width="35%">{item.title}</InquiryHeaderItem>
                <InquiryHeaderItem width="10%">
                  {item.popularity}
                </InquiryHeaderItem>
                <InquiryHeaderItem width="10%">
                  {item.vote_average}
                </InquiryHeaderItem>
                <InquiryHeaderItem width="10%">
                  {item.vote_count}
                </InquiryHeaderItem>
                <InquiryHeaderItem width="10%">
                <button
                      onClick={() =>
                        onEdit(
                          item.title,
                          item.vote_count,
                          item.vote_average,
                          item.popularity,
                          item.id,
                          item.poster_path,
                        )
                      }
                    >
                      등록
                    </button>
                </InquiryHeaderItem>
              </InquiryContent>
            </InquiryBlock>
          ))}
      </AppContainer>
    </AdminBottomRightBlock>
  );
};

export default AdminMovie;
