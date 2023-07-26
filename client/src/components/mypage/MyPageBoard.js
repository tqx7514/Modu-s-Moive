import { styled, css } from "styled-components";
import { Link } from "react-router-dom";
import MyPagePagination from "./MyPagePagination";
import { useState } from "react";
const MyPageBoardBlock = styled.div`
  > .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
  > .message {
    text-align: center;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;
const PostContent = styled.div`
  display: flex;
  padding: 0.5rem 0 0.5rem 0;

  &:hover {
    color: gray;
  }
`;

const BoardHeaderBlock = styled.div`
  margin: 2rem 0 0 0;
  padding: 1rem 0 1rem 0;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
`;
const BoardHeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${({ width }) => width && `flex-basis: ${width};`}

  > h4 {
    margin-right: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${({ wrapText }) =>
      wrapText &&
      css`
        word-wrap: break-word; /* 해당 속성을 추가합니다. */
      `}
  }
`;

const MyPageBoard = ({ user, myPost, loading, pagination, lastPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const formatCreatedAt = (date) => {
    const formattedDate = new Date(date);
    const today = new Date();
    let formattedCreatedAt = "";

    // 오늘 날짜인 경우
    if (
      formattedDate.getFullYear() === today.getFullYear() &&
      formattedDate.getMonth() === today.getMonth() &&
      formattedDate.getDate() === today.getDate()
    ) {
      const hours = formattedDate.getHours();
      const minutes = String(formattedDate.getMinutes()).padStart(2, "0");
      formattedCreatedAt = `${hours}:${minutes}`;
    } else {
      const year = String(formattedDate.getFullYear()).slice(-2);
      const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
      const day = String(formattedDate.getDate()).padStart(2, "0");
      formattedCreatedAt = `${year}.${month}.${day}`;
    }

    return formattedCreatedAt;
  };
  return (
    <MyPageBoardBlock>
      {loading ? (
        <div className="loading">
          <img src="/preloader_icon.gif" alt="" />
        </div>
      ) : (
        <>
          <BoardHeaderBlock>
            <BoardHeaderItem width="10%">번호</BoardHeaderItem>
            <BoardHeaderItem width="15%">아이디</BoardHeaderItem>
            <BoardHeaderItem width="50%">제목</BoardHeaderItem>
            <BoardHeaderItem width="13%">작성일</BoardHeaderItem>
            <BoardHeaderItem width="7%">조회수</BoardHeaderItem>
          </BoardHeaderBlock>
          {!myPost || myPost.length === 0 ? (
            <>
              <div className="loading">
                <div>
                  <img src="/nodata_80_01.png" alt="" />
                </div>
              </div>
              <div className="message">게시글 내역이 존재하지 않습니다</div>
            </>
          ) : (
            <div>
              {myPost.map((post, index) => (
                <Link to={`/post/detail/${post.postNum}`}>
                  <PostContent key={index}>
                    <BoardHeaderItem width="10%">
                      {post.postNum}
                    </BoardHeaderItem>
                    <BoardHeaderItem width="15%">{post.userId}</BoardHeaderItem>
                    <BoardHeaderItem width="50%">{post.title}</BoardHeaderItem>
                    <BoardHeaderItem width="13%">
                      {formatCreatedAt(post.createdAt)}
                    </BoardHeaderItem>
                    <BoardHeaderItem width="7%">{post.views}</BoardHeaderItem>
                  </PostContent>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
      <MyPagePagination
        page={currentPage}
        lastPage={lastPage}
        pagination={pagination}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </MyPageBoardBlock>
  );
};

export default MyPageBoard;
