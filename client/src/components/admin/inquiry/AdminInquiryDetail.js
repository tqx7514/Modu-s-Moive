import { styled, css } from "styled-components";
import palette from "../../../lib/styles/palette";

const AdminInquiryDetail = ({
  detail,
  handleDetailClick,
  answer,
  onChangeField,
  onAnswerClick,
  isEdit,
  onEditClick,
}) => {
  const formattedBody = (body) => {
    return body.replaceAll("\n", "<br />");
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
    <AdminInquiryDetailBlock>
      <div className="block"></div>
      <InquiryHeaderBlock>
        <InquiryHeaderItem width="15%">제목</InquiryHeaderItem>
        <InquiryHeaderItem width="85%">
          <h2>{detail.title}</h2>
        </InquiryHeaderItem>
      </InquiryHeaderBlock>
      <InquiryHeaderBlock>
        <InquiryHeaderItem width="15%">아이디</InquiryHeaderItem>
        <InquiryHeaderItem width="85%">{detail.userId}</InquiryHeaderItem>
      </InquiryHeaderBlock>
      <InquiryHeaderBlock>
        <InquiryHeaderItem width="15%">분류</InquiryHeaderItem>
        <InquiryHeaderItem width="85%">{detail.classify}</InquiryHeaderItem>
      </InquiryHeaderBlock>
      <InquiryHeaderBlock>
        <InquiryHeaderItem width="15%">문의내용</InquiryHeaderItem>
        <InquiryHeaderItem width="85%">
          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: formattedBody(detail.body) }}
          ></div>
        </InquiryHeaderItem>
      </InquiryHeaderBlock>
      <InquiryHeaderBlock>
        <InquiryHeaderItem width="15%">
          <div>답변</div>
        </InquiryHeaderItem>
        <InquiryHeaderItem width="85%">
          {state(detail.answer) ? (
            isEdit ? (
              <CustomTextArea value={answer} onChange={onChangeField} />
            ) : (
              <div
                className="body"
                dangerouslySetInnerHTML={{ __html: formattedBody(answer) }}
                onClick={onEditClick}
                style={{ cursor: "pointer" }}
              />
            )
          ) : (
            <CustomTextArea
              value={answer}
              placeholder="아직 답변이 없습니다. 답변해주세요"
              onChange={onChangeField}
            />
          )}
        </InquiryHeaderItem>
      </InquiryHeaderBlock>

      <hr />
      <MessageBlock>답변 클릭시 수정가능합니다</MessageBlock>
      {(!state(detail.answer) || isEdit) && (
        <ButtonBlock>
          <CustomButton2 onClick={handleDetailClick}>취소</CustomButton2>
          <CustomButton onClick={onAnswerClick}>확인</CustomButton>
        </ButtonBlock>
      )}
      <br />
      <br />
    </AdminInquiryDetailBlock>
  );
};
const MessageBlock = styled.div`
  margin: 1rem 3rem 0 0;
  display: flex;
  justify-content: end;
  color: red;
`;
const AdminInquiryDetailBlock = styled.div`
  > .block {
    margin-top: 2rem;
  }
`;

const InquiryHeaderBlock = styled.div`
  /* margin: 2rem 0 0 0; */
  padding: 1rem 0 1rem 0;
  border-top: 1px solid lightgray;
  /* border-bottom: 1px solid lightgray; */
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
  text-align: centimport { useEffect } from 'react';
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
export default AdminInquiryDetail;
