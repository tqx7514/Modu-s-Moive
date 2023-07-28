import { styled, css } from "styled-components";
import Responsive from "../../../containers/common/Responsive";
import AdminTitle from "../../common/admin/AdminTitle";
import MyPageInquiryPagination from "../../mypage/MyPageInquiryPagination";
import { useState } from "react";
import AdminMeetDetailContainer from "../../../containers/admin/meet/AdminMeetDetailContainer";

const AdminMeetList = ({
  loading,
  error,
  meets,
  regions,
  user,
  page,
  tag,
  region,
  count,
  handleRegionClick,
  handleNextPage,
  handlePreviousPage,
  handleDetailClick,
  detail,
  lastPage,
}) => {
  const [meetNum, setMeetNum] = useState(null);

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
    setMeetNum(num);
    handleDetailClick();
  };

  return (
    <AdminMeetListBlock>
      {loading ? (
        <div className="loading">
          <img src="/preloader_icon.gif" alt="" />
        </div>
      ) : (
        <>
          <HeaderBlock>
            <AdminTitle title="모임관리" />
            <div className="count">
              모임 총 <span>{count}</span>개
            </div>
          </HeaderBlock>
          {detail ? (
            <>
              <CategoryBlock2>
                <Buttons onClick={handleDetailClick}>목록으로</Buttons>
              </CategoryBlock2>
              <AdminMeetDetailContainer
                meetNum={meetNum}
                handleDetailClick={handleDetailClick}
              />
            </>
          ) : (
            <>
              <CategoryBlock>
                {regions.map((m) =>
                  m === "전국" ? (
                    <Buttons
                      key={m}
                      onClick={() => handleRegionClick(m)}
                      category={region === null}
                    >
                      전국
                    </Buttons>
                  ) : (
                    <Buttons
                      key={m}
                      category={region === m}
                      onClick={() => handleRegionClick(m)}
                    >
                      {m}
                    </Buttons>
                  )
                )}
              </CategoryBlock>
              <MeetHeaderBlock>
                <MeetHeaderItem width="5%">번호</MeetHeaderItem>
                <MeetHeaderItem width="20%">모임명</MeetHeaderItem>
                <MeetHeaderItem width="15%">모임장</MeetHeaderItem>
                <MeetHeaderItem width="10%">가입자수</MeetHeaderItem>
                <MeetHeaderItem width="10%">지역</MeetHeaderItem>
                <MeetHeaderItem width="20%">생성일</MeetHeaderItem>
                <MeetHeaderItem width="20%">최근활동일</MeetHeaderItem>
              </MeetHeaderBlock>
              <div>
                {meets &&
                  meets.map((meet, index) => (
                    <MeetBlock
                      key={index}
                      style={{ cursor: "pointer" }}
                      onClick={() => onDetailClick(meet.meetNum)}
                    >
                      <MeetContent>
                        <MeetHeaderItem width="5%">
                          {meet.meetNum}
                        </MeetHeaderItem>
                        <MeetHeaderItem width="20%">
                          {meet.title}
                        </MeetHeaderItem>
                        <MeetHeaderItem width="15%">
                          {meet.userId}
                        </MeetHeaderItem>
                        <MeetHeaderItem width="10%">
                          {meet.count}
                        </MeetHeaderItem>
                        <MeetHeaderItem width="10%">
                          {meet.region}
                        </MeetHeaderItem>
                        <MeetHeaderItem width="20%">
                          {formatCreatedAt(meet.createdAt)}
                        </MeetHeaderItem>
                        <MeetHeaderItem width="20%">
                          {formatCreatedAt(meet.mostRecent)}
                        </MeetHeaderItem>
                      </MeetContent>
                    </MeetBlock>
                  ))}
              </div>
              <div className="end"></div>
              <MyPageInquiryPagination
                lastPage={lastPage}
                currentPage={page}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
              />
            </>
          )}
        </>
      )}
    </AdminMeetListBlock>
  );
};
const AdminMeetListBlock = styled(Responsive)`
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
const CategoryBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 0 0;
  align-items: center;
`;
const CategoryBlock2 = styled.div`
  display: flex;
  justify-content: end;
  margin: 1.5rem 2rem 0 0;
  align-items: center;
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

const MeetHeaderBlock = styled.div`
  margin: 2rem 0 0 0;
  padding: 1rem 0 1rem 0;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
`;
const MeetHeaderItem = styled.div`
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

const MeetBlock = styled.div`
  border: ${(props) => (props.clicked ? "1px solid black" : "none")};
  border-radius: 12px;
`;
const MeetContent = styled.div`
  display: flex;
  padding: 0.5rem 0 0.5rem 0;

  &:hover {
    color: white;
  }
`;
export default AdminMeetList;
