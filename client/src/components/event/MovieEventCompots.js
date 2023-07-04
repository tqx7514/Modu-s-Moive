import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const MovieItems = styled.div`
  display: flex;
  justify-content: center;
`;

const MovieEventCompots = () => {
  const [events, setEvents] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3005/event/movie");
      const sortedEvents = response.data
      .filter((event) => event.categoryId === 1)
      .sort((a, b) => {
        const startDateA = new Date(a.startEventDate).getTime();
        const StartDateB = new Date(b.startEventDate).getTime();
        const endDateA = new Date(a.endEventDate).getTime();
        const endDateB = new Date(b.endEventDate).getTime();

        if (startDateA === StartDateB) {
          return endDateB - endDateA
        } else {
          return startDateB - startDateA;
        }
      });
      setEvents(sortedEvents);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  const visibleEvents = showMore ? events : events.slice(0, 16);

  return (
    <div className="container">
      {visibleEvents.length > 0 && (
        <div className="movieEventList">
          <h2>영화</h2>
          <ul>
            <MovieItems>
              {visibleEvents.map((event) => (
                <li key={event.eventNum}>
                  <Link to={`/event/${event.eventNum}`}>
                    <img src={event.eventImg} alt={event.eventTitle} />
                    <p>{event.eventTitle}</p>
                      <p>
                        {event.startEventDate} ~ {event.endEventDate}
                      </p>
                  </Link>
                </li>
              ))}
              </MovieItems>
          </ul>
          {!showMore && events.length > 16 && (
            <button onClick={handleShowMore}>더보기</button>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieEventCompots;
