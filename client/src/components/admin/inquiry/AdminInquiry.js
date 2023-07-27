import { styled, css } from "styled-components";
import AdminTitle from "../../common/admin/AdminTitle";
import Responsive from "../../common/Responsive";
import MyPageInquiryPagination from "../../mypage/MyPageInquiryPagination";
import { Link } from "react-router-dom";
import { useState } from "react";
import AdminInquiryDetail from "./AdminInquiryDetail";
import AdminInquiryDetailContainer from "../../../containers/admin/inquiry/AdminInquiryDetailContainer";

const AdminInquiry = ({
  inquiry,
  count,
  category,
  loading,
  onAllClick,
  onUndoneClick,
  onDoneClick,
  lastPage,
  currentPage,
  handleNextPage,
  handlePreviousPage,
  detail,
  handleDetailClick,
}) => {
  const [detailInq, setDetailInq] = useState(null);
  console.log("카테고리리리리리", category === 1);
  const state = (a) => {
    if (a === "") {
      return false;
    } else {
      console.log("답변", a === "");
      return true;
    }
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

  const onDetailClick = (num) => {
    setDetailInq(num);
    handleDetailClick();
  };

  return (
    <AdminInquiryBlock>
      {loading ? (
        <div className="loading">
          <img src="/preloader_icon.gif" alt="" />
        </div>
      ) : (
        <>
          <HeaderBlock>
            <AdminTitle title="문의관리" />
            <div className="count">
              문의 총 <span>{count}</span>개
            </div>
          </HeaderBlock>
          {detail ? (
            <>
              <CategoryBlock>
                <Buttons onClick={handleDetailClick}>목록으로</Buttons>
              </CategoryBlock>
              <AdminInquiryDetailContainer
                num={detailInq}
                handleDetailClick={handleDetailClick}
              />
            </>
          ) : (
            <>
              <CategoryBlock>
                <Buttons onClick={onAllClick} category={category === 1}>
                  전체 문의
                </Buttons>
                <Buttons onClick={onUndoneClick} category={category === 3}>
                  처리중인 문의
                </Buttons>
                <Buttons onClick={onDoneClick} category={category === 2}>
                  완료된 문의
                </Buttons>
              </CategoryBlock>
              <InquiryHeaderBlock>
                <InquiryHeaderItem width="5%">번호</InquiryHeaderItem>
                <InquiryHeaderItem width="15%">아이디</InquiryHeaderItem>
                <InquiryHeaderItem width="10%">분류</InquiryHeaderItem>
                <InquiryHeaderItem width="45%">제목</InquiryHeaderItem>
                <InquiryHeaderItem width="13%">작성일</InquiryHeaderItem>
                <InquiryHeaderItem width="7%">상태</InquiryHeaderItem>
              </InquiryHeaderBlock>
              <div>
                {inquiry &&
                  inquiry.map((m, index) => (
                    <InquiryBlock
                      key={index}
                      style={{ cursor: "pointer" }}
                      onClick={() => onDetailClick(m.inquiryNum)}
                    >
                      <InquiryContent>
                        <InquiryHeaderItem width="5%">
                          {m.inquiryNum}
                        </InquiryHeaderItem>
                        <InquiryHeaderItem width="15%">
                          {m.userId}
                        </InquiryHeaderItem>
                        <InquiryHeaderItem width="10%">
                          {m.classify}
                        </InquiryHeaderItem>
                        <InquiryHeaderItem width="45%">
                          {m.title}
                        </InquiryHeaderItem>
                        <InquiryHeaderItem width="13%">
                          {formatCreatedAt(m.createdAt)}
                        </InquiryHeaderItem>
                        <InquiryHeaderItem width="7%">
                          {state(m.answer) ? (
                            <div className="done">답변완료</div>
                          ) : (
                            <div className="undone">처리중...</div>
                          )}
                        </InquiryHeaderItem>
                      </InquiryContent>
                    </InquiryBlock>
                  ))}
              </div>
              <div className="end"></div>
              <MyPageInquiryPagination
                lastPage={lastPage}
                currentPage={currentPage}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
              />
            </>
          )}
        </>
      )}
    </AdminInquiryBlock>
  );
};
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

const AdminInquiryBlock = styled(Responsive)`
  background-color: gray;
  flex: 1;
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

  &:hover {
    color: white;
  }
`;
export default AdminInquiry;
