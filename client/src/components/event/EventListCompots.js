import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EventCategory from "./EventCategory";

const EventInfoBlock = styled.div`
  text-align: center;
  font-size: 12px;
  .textdate {
    margin-bottom: 30px;
  }
`;

const EventItemBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;
  justify-content: center;
  p {
    text-align: center;
  }
`;

const EventTitle = styled.div`
  display: block;
  width: 980px;
  height: 60px;
  margin: 10px 0 10px 0;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

const EventContainerBlock = styled.div`
  width: 980px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  h2 {
    font-size: 20px;
    margin: 10px 0 10px 0;
  }
`;

const EventContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 980px;
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
`;

const RightArrowImage = styled.img`
  width: 10px;
  height: 10px;
  margin-left: 4px;
  align-items: center;
  justify-content: center;
`;

const RightArrowBlock = styled.div`
  display: flex;
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
    } else if (endDateA !== endDateB) {
      return endDateB - endDateA;
    } else {
      return b.eventNum - a.eventNum;
    }
  });

  return (
    <EventContentBlock className="eventcontent">
      <EventCategory />
      <EventTitle>
        <h1>전체 이벤트</h1>
      </EventTitle>
      <EventContainerBlock className="eventmoviecontainer">
        <Link to="/event/movie">
          <h2>
            <RightArrowBlock>
              영화
              <RightArrowImage src="../../arrow_right.png" />
            </RightArrowBlock>
          </h2>
        </Link>
        {sortedEvents && sortedEvents.length > 0 && (
          <EventItemBlock className="eventmovieitem">
            {sortedEvents
              .filter((e) => e.categoryId === "영화")
              .slice(0, 3)
              .map((e) => (
                <div key={e.eventNum}>
                  <Link to={`/event/movie/${e.eventNum}`}>
                    <img src={e.eventImg} alt={e.eventTitle} />
                    <EventInfoBlock>
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
          <h2>
            <RightArrowBlock>
              제휴/할인
              <RightArrowImage src="../../arrow_right.png" />
            </RightArrowBlock>
          </h2>
        </Link>
        {sortedEvents && sortedEvents.length > 0 && (
          <EventItemBlock className="eventpromoteitem">
            {sortedEvents
              .filter((e) => e.categoryId === "제휴할인")
              .slice(0, 3)
              .map((e) => (
                <div key={e.eventNum}>
                  <Link to={`/event/promote/${e.eventNum}`}>
                    <img src={e.eventImg} alt={e.eventTitle} />
                    <EventInfoBlock>
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
          <h2>
            <RightArrowBlock>
              기타
              <RightArrowImage src="../../arrow_right.png" />
            </RightArrowBlock>
          </h2>
        </Link>
        {sortedEvents && sortedEvents.length > 0 && (
          <EventItemBlock className="eventotheritem">
            {sortedEvents
              .filter((e) => e.categoryId === "기타")
              .slice(0, 3)
              .map((e) => (
                <div key={e.eventNum}>
                  <Link to={`/event/other/${e.eventNum}`}>
                    <img src={e.eventImg} alt={e.eventTitle} />
                    <EventInfoBlock>
                      <p>{e.eventTitle}</p>
                      <p className="textdate">
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
