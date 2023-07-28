import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SelectSeatWrap = styled.div`
  width: 100%;
  height: 640px;
  background: #000;
`;

const SelectInfo = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding-top: 10px;

  p {
    text-align: center;
    color: #fff;
    font-size: 11px;
  }
`;

const Screen = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 30px;

  div {
    padding: 5px;
    background: #6e6e6e;
    text-align: center;
    color: #fff;
    letter-spacing: 5px;
  }
`;

const Seat = styled.div`
  display: flex;
  justify-content: center;
  width: 650px;
  margin: 0 auto;
  color: #fff;

  li {
    position: relative;
    margin-bottom: 10px;
  }

  p {
    position: absolute;
    left: -20px;
    top: 5px;
    display: inline-block;
    font-size: 12px;
  }

  span {
    display: inline-block;
    width: 21px;
    height: 16px;
    background: #e8e8e8;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    text-align: center;
    line-height: 16px;
    color: #000;
    font-size: 10px;
    cursor: pointer;
    margin-right: 5px;

    &.firstRoom {
      &:nth-child(3) {
        margin-right: 20px;
      }
      &:nth-child(14) {
        margin-left: 20px;
      }
    }
    &.selected {
      background: #ff243e;
      color: #fff;
    }
    &.unselected{
      pointer-events: none;
      background: url(/no_select.png);
    }
    &.disabled{
      background: #333;
      cursor: default;
    }
  }
`;

const SelectSeat = ({ 
  onSelectSeat,
  selectedSeats,
  setSelectedSeats
}) => {
  const seatRow = ["A", "B", "C", "D", "E", "F"];
  const seatCol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const { data } = useSelector(({ stepfirst }) => stepfirst);
  const { number, seat, reservation } = useSelector(({ stepsecond }) => stepsecond);
  console.log(reservation)


  const findMatchingReservation = () => {
    if (!data || !data.date || !data.time) {
      return null;
    }
  
    const matchingReservation = reservation?.filter((item) => {
      return (
        item.cinema === data.cinema &&
        item.movie_name === data.time.movie_name &&
        item.date === data.date &&
        item.start === data.time.start &&
        item.room === data.time.room
      );
    });
  
    return matchingReservation;
  };
  
  const matchingReservation = findMatchingReservation();

  const isSeatDisabled = (row, col) => {
    if (!matchingReservation) {
      return false;
    }

    const seatId = `${row}${col}`;
    const isDisabled = matchingReservation.some((item) => {
      return item.seat.includes(seatId);
    });

    return isDisabled;
  };

  const handleSeatClick = (e, row, col) => {
    if (number === 0) {
      alert("인원을 선택하세요");
      return;
    }

    const seatId = `${row}${col}`;
    const isSelected = selectedSeats.includes(seatId);
    const isDisabled = isSeatDisabled(row, col);
    if(isDisabled){
      return;
    }

    if (isSelected) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats?.filter((seat) => seat !== seatId)
      );
    } else {
      if (selectedSeats.length < number) {
        setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatId]);
      }
    }

    onSelectSeat(selectedSeats);
  };

  useEffect(() => {
    onSelectSeat(selectedSeats);
  }, [selectedSeats]);

  return (
    <>
      <SelectSeatWrap>
        <SelectInfo>
          <p>- 좌석 선택 후 결제하기 버튼을 클릭하세요</p>
        </SelectInfo>
        <Screen>
          <div>S C R E E N</div>
        </Screen>
        <Seat data={String(data)}>
          <ul>
            {seatRow.map((row, rowIndex) => (
              <li key={rowIndex}>
                <p>{row}</p>
                {seatCol.map((col, colIndex) => {
                  const seatId = `${row}${col}`;
                  const isSelected = seat?.includes(seatId);
                  const isUnselected = !isSelected && seat?.length >= number && number !== 0;
                  let classes = "";
                  if (isSelected) {
                    classes += "selected ";
                  }
                  if (isUnselected) {
                    classes += "unselected ";
                  }
                  if (data.time.room === 1) {
                    classes += "firstRoom ";
                  }
                  if (isSeatDisabled(row, col)) {
                    classes += "disabled ";
                  }
                  return (
                    <span
                      key={colIndex}
                      onClick={(e) => handleSeatClick(e, row, col)}
                      className={classes.trim()}
                    >
                      {col}
                    </span>
                  );
                })}
              </li>
            ))}
          </ul>
        </Seat>
      </SelectSeatWrap>
    </>
  );
};

export default SelectSeat;
