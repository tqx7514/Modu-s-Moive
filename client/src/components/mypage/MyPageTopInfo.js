import { styled } from "styled-components";

const MyPageTopInfo = () => {
  return (
    <MyPageTopInfoBlock>
      <RightInfo>
        <RightInfoTop>
          <RightTopFirst>
            <UserGrade>?</UserGrade>
            <UserEdit>
              <img src="/edit_15.png" alt="" />
              편집
            </UserEdit>
          </RightTopFirst>
          <RightTopSecond>
            <div className="username">?님 반가워요</div>
            <div className="totalmovie">지금까지 본 영화는 총 ?편 입니다</div>
          </RightTopSecond>
        </RightInfoTop>
        <RightInfoBottom>
          <div>POINT ?P</div>
          <div>쿠폰함 ?</div>
        </RightInfoBottom>
      </RightInfo>
      <LeftInfo>My 영화관</LeftInfo>
    </MyPageTopInfoBlock>
  );
};

const MyPageTopInfoBlock = styled.div`
  display: flex;
  border: solid 1px black;
  border-radius: 0.5rem;
`;
const RightInfo = styled.div`
  width: 60%;
  border-right: 1px solid lightgray;
`;
const RightInfoTop = styled.div`
  border-bottom: 1px solid lightgray;
`;

const LeftInfo = styled.div`
  width: 40%;
  padding: 1rem;
`;
const RightTopFirst = styled.div`
  display: flex;
  padding: 1rem 1.5rem 0.5rem 1rem;
  justify-content: space-between;
`;
const RightTopSecond = styled.div`
  padding: 1rem 1.5rem 0.5rem 1rem;
  > .username {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 18px;
  }
  > .totalmovie {
    text-align: center;
    font-size: 18px;
    margin-bottom: 1rem;
  }
`;
const RightInfoBottom = styled.div`
  display: flex;

  > div {
    width: 50%;
    text-align: center;
    cursor: pointer;
    margin: 1rem 0 1rem 0;
    border-right: 1px solid lightgray;
  }
`;
const UserGrade = styled.div`
  display: inline-block;
  padding: 0 10px;
  min-width: 48px;
  height: 22px;
  color: #fff;
  background: gray;
  line-height: 22px;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  border-radius: 25px;
  border: 1px solid #fff;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;
const UserEdit = styled.div`
  display: flex;
  height: 22px;
  font-size: 13px;
  /* line-height: 15px; */
  /* vertical-align: middle; */
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default MyPageTopInfo;
