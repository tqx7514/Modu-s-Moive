import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const EventItemBlock = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

const EventListBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const EventList = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3005/event");
        const sortedEvents = response.data.sort((a, b) => {
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
    fetchData();
  }, []);

  return (
    <EventListBlock>
      <div className="content">
        <h1>전체 이벤트</h1>
        <div className="container">
          {events && events.length > 0 && (
            <div className="movieItem">
              <h2>영화</h2>
              <Link to="/event/movie">더보기</Link>
              <ul>
                <EventItemBlock>
                  {events
                    .filter((event) => event.categoryId === 1)
                    .slice(0, 3)
                    .map((event) => (
                      <li key={event.eventNum}>
                        <Link to={`/event/movie/${event.eventNum}`}>
                          <img src={event.eventImg} alt={event.eventTitle} />
                          <p>
                            {event.startEventDate} ~ {event.endEventDate}
                          </p>
                        </Link>
                      </li>
                    ))}
                </EventItemBlock>
              </ul>
            </div>
          )}

          {events && events.length > 0 && (
            <div className="promoteEventList">
              <h2>제휴/할인</h2>
              <Link to="/event/promote">더보기</Link>
              <ul>
                <EventItemBlock>
                  {events
                    .filter((event) => event.categoryId === 2)
                    .slice(0, 3)
                    .map((event) => (
                      <li key={event.eventNum}>
                        <Link to={`/event/promote/${event.eventNum}`}>
                          <img src={event.eventImg} alt={event.eventTitle} />
                          <p>
                            {event.startEventDate} ~ {event.endEventDate}
                          </p>
                        </Link>
                      </li>
                    ))}
                </EventItemBlock>
              </ul>
            </div>
          )}
          {events && events.length > 0 && (
            <div className="otherEventList">
              <h2>기타</h2>
              <Link to="/event/other">더보기</Link>
              <ul>
                <EventItemBlock>
                  {events
                    .filter((event) => event.categoryId === 3)
                    .slice(0, 3)
                    .map((event) => (
                      <li key={event.eventNum}>
                        <Link to={`/event/other/${event.eventNum}`}>
                          <img src={event.eventImg} alt={event.eventTitle} />
                          <p>
                            {event.startEventDate} ~ {event.endEventDate}
                          </p>
                        </Link>
                      </li>
                    ))}
                </EventItemBlock>
              </ul>
            </div>
          )}
        </div>
      </div>
    </EventListBlock>
  );
};
export default EventList;
