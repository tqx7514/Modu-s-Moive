import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectedRegion } from "../../../modules/stepfirst";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { AdminBottomRightBlock } from "../main/AdminBottomRight";

const TitleUpload = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Title = styled.h2``;
const Add = styled.button`
  display: block;
  height: 30px;
  padding: 5px 15px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;
const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-spacing: 0;

  tr {
    &:last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  th {
    background: #fafafa;
  }
  th,
  td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    background: #fff;

    button {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 2px 5px;
      cursor: pointer;
    }
  }
`;
const AddModal = styled.div`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);

  &.on {
    display: block;
  }

  .modalWrap {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    height: 500px;
    background: #fff;
    border-radius: 5px;
  }
  .modalInner {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 30px;
    overflow: auto;
  }

  li {
    display: flex;
    margin-bottom: 10px;

    p {
      width: 100px;
    }

    .inputWrap {
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      .react-datepicker-wrapper {
        width: 100%;
      }

      input,
      select {
        width: 100%;
        padding: 5px 10px;
        margin-bottom: 5px;
      }
    }
  }
`;

const ModalBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    padding: 5px 20px;
    background: none;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;

    &:first-child {
      margin-right: 5px;
    }
    &:last-child {
      background: #ff243e;
      color: #fff;
      border: none;
    }
  }
`;

const PageBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  .paging {
    button {
    }
  }
  button {
    padding: 5px;
    margin: 0 10px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;

    &.active {
      background: #888;
      color: #fff;
    }
  }
`;
const AdminMovieTime = ({
  date,
  setDate,
  onAddModal,
  onModal,
  onSetSchedule,
  onCloseModal,
  formatDate,
  onSubmit,
  onDelete,
}) => {
  const [regionSelect, setRegionSelect] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 한 페이지에 보여질 아이템 수

  const { time, data, region, cinema, movie } = useSelector(
    ({ stepfirst }) => stepfirst
  );
  const { schedule } = useSelector(({ adminschedule }) => adminschedule);
  const dispatch = useDispatch();

  const handleChangeRegion = (e) => {
    dispatch(selectedRegion(e.target.value));
    setRegionSelect(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(time.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = time.slice(startIndex, endIndex);

  return (
    <AdminBottomRightBlock>
      <TitleUpload>
        <Title>상영스케줄 관리</Title>
        <Add onClick={onModal}>추가</Add>
      </TitleUpload>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>영화관</th>
            <th>좌석수</th>
            <th>상영관</th>
            <th>영화제목</th>
            <th>연령</th>
            <th>스크린</th>
            <th>언어</th>
            <th>상영시간</th>
            <th>종료시간</th>
            <th>상영날짜</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {itemsToShow.map((item) => (
            <tr key={item.movietimes_num}>
              <td>{item.movietimes_num}</td>
              <td>{item.cinema}</td>
              <td>{item.seat}</td>
              <td>{item.room}</td>
              <td>{item.movie_name}</td>
              <td>{item.age}</td>
              <td>{item.disp}</td>
              <td>{item.language}</td>
              <td>{item.start}</td>
              <td>{item.end}</td>
              <td>{item.date}</td>
              <td>
                <button onClick={() => onDelete(item.movietimes_num)}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <PageBtn className="pageBtn">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          ＜
        </button>
        <div className="paging">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={pageNumber === currentPage ? "active" : ""}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          ＞
        </button>
      </PageBtn>

      <AddModal className={onAddModal === true && "on"}>
        <div className="modalWrap">
          <div className="modalInner">
            <ul>
              <li>
                <p>영화관</p>
                <div className="inputWrap">
                  <select name="region" onChange={handleChangeRegion}>
                    <option defaultValue="">지역</option>
                    {region &&
                      region.map((re) => (
                        <option key={re.grade} value={re.grade}>
                          {re.region}
                        </option>
                      ))}
                  </select>
                  <select
                    onChange={(e) =>
                      onSetSchedule({ key: "cinema", value: e.target.value })
                    }
                  >
                    <option defaultValue="">영화관</option>
                    {regionSelect &&
                      cinema.map((cine) => (
                        <option key={cine.cinema_num} value={cine.cinema}>
                          {cine.cinema}
                        </option>
                      ))}
                  </select>
                </div>
              </li>
              <li>
                <p>좌석수</p>
                <div className="inputWrap">
                  <input
                    type="number"
                    onChange={(e) =>
                      onSetSchedule({ key: "seat", value: e.target.value })
                    }
                  />
                </div>
              </li>
              <li>
                <p>상영관</p>
                <div className="inputWrap">
                  <select
                    onChange={(e) =>
                      onSetSchedule({ key: "room", value: e.target.value })
                    }
                  >
                    <option defaultValue="">상영관선택</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </li>
              <li>
                <p>영화제목</p>
                <div className="inputWrap">
                  <select
                    onChange={(e) =>
                      onSetSchedule({ key: "movie", value: e.target.value })
                    }
                  >
                    <option defaultValue="">영화선택</option>
                    {movie.map((m) => (
                      <option key={m.movie_num} value={m.movie_name}>
                        {m.movie_name}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
              <li>
                <p>영화연령</p>
                <div className="inputWrap">
                  <select
                    onChange={(e) =>
                      onSetSchedule({ key: "age", value: e.target.value })
                    }
                  >
                    <option defaultValue="">연령선택</option>
                    <option value="all">all</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="19">19</option>
                  </select>
                </div>
              </li>
              <li>
                <p>스크린</p>
                <div className="inputWrap">
                  <select
                    onChange={(e) =>
                      onSetSchedule({ key: "disp", value: e.target.value })
                    }
                  >
                    <option defaultValue="">스크린선택</option>
                    <option value="2D">2D</option>
                  </select>
                </div>
              </li>
              <li>
                <p>언어</p>
                <div className="inputWrap">
                  <select
                    onChange={(e) =>
                      onSetSchedule({ key: "language", value: e.target.value })
                    }
                  >
                    <option defaultValue="">자막유무</option>
                    <option value="">자막없음</option>
                    <option value="자막">자막</option>
                  </select>
                </div>
              </li>
              <li>
                <p>상영시간</p>
                <div className="inputWrap">
                  <input
                    type="text"
                    placeholder="ex) 00:00"
                    onChange={(e) =>
                      onSetSchedule({ key: "start", value: e.target.value })
                    }
                  />
                </div>
              </li>
              <li>
                <p>종료시간</p>
                <div className="inputWrap">
                  <input
                    type="text"
                    placeholder="ex) 00:00"
                    onChange={(e) =>
                      onSetSchedule({ key: "end", value: e.target.value })
                    }
                  />
                </div>
              </li>
              <li>
                <p>상영날짜</p>
                <div className="inputWrap date">
                  <DatePicker
                    locale={ko}
                    selected={date}
                    onChange={(selectedDate) => {
                      setDate(selectedDate);
                      onSetSchedule({
                        key: "date",
                        value: formatDate(selectedDate),
                      });
                    }}
                    dateFormat="yyyy-MM-dd"
                  />
                </div>
              </li>
            </ul>
            <ModalBtn>
              <button onClick={onCloseModal}>취소</button>
              <button onClick={onSubmit}>등록</button>
            </ModalBtn>
          </div>
        </div>
      </AddModal>
    </AdminBottomRightBlock>
  );
};

export default AdminMovieTime;
