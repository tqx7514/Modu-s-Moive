import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EventInfoBlock = styled.div`
  text-align: center;
`;

const EventItemBlock = styled.div`
  display: flex;
  justify-content: center;
  p {
    text-align: center;
  }
`;

const EventContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const EventContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventListCompots = ({ events }) => {
  if (!events || !events.eventlist) {
    return null;
  } 
  
  const eventlist = events.eventlist;

  const sortedEvents = eventlist.sort((a, b) => {
    const startDateA = new Date(a.startEventDate).getTime();
    const startDateB = new Date(b.startEventDate).getTime();
    const endDateA = new Date(a.endEventDate).getTime();
    const endDateB = new Date(b.endEventDate).getTime();

    if (startDateA !== startDateB) {
      return startDateB - startDateA;
    } else {
      return endDateB - endDateA;
    }
  });

  return (
    <div>
      <EventContentBlock className="eventcontent">
        <h1>전체 이벤트</h1>
        <EventContainerBlock className="eventmoviecontainer">
          <h2>영화</h2>
          {sortedEvents && sortedEvents.length > 0 && (
            <EventItemBlock className="eventmovieitem">
              {sortedEvents
                .filter((e) => e.categoryId === 1)
                .slice(0, 3)
                .map((e) => (
                  <div key={e.eventNum}>
                    <Link to={`/event/movie/${e.eventNum}`}>
                      <EventInfoBlock>
                        <img src={e.eventImg} alt="영화 이벤트" />
                        <p>{e.eventTitle}</p>
                        <p>
                          {e.startEventDate} ~ {e.endEventDate}
                        </p>
                      </EventInfoBlock>
                    </Link>
                  </div>
                ))}
            </EventItemBlock>
          )}
        </EventContainerBlock>

        <EventContainerBlock className="eventpromotecontainer">
          <h2>제휴/할인</h2>
          {sortedEvents && sortedEvents.length > 0 && (
            <EventItemBlock className="eventpromoteitem">
              {sortedEvents
                .filter((e) => e.categoryId === 2)
                .slice(0, 3)
                .map((e) => (
                  <div key={e.eventNum}>
                    <Link to={`/event/promote/${e.eventNum}`}>
                      <EventInfoBlock>
                        <img src={e.eventImg} alt="제휴/할인 이벤트" />
                        <p>{e.eventTitle}</p>
                        <p>
                          {e.startEventDate} ~ {e.endEventDate}
                        </p>
                      </EventInfoBlock>
                    </Link>
                  </div>
                ))}
            </EventItemBlock>
          )}
        </EventContainerBlock>

        <EventContainerBlock className="eventothercontainer">
          <h2>기타</h2>
          {sortedEvents && sortedEvents.length > 0 && (
            <EventItemBlock className="eventotheritem">
              {sortedEvents
                .filter((e) => e.categoryId === 3)
                .slice(0, 3)
                .map((e) => (
                  <div key={e.eventNum}>
                    <Link to={`/event/other/${e.eventNum}`}>
                      <EventInfoBlock>
                        <img src={e.eventImg} alt="기타 이벤트" />
                        <p>{e.eventTitle}</p>
                        <p>
                          {e.startEventDate} ~ {e.endEventDate}
                        </p>
                      </EventInfoBlock>
                    </Link>
                  </div>
                ))}
            </EventItemBlock>
          )}
        </EventContainerBlock>
      </EventContentBlock>
    </div>
  );
};

export default EventListCompots;
