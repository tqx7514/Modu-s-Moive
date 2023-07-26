import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  border-top: 1px solid black;
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContent = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;

  & > b + b {
    margin-left: 2rem;
  }

  & > span {
    margin: 0 1rem;
  }

  & > b,
  & > span {
    font-size: 12px;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  align-items: center;

  & > h8 + h8 {
    margin-left: 1rem;
  }

  & > span {
    margin: 0 0.5rem;
  }

  & > p,
  & > span {
    font-size: 12px;
  }
`;

const CopyLeft = styled.div`
  & > p,
  & > span {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <FooterContent>
          <b>회사 소개</b>
          <span>|</span>
          <b>이용 약관</b>
          <span>|</span>
          <b>개인정보 처리방침</b>
          <span>|</span>
          <b>이메일 무단 수집거부</b>
          <span>|</span>
          <b>영상정보처리기기 운영 및 관리방침</b>
          <span>|</span>
          <b>L.POINT회원안내</b>
          <span>|</span>
          <b>배정기준</b>
          <span>|</span>
          <b>채용안내</b>
          <span>|</span>
          <b>광고/임대문의</b>
          <span>|</span>
          <b>사회적책임</b>
          <span>|</span>
        </FooterContent>
        <FooterInfo>
          <p>대구광역시 서구 내당4동 245-4</p>
          <span>|</span>
          <p>고객센터 1111-1111(유료)</p>
          <br />
          <p>대표이사 전우치</p>
          <span>|</span>
          <p>사업자등록번호 111-11-11111</p>
          <span>|</span>
          <p>통신판매업신고번호 제xxxx호</p>
          <span>|</span>
          <p>개인정보 보호 책임자 홍길동</p>
          <span>|</span>
        </FooterInfo>
        <CopyLeft>
          <p>COPYLEFT© Modoo's Moive ALL Left RESERVED.</p>
        </CopyLeft>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
