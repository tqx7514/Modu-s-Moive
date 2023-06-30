import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MovieEventCompots = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3005/event/event"
        );
        const sortedEvents = response.data.sort((a, b) => {
          return new Date(b.startEventDate) - new Date(a.startEventDate);
        });
        setEvents(sortedEvents);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {events && events.length > 0 && (
        <div className="movieEventList">
          <h2>영화</h2>
          <ul>
            {events
              .filter((event) => event.categoryId === 1)
              .map((event) => (
                <li key={event.eventNum}>
                  <Link to={`/event/movie/${event.eventNum}`}>
                    <img src={event.eventImg} alt={event.eventTitle} />
                    <p>{event.eventTitle}</p>
                    <p>
                      {event.startEventDate} ~ {event.endEventDate}
                    </p>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieEventCompots;
