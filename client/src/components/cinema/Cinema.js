import React, { useState, useEffect } from "react";
import ImageCarousel from "../common/MainCarousel";
import CinemaModal from "./CinemaModal";
import { useSelector } from "react-redux";
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
  ul {
    display: flex;
    height: 42px;
    margin-top: 18px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    justify-content: center;
  }
  li {
    cursor: pointer;
    padding: 0 19px;
    font-size: 14px;
    font-weight: bold;
    line-height: 42px;
  }
`;

const AddrDetail = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    cursor: pointer;
    padding: 0 16px;
    font-size: 12px;
    line-height: 31px;
    text-align: left;
  }
`;

const Title = styled.div`
  display: flex;
  padding: 50px 0 0 0;
  margin-bottom: 34px;

  h1,
  button {
    margin-right: 10px;
  }
`;
const Total = styled.div`
  display: flex;
  h1 {
    margin-right: 10px;
  }
  p {
    margin-right: 10px;
  }
`;

const Detail = styled.div`
  margin: 24px 0 0;
  margin-bottom: 15px;
`;

const Ment = styled.div`
  display: flex;
  h4{
    margin-right: 20px;
  }
`;

const ModalTag = styled.div`
  cursor: pointer;
  display: flex;
  margin: 46px 0 38px;

  button {
    border: none;
    background-color: white;
    display: flex;
    align-items: center;
  }
  img {
    margin-right: 10px;
  }
  span {
    margin-right: 10px;
  }
`;
const Cinema = ({ cinema, region }) => {
  const { movielist } = useSelector((state) => ({
    movielist: state.movielist.movielist,
    upcominglist: state.movielist.upcominglist,
  }));
  const cinemacarousel = movielist.movielist;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCinemas, setSelectedCinemas] = useState([]);
  const [selectedAddrDetail, setSelectedAddrDetail] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const openModal = () => {
    setIsOpen(true);
  };

  const oncloseModal = () => {
    setIsOpen(false);
  };

  const handleRegionClick = (grade) => {
    const cinemasWithMatchingGrade = cinema.filter((m) => m.grade === grade);
    setSelectedCinemas(cinemasWithMatchingGrade);
  };
  console.log("setSelectedCinemas=============>", selectedAddrDetail);

  const handleCinemaClick = (addrDetail, cinema) => {
    setSelectedAddrDetail(addrDetail);
    setSelectedCinema(cinema);
  };

  return (
    <div>
      <ImageCarousel movielist={cinemacarousel} />
      <CinemaContent>
        <Menu>
          <div>
            <h1>롯데시네마</h1>
          </div>
          <Addr>
            <ul>
              {region&&region.map((r) => (
                <li key={r.id} onClick={() => handleRegionClick(r.grade)}>
                  {r.region}
                </li>
              ))}
            </ul>
          </Addr>
          <AddrDetail>
            <ul>
            {selectedCinemas.map((m) => (
            <li key={m.id} onClick={() => handleCinemaClick(m.addr_detail, m.cinema)}>
              {m.cinema}
            </li>
          ))}
            </ul>
          </AddrDetail>
        </Menu>

        <Title>
        {selectedCinema && <h1>{selectedCinema}</h1>}
          <button>MY 영화관</button>
          <button>단체/대관문의</button>
        </Title>
        <Total>
          <p>총 상영관 수</p>
          <p>7개관</p>
          <p>총 좌석수</p>
          <p>1,243석</p>
        </Total>
        <Detail>
        {selectedAddrDetail && <h4>{selectedAddrDetail}</h4>}
        </Detail>
        <Ment>
          <h4>공지사항</h4>
          <p> BTS PTD ON STAGE-SEOUL LIVE VIEWING 관련 추가 안내</p>
        </Ment>
        <ModalTag>
          <button>
            <img src="location_subway_40.png" />
            <span>대중교통 안내</span>
          </button>
          <button>
            <img src="location_car_40.png" />
            <span>자가용/주차안내</span>
          </button>
          <button onClick={openModal}>
            <img src="/location_map_40.png" />
            <span>지도보기</span>
          </button>
        </ModalTag>
      </CinemaContent>
      {selectedAddrDetail && isOpen && <CinemaModal oncloseModal={oncloseModal} cinema={selectedAddrDetail}/>}
    </div>
  );
};

export default Cinema;
