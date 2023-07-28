import { styled, css } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import MyPageInquiryPagination from "./MyPageInquiryPagination";
import Button from "../common/Button";

const MyPageInquiry = ({
  myInquiry,
  user,
  loading,
  lastPage,
  handleNextPage,
  handlePreviousPage,
  currentPage,
  onWriteClick,
}) => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [expandedInquiry, setExpandedInquiry] = useState({});

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
  const formattedBody = (body) => {
    return body.replaceAll("\n", "<br />");
  };

  // 게시글 확장/축소 토글 함수
  const toggleExpandedInquiry = (inquiryNum) => {
    // If the clicked inquiry is already expanded, collapse it
    if (expandedInquiry[inquiryNum]) {
      setExpandedInquiry((prevState) => ({
        ...prevState,
        [inquiryNum]: !prevState[inquiryNum],
      }));
      setClickedIndex(null); // Reset the clickedIndex
    } else {
      // If a different inquiry is already expanded, collapse it first
      const expandedInquiryNums = Object.keys(expandedInquiry).filter(
        (key) => expandedInquiry[key]
      );

      if (expandedInquiryNums.length > 0) {
        const currentlyExpanded = expandedInquiryNums[0];
        setExpandedInquiry((prevState) => ({
          ...prevState,
          [currentlyExpanded]: false,
          [inquiryNum]: true,
        }));
        setClickedIndex(inquiryNum); // Set the clickedIndex to the clicked inquiry
      } else {
        // If no inquiry is expanded, simply expand the clicked one
        setExpandedInquiry((prevState) => ({
          ...prevState,
          [inquiryNum]: true,
        }));
        setClickedIndex(inquiryNum); // Set the clickedIndex to the clicked inquiry
      }
    }
  };

  const state = (a) => {
    if (a === "") {
      return false;
    } else {
      console.log("답변", a === "");
      return true;
    }
  };

  return (
    <MyPageInquiryBlock>
      {loading ? (
        <div className="loading">
          <img src="/preloader_icon.gif" alt="" />
        </div>
      ) : (
        <>
          <ButtonBlock>
            <Button onClick={onWriteClick}>1:1 문의하기</Button>
          </ButtonBlock>
          <InquiryHeaderBlock>
            <InquiryHeaderItem width="10%">번호</InquiryHeaderItem>
            <InquiryHeaderItem width="15%">분류</InquiryHeaderItem>
            <InquiryHeaderItem width="50%">제목</InquiryHeaderItem>
            <InquiryHeaderItem width="13%">작성일</InquiryHeaderItem>
            <InquiryHeaderItem width="7%">상태</InquiryHeaderItem>
          </InquiryHeaderBlock>
          {!myInquiry || myInquiry.length === 0 ? (
            <>
              <div className="loading">
                <div>
                  <img src="/nodata_80_01.png" alt="" />
                </div>
              </div>
              <div className="message">문의 내역이 존재하지 않습니다</div>
            </>
          ) : (
            <div>
              {myInquiry.map((inquiry, index) => (
                <InquiryBlock
                  key={index}
                  clicked={clickedIndex === inquiry.inquiryNum}
                  onClick={() => toggleExpandedInquiry(inquiry.inquiryNum)}
                  style={{ cursor: "pointer" }}
                >
                  <InquiryContent>
                    <InquiryHeaderItem width="10%">
                      {inquiry.inquiryNum}
                    </InquiryHeaderItem>
                    <InquiryHeaderItem width="15%">
                      {inquiry.classify}
                    </InquiryHeaderItem>
                    <InquiryHeaderItem width="50%">
                      <div>
                        <h3>{inquiry.title}</h3>

                        {expandedInquiry[inquiry.inquiryNum] && (
                          <div
                            className="body"
                            dangerouslySetInnerHTML={{
                              __html: formattedBody(inquiry.body),
                            }}
                          />
                        )}
                      </div>
                    </InquiryHeaderItem>
                    <InquiryHeaderItem width="13%">
                      {formatCreatedAt(inquiry.createdAt)}
                    </InquiryHeaderItem>
                    <InquiryHeaderItem width="7%">
                      {state(inquiry.answer) ? (
                        <div className="done">답변완료</div>
                      ) : (
                        <div className="undone">처리중...</div>
                      )}
                    </InquiryHeaderItem>
                  </InquiryContent>
                  {expandedInquiry[inquiry.inquiryNum] && (
                    <AnswerContent
                      className={state(inquiry.answer) ? "" : "false"}
                    >
                      <AnswerBlock width="10%"></AnswerBlock>
                      <AnswerBlock width="15%">
                        <BsArrowReturnRight />
                        답변
                      </AnswerBlock>
                      <AnswerBlock width="50%">
                        {state(inquiry.answer) ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: formattedBody(inquiry.answer),
                            }}
                          />
                        ) : (
                          <div className="unAnswer">답변 준비중입니다</div>
                        )}
                      </AnswerBlock>
                    </AnswerContent>
                  )}
                </InquiryBlock>
              ))}
            </div>
          )}
          <MyPageInquiryPagination
            lastPage={lastPage}
            currentPage={currentPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </>
      )}
    </MyPageInquiryBlock>
  );
};

const MyPageInquiryBlock = styled.div`
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

const InquiryContent = styled.div`
  display: flex;
  padding: 0.5rem 0 0.5rem 0;

  &:hover {
    color: gray;
  }
`;
const InquiryBlock = styled.div`
  border: ${(props) => (props.clicked ? "1px solid black" : "none")};
  border-radius: 12px;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: end;
  margin: 1rem 1rem 0 0;
`;

const AnswerContent = styled.div`
  display: flex;
  padding: 0.5rem 0 0.5rem 0;
  background-color: lightgreen;
  border-radius: 12px;
  &:hover {
    color: gray;
  }
  &.false {
    background-color: lightpink;
  }
`;
const AnswerBlock = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid black; */
  /* background-color: lightgray; */
  justify-content: center;
  ${({ width }) => width && `flex-basis: ${width};`}
`;

export default MyPageInquiry;
