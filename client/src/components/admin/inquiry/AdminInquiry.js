import { styled, css } from "styled-components";
import AdminTitle from "../../common/admin/AdminTitle";
import CustomButton from "../../common/CustomButton";
import Responsive from "../../common/Responsive";
import MyPageInquiryPagination from "../../mypage/MyPageInquiryPagination";

const AdminInquiry = ({
  inquiry,
  count,
  loading,
  onAllClick,
  onUndoneClick,
  onDoneClick,
  lastPage,
  currentPage,
  handleNextPage,
  handlePreviousPage,
}) => {
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
          <CategoryBlock>
            <button onClick={onAllClick}>전체 문의</button>
            <button onClick={onUndoneClick}>처리중인 문의</button>
            <button onClick={onDoneClick}>완료된 문의</button>
          </CategoryBlock>
          <InquiryHeaderBlock>
            <InquiryHeaderItem width="10%">번호</InquiryHeaderItem>
            <InquiryHeaderItem width="15%">아이디</InquiryHeaderItem>
            <InquiryHeaderItem width="50%">제목</InquiryHeaderItem>
            <InquiryHeaderItem width="13%">작성일</InquiryHeaderItem>
            <InquiryHeaderItem width="7%">상태</InquiryHeaderItem>
          </InquiryHeaderBlock>
          <div>
            {inquiry &&
              inquiry.map((m, index) => (
                <InquiryBlock key={index} style={{ cursor: "pointer" }}>
                  <InquiryContent>
                    <InquiryHeaderItem width="10%">
                      {m.inquiryNum}
                    </InquiryHeaderItem>
                    <InquiryHeaderItem width="15%">
                      {m.userId}
                    </InquiryHeaderItem>
                    <InquiryHeaderItem width="50%">{m.title}</InquiryHeaderItem>
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
          <MyPageInquiryPagination
            lastPage={lastPage}
            currentPage={currentPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
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
const CategoryBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1.5rem 2rem 0 0;

  > button {
    margin-right: 0.5rem;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    min-height: 2rem;
    min-width: 6rem;
    border: none;
    border-radius: 5px;
    background-color: #7fbb98;
    color: darken(#7fbb98, 10%);
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background: linear-gradient(
        to bottom,
        lighten(saturate(lighten(#7fbb98, 15%), 35%), 7%) 0%,
        lighten(saturate(lighten(#7fbb98, 12%), 15%), 7%) 26%,
        lighten(#7fbb98, 7%) 100%
      );
    }
  }
`;

const AdminInquiryBlock = styled(Responsive)``;

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
