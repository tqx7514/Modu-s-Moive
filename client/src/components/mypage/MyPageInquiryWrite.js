import { styled, css } from "styled-components";
import palette from "../../lib/styles/palette";
import { changeField } from "../../modules/auth";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { initialize } from "../../modules/mypage";
import { useDispatch } from "react-redux";

const MyPageInquiryWrite = ({
  changeField,
  write,
  onCancelClick,
  onPublish,
}) => {
  const dispatch = useDispatch();
  const onChangeClassify = (e) => {
    changeField({ key: "classify", value: e.target.value });
  };
  const onChangeTitle = (e) => {
    changeField({ key: "title", value: e.target.value });
  };
  const onChangeBody = (e) => {
    changeField({ key: "body", value: e.target.value });
  };

  useEffect(() => {
    changeField({ key: "classify", value: "영화/예매" });
  }, []);

  const handleCancelClick = () => {
    Swal.fire({
      text: "정말로 문의작성을 취소하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "네 취소합니다",
      cancelButtonText: "아니오",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        dispatch(initialize());
        onCancelClick();
      },
    });
  };

  return (
    <MyPageInquiryWriteBlock>
      <TopInfoBlock>문의내용</TopInfoBlock>
      <hr />
      <InquiryHeaderBlock>
        <InquiryHeaderItem width="15%">분류</InquiryHeaderItem>
        <InquiryHeaderItem width="85%">
          <ClassifySelect value={write.classify} onChange={onChangeClassify}>
            <option value="영화/예매">영화/예매</option>
            <option value="영화관">영화관</option>
            <option value="이벤트">이벤트</option>
            <option value="게시판">게시판</option>
            <option value="모임">모임</option>
            <option value="기타">기타</option>
          </ClassifySelect>
        </InquiryHeaderItem>
      </InquiryHeaderBlock>
      <InquiryHeaderBlock>
        <InquiryHeaderItem width="15%">제목</InquiryHeaderItem>
        <InquiryHeaderItem width="85%">
          <CustomInput
            value={write.title}
            placeholder="제목을 입력해주세요"
            onChange={onChangeTitle}
          />
        </InquiryHeaderItem>
      </InquiryHeaderBlock>
      <InquiryHeaderBlock>
        <InquiryHeaderItem width="15%">내용</InquiryHeaderItem>
        <InquiryHeaderItem width="85%">
          <CustomTextArea
            value={write.body}
            placeholder="내용 및 첨부파일에 개인정보(카드정보, 계좌번호, 주민번호)가 포함되지 않도록 유의하여 입력하여 주십시오."
            onChange={onChangeBody}
          />
        </InquiryHeaderItem>
      </InquiryHeaderBlock>
      <hr />
      <ButtonBlock>
        <CustomButton2 onClick={handleCancelClick}>취소</CustomButton2>
        <CustomButton onClick={onPublish}>확인</CustomButton>
      </ButtonBlock>
    </MyPageInquiryWriteBlock>
  );
};

const MyPageInquiryWriteBlock = styled.div`
  > hr {
    /* background-color: red; */
    border: 0.1px solid lightgray;
    /* color: red; */
  }
`;
const TopInfoBlock = styled.div`
  font-size: 1.3rem;
  margin: 2rem 0 1rem 1rem;
  font-weight: bold;
`;
const InquiryHeaderBlock = styled.div`
  /* margin: 2rem 0 0 0; */
  padding: 1rem 0 1rem 0;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  display: flex;
`;
const InquiryHeaderItem = styled.div`
  display: flex;
  /* justify-content: center; */
  margin-left: 1rem;
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
const ClassifySelect = styled.select`
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
  border: 1px solid ${palette.gray[4]};
  border-radius: 4px;
  width: 20%;
  /* margin-bottom: 2rem; */
`;

const CustomInput = styled.input`
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
  border: 1px solid ${palette.gray[4]};
  background-color: #ddd;
  border-radius: 4px;
  width: 100%;

  &:focus {
    background-color: #fff;
  }
`;

const CustomTextArea = styled.textarea`
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
  border: 1px solid ${palette.gray[4]};
  background-color: #ddd;
  border-radius: 4px;
  width: 100%;
  resize: none;
  height: 20rem;
  white-space: pre-wrap;

  &:focus {
    background-color: #fff;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 3rem 0;
`;

const CustomButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #414141;
  font-size: 14px;
  color: #ffffff !important;
  text-align: center;
  vertical-align: middle;
  background-color: #414141;
  margin: 0 3px;
  min-width: 160px;
  height: 45px;
  line-height: 43px;
  padding: 0 18px px;
  text-decoration: none;
  cursor: pointer;
`;

const CustomButton2 = styled.button`
  display: inline-block;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #000000;
  font-size: 14px;
  color: #000000 !important;
  text-align: centimport { useDispatch } from 'react-redux';
er;
  vertical-align: middle;
  background-color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  margin: 0 3px;
  min-width: 160px;
  height: 45px;
  line-height: 43px;
  padding: 0 18px;
`;

export default MyPageInquiryWrite;
