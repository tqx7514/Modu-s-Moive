import React, { useState, useEffect } from "react";
import MainCarousel from "../common/MainCarousel";
import CinemaModal from "./CinemaModal";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "../../../node_modules/react-router-dom/dist/index";

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
  align-items: center;

  .btn_col4.ty3 {
    height: 28px;
    line-height: 26px;
    padding: 0 14px;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #dddddd;
    font-size: 14px;
    color: #000000 !important;
    cursor: pointer;
  }

  h1,
  button {
    margin-right: 10px;
  }
  .ico_heart {
    display: inline-block;
    width: 16px;
    height: 18px;
    background: url("/heart_15_off.png") no-repeat 50% 0;
    background-color: transparent;
    vertical-align: middle;
    margin-right: 5px;
  }

  .ico_hearts {
    display: inline-block;
    width: 16px;
    height: 18px;
    background: url("/heart_15_on.png") no-repeat 50% 0;
    background-color: transparent;
    vertical-align: middle;
    margin-right: 5px;
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
  h4 {
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
    cursor: pointer;
  }
  img {
    margin-right: 10px;
  }
  span {
    margin-right: 10px;
  }
`;

const Selected = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;
const Cinema = ({
  cinema,
  region,
  mycinema,
  onCreate,
  onDelete,
  user,
  ownPost,
}) => {
  console.log("cinema=================", cinema);
  const { currentmovielist } = useSelector((state) => ({
    currentmovielist: state.movielist.currentmovielist,
    upcominglist: state.movielist.upcominglist,
  }));

  const cinemacarousel = currentmovielist.currentmovielist;
  // const mycinemas = mycinema && mycinema.viewcinema;
  const addr = mycinema && mycinema.map((m) => m.addr);
  const id = mycinema && mycinema.map((m) => m.id);
  const myId = mycinema && mycinema?.filter((my) => my.id === user && user);
  const cinemaId = id && id.find((a) => a === user);
  console.log("mycinema========>", mycinema);
  console.log("mycinema.Id=====>", cinemaId);
  console.log("Id=====>", id);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCinemas, setSelectedCinemas] = useState([]);
  const [selectedAddrDetail, setSelectedAddrDetail] = useState("");
  const [selectedCinema, setSelectedCinema] = useState(null);

  console.log('아아아아아아아아아아',selectedCinema);
  const mycinemas = mycinema && mycinema?.filter((m) => user && user === m.id);

  console.log("ㄴㅇㄹ나ㅣㅇ런아ㅣ러ㅏㅣㄴㅇ러ㅏㅣㄴ어라ㅣ", mycinemas);

  const location = useLocation();
  const openModal = () => {
    setIsOpen(true);
  };
  const decodeQueryString = (query) => {
    return decodeURIComponent(query);
  };
  const oncloseModal = () => {
    setIsOpen(false);
  };

  const handleRegionClick = (grade) => {
    const cinemasWithMatchingGrade =
      cinema && cinema.filter((m) => m.grade === grade);
    setSelectedCinemas(cinemasWithMatchingGrade);
  };
  console.log(
    "setSelectedCinemas=============>",
    decodeQueryString(location.search).substring(1)
  );

  const handleCinemaClick = (addrDetail, cinema) => {
    setSelectedAddrDetail(addrDetail);
    setSelectedCinema(cinema);
  };

  useEffect(() => {
    const cinemaQuery = decodeQueryString(location.search).substring(1);

    if (cinemaQuery) {
      const a = cinema && cinema.filter((m) => m.cinema === cinemaQuery);
      console.log("aaaaaaaaaaaaaaaaa", user);
      const cinemas = cinema.filter((m) => m.grade === a[0].grade);

      setSelectedAddrDetail(a[0].addr_detail);
      setSelectedCinema(a[0].cinema);
      setSelectedCinemas(cinemas);
    }
  }, []);

  const renderButton = (cinemaId) => {

    const count = mycinemas && mycinemas?.filter((m) => m.addr === cinemaId);
    console.log("갯수ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ", count.length);
    if (count.length > 0) {
      return (
        <button
          className="btn_col4 ty3"
          onClick={() => onDelete(selectedCinema, user)}
        >
          <span className="ico_hearts"></span>
          MY 영화관
        </button>
      );
    } else {
      return (
        <button
          className="btn_col4 ty3"
          onClick={() => onCreate(selectedCinema, selectedAddrDetail)}
        >
          <span className="ico_heart"></span>
          MY 영화관
        </button>
      );
    }
    // if (ownPost(cinemaId)) {
    //   if (addr && addr.find((item) => selectedCinema === item) && myId) {
    //     return (
    //       <button
    //         className="btn_col4 ty3"
    //         onClick={() => onDelete(selectedCinema, cinemaId)}
    //       >
    //         <span className="ico_hearts"></span>
    //         MY 영화관
    //       </button>
    //     );
    //   } else {
    //     return (
    //       <button
    //         className="btn_col4 ty3"
    //         onClick={() => onCreate(selectedCinema, selectedAddrDetail)}
    //       >
    //         <span className="ico_heart"></span>
    //         MY 영화관
    //       </button>
    //     );
    //   }
    // } else {
    //   return (
    //     <button
    //       className="btn_col4 ty3"
    //       onClick={() => onCreate(selectedCinema, selectedAddrDetail)}
    //     >
    //       <span className="ico_heart"></span>
    //       MY 영화관
    //     </button>
    //   );
    // }
  };

  console.log("asdfasdf", selectedCinemas);
  return (
    <div>
      <MainCarousel currentmovielist={cinemacarousel} />
      <CinemaContent>
        <Menu>
          <div>
            <h1>롯데시네마</h1>
          </div>
          <Addr>
            <ul>
              {region &&
                region.map((r) => (
                  <li key={r.id} onClick={() => handleRegionClick(r.grade)}>
                    {r.region}
                  </li>
                ))}
            </ul>
          </Addr>
          <AddrDetail>
            <ul>
              {selectedCinemas.map((m) => (
                <li
                  key={m.id}
                  onClick={() => handleCinemaClick(m.addr_detail, m.cinema)}
                >
                  <Link to={`/cinema?${m.cinema}`}>
                    {selectedCinema === m.cinema ? (
                      <Selected>{m.cinema}</Selected>
                    ) : (
                      <div>{m.cinema}</div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </AddrDetail>
        </Menu>
        {selectedCinema !== null && (
          <>
            <Title>
              {selectedCinema && <h1>{selectedCinema}</h1>}
              {renderButton(selectedCinema)}
              <button className="btn_col4 ty3">단체/대관문의</button>
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
                <img src="/location_subway_40.png" />
                <span>대중교통 안내</span>
              </button>
              <button>
                <img src="/location_car_40.png" />
                <span>자가용/주차안내</span>
              </button>
              <button onClick={openModal}>
                <img src="/location_map_40.png" />
                <span>지도보기</span>
              </button>
            </ModalTag>
          </>
        )}
      </CinemaContent>
      {selectedAddrDetail && isOpen && (
        <CinemaModal oncloseModal={oncloseModal} cinema={selectedAddrDetail} />
      )}
    </div>
  );
};

export default Cinema;
