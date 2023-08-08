import { Diversity1 } from "../../../../node_modules/@mui/icons-material/index";
import MyPageInquiryPagination from "../../mypage/MyPageInquiryPagination";
import { AdminBottomRightBlock } from "../main/AdminBottomRight";
import styled, { css } from "styled-components";
import React, { useState, useEffect } from "react";

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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 25px;
  div {
    display: block;
  }
`;

const Close = styled.div`
  position: relative;
  text-align: center;
  button{
    position: absolute;
    bottom: 1px;
    right: -10px;
    width: 19px;
    height: 19px;
    border: none;
    text-indent: -9999em;
    background: transparent url("/close_19.png") no-repeat 0 0;
    cursor: pointer;
  }
`;


const AdminCinema = ({
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
  cinema,
  handleGradeUpClick,
  handleGradeDownClick,
  onChangeregion,
  onChangeaddr,
  onChangecinema,
  onChangeregionNum,
  onCreate
}) => {
  console.log("detail==============", cinema);
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);
  };

  const oncloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        oncloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [oncloseModal]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
        document.body.style.overflow = 'auto';
    };
}, []);

  return (
    <div>
      <AdminInquiryBlock>
        <AdminBottomRightBlock>
          <div className="title">
            <h2>영화관 관리</h2>
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
                <InquiryHeaderItem width="20%">지역</InquiryHeaderItem>
                <InquiryHeaderItem width="40%">주소</InquiryHeaderItem>
                <InquiryHeaderItem width="20%">영화관</InquiryHeaderItem>
                <InquiryHeaderItem width="10%">지역번호</InquiryHeaderItem>
                <InquiryHeaderItem width="10%">추가</InquiryHeaderItem>
                <InquiryHeaderItem width="10%">삭제</InquiryHeaderItem>
              </InquiryHeaderBlock>
              <div>
                {cinema &&
                  cinema.map((item) => (
                    <InquiryBlock>
                      <InquiryContent>
                        <InquiryHeaderItem width="5%">
                          {item.cinema_num}
                        </InquiryHeaderItem>
                        <InquiryHeaderItem width="20%">
                          {item.addr}
                        </InquiryHeaderItem>
                        <InquiryHeaderItem width="40%">
                          {item.addr_detail}
                        </InquiryHeaderItem>
                        <InquiryHeaderItem width="20%">
                          {item.cinema}
                        </InquiryHeaderItem>
                        <InquiryHeaderItem width="10%">
                          {item.grade}
                        </InquiryHeaderItem>
                        <InquiryHeaderItem width="10%">
                          <button onClick={openModal}>추가</button>
                        </InquiryHeaderItem>
                        <InquiryHeaderItem width="10%">
                          <button>삭제</button>
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
          {isOpen &&
           <Modal>
      <ModalContent>
        <Close>
        <button onClick={oncloseModal}>닫기</button>
        </Close>
          <div>
            지역: <input onChange={onChangeregion}/>
            주소: <input onChange={onChangeaddr}/>
            영화관: <input onChange={onChangecinema}/>
            지역번호: <select onChange={onChangeregionNum}>
              <option>1: 서울</option>
              <option>2: 경기/인천</option>
              <option>3: 충청/대전</option>
              <option>4: 전라/광주</option>
              <option>5: 경북/대구</option>
              <option>6: 경남/부산/울산</option>
              <option>7: 강원</option>
              <option>8: 제주</option>
            </select>
          </div>
      </ModalContent>
    </Modal>
    }
        </AdminBottomRightBlock>
      </AdminInquiryBlock>
    </div>
  );
};

export default AdminCinema;
