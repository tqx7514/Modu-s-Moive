import React, { useCallback, useState } from 'react'
import AdminMovieTime from '../../../components/admin/ticket/AdminMovieTime';
import { useDispatch } from 'react-redux';
import { setSchedule } from '../../../modules/admin/adminschedule';

const AdminMovieTimeContainer = () => {
  const [cinema, setCinema] = useState('');
  const [room, setRoom] = useState('');
  const [seat, setSeat] = useState('');
  const [movie, setMovie] = useState('');
  const [age, setAge] = useState('');
  const [disp, setDisp] = useState('');
  const [language, setLanguage] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();
  console.log('cinema', date)

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const onSetSchedule = useCallback(() => {
    const updatedData = {
      cinema,
      room,
      seat,
      movie,
      age,
      disp,
      language,
      start,
      end,
      date,
    };
    dispatch(setSchedule({key: "schedule", value: updatedData}));
  })
  return (
    <div>
      <AdminMovieTime 
        setCinema={setCinema}
        setRoom={setRoom}
        setSeat={setSeat}
        setMovie={setMovie}
        setAge={setAge}
        setDisp={setDisp}
        setLanguage={setLanguage}
        setStart={setStart}
        setEnd={setEnd}
        date={date}
        setDate={setDate}
        formatDate={formatDate}
      />
    </div>
  )
}

export default AdminMovieTimeContainer;