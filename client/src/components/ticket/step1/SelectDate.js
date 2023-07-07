import React, { useState } from 'react'
import styled from 'styled-components';

const StepDateTime = styled.div`
width: 40%;
height: 100%;
background: #fff;
`;
const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 55px;
color: #fff;
background: #000;
font-size: 18px;
font-weight: 400;
vertical-align: middle;
border-right: 1px solid #222;
`;

const DayList = styled.div`
  display: flex;
  overflow-x: auto;
`;

const DayItem = styled.div`
  cursor: pointer;
  text-align: center;
  padding: 10px 0;
  &.sunday{
    color: red;
  }
  &.satday{
    color: blue;
  }
  &.selected{
    .date{
      background: #000;
      color: #fff;
    }
  }
`;

const DayDate = styled.h4`
  width: 52px;
  font-weight: 500;
`;

const DayWeek = styled.p`
  font-size: 12px;
`

const SelectDate = ({onDateData}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dayOfWeek = week[date.getDay()];
    return `${year}-${month}-${day} (${dayOfWeek})`;
  };
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onDateData(formatDate(date))
    console.log(date);
  };

  const renderCalendar = () => {
    const calendar = [];
    const todayDate = today.getDate();

    for (let i = todayDate; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const dayOfWeek = week[(firstDayOfMonth + i - 1) % 7];
      const dayContent = i === todayDate ? '오늘' : dayOfWeek;
      const isSelected = selectedDate && selectedDate.getTime() === date.getTime();
      const daySelect = isSelected ? 'day selected' : 'day';
      const dayClass = 
        dayOfWeek === '일' ? `${daySelect} sunday` :
        dayOfWeek === '토' ? `${daySelect} satday` :
        daySelect;

      calendar.push(
        <DayItem 
          key={`current-${i}`} 
          className={`${dayClass}${i === today.getDate() && !selectedDate ? ' selected' : ''}`} 
          onClick={() => handleDateClick(date)}
        >
          <DayDate className='date'>{i}</DayDate>
          <DayWeek >
            {dayContent}
          </DayWeek>
        </DayItem>
      );
    }

    return calendar;
    
  }
    
  return (
    <>
        <StepDateTime>
            <Title>
              {selectedDate ? formatDate(selectedDate) : formatDate(today)}
            </Title>
            <div className="calendar">
              <DayList className="days">
                {renderCalendar()}
              </DayList>
            </div>
        </StepDateTime>
    </>
  )
}

export default SelectDate;