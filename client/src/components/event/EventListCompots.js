import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EventInfoBlock = styled.div`
  text-align: center;
  font-size: 12px;
`;

const EventItemBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  p {
    text-align: center;
    margin-bottom: 5px;
  }
`;

const EventContainerBlock = styled.div`
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 10px;
  }
`;

const EventContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 980px;
  margin: 0 auto;

  h2 {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 5px;
  }
`;

const RightArrowImage = styled.img`
  width: 10px;
  height: 10px;
  margin-left: 4px;
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
    } else if (endDateA !== endDateB) {
      return endDateB - endDateA;
    } else {
      return b.eventNum - a.eventNum;
    }
  });

  return (
      <EventContentBlock className="eventcontent">
        <h2>전체 이벤트</h2>
        <EventContainerBlock className="eventmoviecontainer">
          <Link to="/event/movie">
            <h3>
              영화
              <RightArrowImage src="../../arrow_right.png" />
            </h3>
          </Link>
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
          <Link to="/event/promote">
            <h3>
              제휴/할인
              <RightArrowImage src="../../arrow_right.png" />
            </h3>
          </Link>
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
          <Link to="/event/other">
            <h3>
              기타
              <RightArrowImage src="../../arrow_right.png" />
            </h3>
          </Link>
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
  );
};

export default EventListCompots;
