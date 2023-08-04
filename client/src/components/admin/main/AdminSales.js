import { styled } from "styled-components";
import {
  faPeopleGroup,
  faWonSign,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminSales = ({ income, audience, theater }) => {
  return (
    <AdminSalesBlock>
      <div className="title">모두의무비 매출추이</div>
      <StatisticBlock>
        <div>
          <div className="icon" style={{ background: "goldenrod" }}>
            <FontAwesomeIcon
              icon={faWonSign}
              style={{ color: "#fff", height: "35px", width: "35px" }}
            />
          </div>
          <div>
            <div className="detailtitle">이달의 총 매출</div>
            <div className="number">{income && income.toLocaleString()} 원</div>
          </div>
        </div>
        <div>
          <div className="icon">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              style={{ color: "#fff", height: "35px", width: "35px" }}
            />
          </div>
          <div>
            <div className="detailtitle">이달의 총 관객</div>
            <div className="number">
              {audience && audience.toLocaleString()} 명
            </div>
          </div>
        </div>
        <div>
          <div className="icon" style={{ background: "mediumseagreen" }}>
            <FontAwesomeIcon
              icon={faClapperboard}
              style={{ color: "#fff", height: "35px", width: "35px" }}
            />
          </div>
          <div>
            <div className="detailtitle">이달의 매출Top 영화관</div>
            <div className="number">{theater && theater.cinema} 지점</div>
            <div style={{ fontWeight: "bold" }}>
              {theater && theater.totalIncome.toLocaleString()}원 ({" "}
              {theater && theater.totalAudience.toLocaleString()}명 )
            </div>
          </div>
        </div>
      </StatisticBlock>
      <div className="buttonarea">
        <button>자세히 보기(구현중)</button>
      </div>
    </AdminSalesBlock>
  );
};

const AdminSalesBlock = styled.div`
  /* border: 1px solid blue; */
  /* display: flex; */
  border-radius: 5px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  background-color: #fff;
  > .title {
    font-size: 1.1rem;
    padding: 0.4rem 0rem 0.4rem 0.5rem;
    border-bottom: 0.2px solid lightgray;
  }

  > .buttonarea {
    display: flex;
    margin: 0.8rem 0 0.5rem 0;
    justify-content: center;
    align-items: center;

    > button {
      border: none;
      border-radius: 15px;
      background-color: steelblue;
      padding: 0.2rem 1rem 0.2rem 1rem;
      color: white;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        font-weight: bold;
        background-color: midnightblue;
      }
    }
  }
`;
const StatisticBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-bottom: 0.2px solid lightgray;

  > div {
    /* border: 1px solid red; */
    margin: 2rem 2rem 2rem 0;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      > .detailtitle {
        color: gray;
      }
      > .number {
        font-weight: bold;
        font-size: 1.7rem;
      }
    }

    > .icon {
      /* border: 1px solid purple; */
      border-radius: 100%;
      padding: 0.5rem;
      margin-right: 0.7rem;
      background-color: hotpink;
      /* min-height: 3rem; */
    }
  }
`;

export default AdminSales;
