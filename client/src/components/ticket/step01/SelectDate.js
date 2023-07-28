import React, { useState } from 'react'
import styled from 'styled-components';
import MultipleItems from './Slider';
import SelectTime from './SelectTime';
import { useSelector } from 'react-redux';

const StepDateTime = styled.div`
width: 40%;
height: 100%;
background: #fff;
`;

const Calendar = styled.div`
  position: relative;
  padding: 0 46px;
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

const DayItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 52.5px;
  margin-top: 15px;
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
  &.noSchedule{
    color: #ccc;
  }
`;

const DayDate = styled.h4`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  padding-top: 5px;
  font-weight: 500;
  border-radius: 100%;
`;

const FirstMonth = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 8px;
  font-weight: 400;
  color: #000;
`;

const DayWeek = styled.p`
  font-size: 12px;
`;

const SelectDate = ({onDateData, onDayData}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const {data, time} = useSelector(({stepfirst}) => stepfirst);

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
    return isInitialRender && date.getTime() === today.getTime()
      ? `${year}-${month}-${day}`
      : `${year}-${month}-${day}`;
  };
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  
  const handleDateClick = (date) => {
    setSelectedDate(date);
    const dayOfWeek = week[date.getDay()];
    onDateData(formatDate(date));
    onDayData(dayOfWeek);
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
      const timeList = time.filter((t) => t.date === formatDate(date))
      const hasNoSchedule = timeList.length === 0;
      calendar.push(
        <DayItem 
          key={date.getTime()} 
          className={`${dayClass}${i === today.getDate() && !selectedDate ? ' selected' : ''} ${hasNoSchedule ? ' noSchedule' : ''}`} 
          onClick={() => handleDateClick(date)}
        >
          <FirstMonth>{i === todayDate ? month + 1 + '월' : ''}</FirstMonth>
          <DayDate 
            className={`date ${timeList.some(t => t.date === formatDate(date)) ? 'available' : ''}`}
          >
            {i}
          </DayDate>
          <DayWeek >
            {dayContent}
          </DayWeek>
        </DayItem>
      );
    }
  
    // 다음 달의 날짜 출력
    const nextMonthFirstDay = new Date(year, month + 1, 1).getDay();
    
    for (let i = 1; i <= daysInMonth - nextMonthFirstDay; i++) {
      const date = new Date(year, month + 1, i);
      const dayOfWeek = week[(nextMonthFirstDay + i - 1) % 7];
      const dayContent = dayOfWeek;
      const isSelected = selectedDate && selectedDate.getTime() === date.getTime();
      const daySelect = isSelected ? 'day selected' : 'day';
      const dayClass = 
        dayOfWeek === '일' ? `${daySelect} sunday` :
        dayOfWeek === '토' ? `${daySelect} satday` :
        daySelect
      ;
      const timeList = time.filter((t) => t.date === formatDate(date))
      const hasNoSchedule = timeList.length === 0;

      const isFirstDayOfMonth = i === 1;
      const isNextMonthFirstDay = i === 1 && month < 11;
      const isFirstMonth = isFirstDayOfMonth || isNextMonthFirstDay;
      
  
      calendar.push(
        <DayItem 
          key={date.getTime()} 
          className={`${dayClass} ${hasNoSchedule ? 'noSchedule' : ''}`} 
          onClick={() => handleDateClick(date)}
        >
        {isFirstMonth && <FirstMonth>{month + 2}월</FirstMonth>}
        <DayDate className='date'>{i}</DayDate>
        <DayWeek>{dayContent}</DayWeek>
        </DayItem>
      );
    }
  
    return calendar;
  }
    
  return (
    <>
        <StepDateTime>
            <Title>
              {selectedDate ? `${formatDate(selectedDate)} (${data.day})` : `${formatDate(today)} (오늘)`}
            </Title>
            <Calendar>
              <MultipleItems Calendar={renderCalendar()}/>
            </Calendar>
            <SelectTime/>
        </StepDateTime>
    </>
  )
}

export default SelectDate;