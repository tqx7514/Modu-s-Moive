import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const MovieEventBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const MovieItemBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-content: center;
`;

const ShowMoreBtn = styled.div`
  display: flex;
  justify-content: center;
`;

const MovieEventCompots = () => {
  const [events, setEvents] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3005/event/movie");
      const sortedEvents = response.data
        .filter((event) => event.categoryId === 1)
        .sort((a, b) => {
          const startDateA = new Date(a.startEventDate).getTime();
          const startDateB = new Date(b.startEventDate).getTime();
          const endDateA = new Date(a.endEventDate).getTime();
          const endDateB = new Date(b.endEventDate).getTime();

          if (startDateA === startDateB) {
            return endDateB - endDateA;
          } else {
            return startDateB - startDateA;
          }
        });
      setEvents(sortedEvents);
    } catch (error) {
      console.error(error);
    }
  };

  const visibleEvents = showMore ? events : events.slice(0, 9);

  return (
    <MovieEventBlock>
      {visibleEvents.length > 0 && (
        <div className="container">
          <h1>영화</h1>
          <ul>
            <MovieItemBlock>
              {visibleEvents.map((event) => (
                <li key={event.eventNum}>
                  <Link to={`/event/${event.eventNum}`}>
                    <img src={event.eventImg} alt={event.eventTitle} />
                    <p>
                      {event.startEventDate} ~ {event.endEventDate}
                    </p>
                  </Link>
                </li>
              ))}
            </MovieItemBlock>
          </ul>
          <ShowMoreBtn>
            {!showMore && events.length > 9 && (
              <button onClick={handleShowMore}>더보기</button>
            )}
          </ShowMoreBtn>
        </div>
      )}
    </MovieEventBlock>
  );
};

export default MovieEventCompots;
