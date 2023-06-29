import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3005/event/event");
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
    <div class="container">
      {events && events.length > 0 && (
        <div>
          <h2>영화</h2>
          <Link to="/movieevent">더보기</Link>
          <ul>
            {events
              .filter((event) => event.categoryId === 1)
              .slice(0, 3)
              .map((event) => (
                <li key={event.eventNum}>
                  <Link to={`/movieevent/${event.eventNum}`}>
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

      {events && events.length > 0 && (
        <>
          <h2>제휴/할인</h2>
          <Link to="/promotionevent">더보기</Link>
          <ul>
            {events
              .filter((event) => event.categoryId === 2)
              .map((event) => (
                <li key={event.eventNum}>
                  <Link to={`/promotionevent/${event.eventNum}`}>
                    <img src={event.eventImg} alt={event.eventTitle} />
                    <p>{event.eventTitle}</p>
                    <p>
                      {event.startEventDate} ~ {event.endEventDate}
                    </p>
                  </Link>
                </li>
              ))}
          </ul>
        </>
      )}

      {events && events.length > 0 && (
        <>
          <h2>반짝반짝</h2>
          <Link to="/twinkleevent">더보기</Link>
          <ul>
            {events
              .filter((event) => event.categoryId === 3)
              .slice(0, 3)
              .map((event) => (
                <li key={event.eventNum}>
                  <Link to={`/twinkleevent/${event.eventNum}`}>
                    <img src={event.eventImg} alt={event.eventTitle} />
                    <p>{event.eventTitle}</p>
                    <p>
                      {event.startEventDate} ~ {event.endEventDate}
                    </p>
                  </Link>
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
};
export default EventList;
