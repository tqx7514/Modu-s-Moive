import { styled, css } from "styled-components";
import Responsive from "../../common/Responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import MyPageInquiryPagination from "../../mypage/MyPageInquiryPagination";
import AdminTitle from "../../common/admin/AdminTitle";
import { AdminBottomRightBlock } from "../main/AdminBottomRight";

const Adminuser = ({
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
  userlist,
  onDelete,
  handleGradeUpClick,
  handleGradeDownClick,
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
    <div>
      <AdminInquiryBlock>
        {loading ? (
          <div className="loading">
            <img src="/preloader_icon.gif" alt="" />
          </div>
        ) : (
          <AdminBottomRightBlock>
            <div className="title">
              <h2>유저관리</h2>
            </div>
            {detail ? (
              <>
                <CategoryBlock>
                  <Buttons onClick={handleDetailClick}>목록으로</Buttons>
                </CategoryBlock>
              </>
            ) : (
              <>
                <InquiryHeaderBlock>
                  <InquiryHeaderItem width="5%">번호</InquiryHeaderItem>
                  <InquiryHeaderItem width="20%">아이디</InquiryHeaderItem>
                  <InquiryHeaderItem width="15%">이름</InquiryHeaderItem>
                  <InquiryHeaderItem width="30%">email</InquiryHeaderItem>
                  <InquiryHeaderItem width="30%">전화번호</InquiryHeaderItem>
                  <InquiryHeaderItem width="10%">나이</InquiryHeaderItem>
                  <InquiryHeaderItem width="7%">성별</InquiryHeaderItem>
                  <InquiryHeaderItem width="13%">Point</InquiryHeaderItem>
                  <InquiryHeaderItem width="15%">등급</InquiryHeaderItem>
                  <InquiryHeaderItem width="10%">등급관리</InquiryHeaderItem>
                  <InquiryHeaderItem width="7%">삭제</InquiryHeaderItem>
                </InquiryHeaderBlock>
                <div>
                  {userlist &&
                    userlist.map((m) => (
                      <InquiryBlock>
                        <InquiryContent>
                          <InquiryHeaderItem width="5%">
                            {m.userNum}
                          </InquiryHeaderItem>
                          <InquiryHeaderItem width="20%">
                            {m.id}
                          </InquiryHeaderItem>
                          <InquiryHeaderItem width="15%">
                            {m.name}
                          </InquiryHeaderItem>
                          <InquiryHeaderItem width="30%">
                            {m.email}
                          </InquiryHeaderItem>
                          <InquiryHeaderItem width="30%">
                            {m.tel}
                          </InquiryHeaderItem>
                          <InquiryHeaderItem width="10%">
                            {m.age}
                          </InquiryHeaderItem>
                          <InquiryHeaderItem width="7%">
                            {m.gender}
                          </InquiryHeaderItem>
                          <InquiryHeaderItem width="13%">
                            {m.point}
                          </InquiryHeaderItem>
                          <InquiryHeaderItem width="15%">
                            {m.grade === 2
                              ? "관리자"
                              : m.grade === 1
                              ? "VIP"
                              : m.grade === 0
                              ? "일반유저"
                              : ""}
                          </InquiryHeaderItem>
                          <InquiryHeaderItem width="10%">
                            {m.grade === 0 ? (
                              <button
                                onClick={() => handleGradeUpClick(m.grade)}
                              >
                                등급업
                              </button>
                            ) : m.grade === 1 ? (
                              <button
                                onClick={() => handleGradeDownClick(m.grade)}
                              >
                                등급다운
                              </button>
                            ) : (
                              ""
                            )}
                          </InquiryHeaderItem>
                          <InquiryHeaderItem width="7%">
                            {m.grade !== 2 && (
                              <button onClick={() => onDelete(m.id)}>
                                삭제
                              </button>
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
          </AdminBottomRightBlock>
        )}
      </AdminInquiryBlock>
    </div>
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
  padding: 0rem 2rem 1rem 2rem;
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
export default Adminuser;
