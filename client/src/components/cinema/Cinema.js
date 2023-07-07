import React, { useState, useEffect } from "react";
import ImageCarousel from "../common/MainCarousel";
import CinemaModal from "./CinemaModal";
import {useSelector } from "react-redux";
import styled from "styled-components";

const CinemaContent = styled.div`
  width: 980px;
  margin: 0 auto;
  padding: 50px 0 0 0;
`;

const Menu = styled.div`
border: 1px solid black;
width: 874;
height: 400px;
padding: 60px 53px 0;

`;

const Addr = styled.div`
  display: flex;
  height: 42px;
  margin-top: 18px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  justify-content: center;
  h4{
    padding: 0 19px;
    font-size: 14px;
    line-height: 42px;
  }

`;

const AddrDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  h4{
    padding: 0 16px;
    font-size: 12px;
    line-height: 31px;
    text-align: left;
  }
`

const Title = styled.div`
  display: flex;  
  margin-bottom: 34px;

  h1, button{
    margin-right: 10px;
  }
  
`
const Total = styled.div`
  display: flex;
  h1{
    margin-right: 10px;
  }
  p{
    margin-right: 10px;
  }
`
const Ment = styled.div`
  display: flex;
`

const ModalTag = styled.div`
  cursor: pointer;
  margin: 46px 0 38px;
 
  button{
    border: none;
    background-color: white;
  }
  img{
    margin-right: 10px;
  }
  span{
    margin-right: 10px;
  }
`
function Cinema() {
  const { movielist } = useSelector((state) => ({
    movielist: state.movielist.movielist,
    upcominglist: state.movielist.upcominglist,
  }));
  const cinemacarousel = movielist.movielist;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  
  const oncloseModal = () => {
    setIsOpen(false);
  };
  

  return (
    <div>
      <ImageCarousel movielist={cinemacarousel}/>
      <CinemaContent>
        <Menu>
          <div>
            <h1>롯데시네마</h1>
          </div>
          <Addr>
            <h4>서울</h4>
            <h4>서울</h4>
            <h4>서울</h4>
            <h4>서울</h4>
            <h4>서울</h4>
            
          </Addr>
          <AddrDetail>
          <h4>서울</h4>
          </AddrDetail>
        </Menu>

        <Title>
          <h1>익산모현</h1>
          <button>MY 영화관</button>
          <button>단체/대관문의</button>
        </Title>
        <Total>
          <p>총 상영관 수</p>
          <p>7개관</p>
          <p>총 좌석수</p>
          <p>1,243석</p>
        </Total>
        <h1>전북 익산시 모현동1가 876번지(선화로77)</h1>
        <Ment>
          <h1>공지사항</h1>
          <p> BTS PTD ON STAGE-SEOUL LIVE VIEWING 관련 추가 안내</p>
        </Ment>
        <ModalTag>
        <button>
            <img src="location_subway_40.png"/>
            <span>대중교통 안내</span>
          </button>
          <button>
            <img src="location_car_40.png"/>
            <span>자가용/주차안내</span>
          </button>
      <button onClick={openModal}>
        <img src="/location_map_40.png"/>
        <span>지도보기</span>
      </button>
      </ModalTag>
      </CinemaContent>
      {isOpen && (
        <CinemaModal oncloseModal={oncloseModal}/>
      )}
    </div>
  );
}

export default Cinema;