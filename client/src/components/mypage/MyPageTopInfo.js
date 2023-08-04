import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import MyCinemaModal from "./MyCinemaModal";

const MyPageTopInfo = ({
  user,
  loading,
  eventlist,
  handleInfoClick,
  category,
  viewcinema,
  reservation,
}) => {
  const mycinemas = viewcinema && viewcinema.filter((m) => m.id === user.id);
  console.log("mycinemas=======================", mycinemas);
  const id = viewcinema && viewcinema.map((a) => a.id);
  const userId = id && id.find((a) => a === user.id);
  const [selectedAddrDetail, setSelectedAddrDetail] = useState("");
  const findUser =
    reservation && reservation.filter((r) => r.user_id === user.id);
  if (!user || eventlist.length === 0) {
    return <div>로딩중</div>;
  }

  const randomIndex = Math.floor(Math.random() * eventlist.length);
  const userGrade =
    user.grade === 0 ? "일반" : user.grade === 1 ? "VIP" : "관리자";

  return (
    <MyPageTopInfoBlock>
      <RightInfo>
        <RightInfoTop>
          <RightTopFirst>
            <UserGrade>{userGrade}</UserGrade>
            <UserEdit onClick={handleInfoClick}>
              <img src="/edit_15.png" alt="" />
              편집
            </UserEdit>
          </RightTopFirst>
          <RightTopSecond>
            <div className="username">{user.name}님 반가워요</div>
            <div className="totalmovie">
              지금까지 본 영화는 총 {findUser && findUser.length}편 입니다
            </div>
            <div className="button">
              <button>내 영화 기록보기</button>
            </div>
          </RightTopSecond>
        </RightInfoTop>
        <RightInfoBottom>
          <div>POINT {user.point}P</div>
          <div>쿠폰함 ?</div>
        </RightInfoBottom>
      </RightInfo>
      <LeftInfo>
        <LeftInfoFirst>
          <div>MY 영화관</div>
          <Link to={"/cinema"}>
            <img src="/setup.png" alt="" />
          </Link>
        </LeftInfoFirst>
        <LeftInfoSecond>
          {mycinemas &&
            mycinemas.slice(0, 3).map((mycinema) => (
              <div key={mycinema.id}>
                <Link to={`/cinema?${mycinema.addr}`}>{mycinema.addr}</Link>
              </div>
            ))}
        </LeftInfoSecond>
        <LeftInfoThird>
          {eventlist.length === 0 ? (
            <LoadingBlock>
              <img src="/preloader_icon.gif" />
            </LoadingBlock>
          ) : (
            <div>
              <Link to={`/event/promote/${eventlist[randomIndex].eventNum}`}>
                {<img src={eventlist[randomIndex].eventImg} alt="" />}
              </Link>
            </div>
          )}
        </LeftInfoThird>
      </LeftInfo>
    </MyPageTopInfoBlock>
  );
};

const MyPageTopInfoBlock = styled.div`
  display: flex;
  /* border: solid 1px black; */
  border-radius: 0.5rem;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  background-color: #fff;
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
  /* padding: 1rem; */
`;
const RightTopFirst = styled.div`
  display: flex;
  padding: 1rem 1.5rem 0.5rem 1rem;
  justify-content: space-between;
`;
const RightTopSecond = styled.div`
  padding: 1rem 1.5rem 0.5rem 1rem;
  justify-content: center;
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
  > .button {
    display: flex;
    justify-content: center;
    > button {
      display: block;
      margin: 30px auto 0;
      width: 170px;
      -webkit-box-sizing: border-box;
      border-radius: 52px;
      height: 40px;
      line-height: 30px;
      padding: 0 18px;
      text-decoration: none;
      cursor: pointer;
      border: 1px solid #333333;
      color: #eed4a9 !important;
      text-align: center;
      vertical-align: middle;
      background-color: #333333;
      font-weight: bold;
      margin-bottom: 1rem;

      &:hover {
        background-color: #300000;
      }
    }
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

const LeftInfoFirst = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem 0.2rem 1rem;

  > img {
    width: 16px;
    height: 16px;
    top: 26px;
    cursor: pointer;
  }
`;

const LeftInfoSecond = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0rem 1.5rem 0.5rem 1rem;

  > div {
    display: flex;
    border: 1px solid #bbb;
    width: 100px;
    height: 60px;
    color: #000;
    line-height: 1.2;
    font-size: 13px;
    overflow: hidden;
    vertical-align: middle;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    &:hover {
      background: silver;
    }
    cursor: pointer;
  }
`;

const LeftInfoThird = styled.div`
  padding: 0rem 1.5rem 0.5rem 1rem;
  > div {
    display: flex;
    justify-content: center;
    /* border: 1px solid black; */
    height: 140px;
    border-radius: 4px;
    /* width: 100%; */
  }
  > div > a > img {
    /* width: 100%; */
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;
const LoadingBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MyPageTopInfo;
