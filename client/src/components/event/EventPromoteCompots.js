import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EventCategory from "./EventCategory";

const EventPromoteInfoBlock = styled.div`
  text-align: center;
  font-size: 12px;
  .textdate {
    margin-bottom: 10px;
  }
`;

const EventPromoteItemBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;
  justify-content: center;
`;

const EventPromoteContainerBlock = styled.div`
  width: 980px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  h2 {
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

const EventPromoteContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 980px;
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
`;

const ShowMoreButton = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ececec;
  margin: 10px 0 10px 0;
`;

const DownArrowImage = styled.img`
  width: 10px;
  height: 10px;
  margin-left: 4px;
  align-items: center;
`;

const EventPromoteCompots = ({ events }) => {
  const eventlist = events.eventlist;
  const [visibleCount, setVisibleCount] = useState(9);

  const handleShowMore = () => {
    setVisibleCount(visibleCount + 9);
  };

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

  const filteredEvents = sortedEvents.filter(
    (e) => e.categoryId === "제휴할인"
  );

  return (
    <EventPromoteContentBlock>
      <EventCategory />
      <EventPromoteContainerBlock className="eventpromotecontainer">
        <h2>제휴/할인</h2>
        {filteredEvents && filteredEvents.length > 0 && (
          <EventPromoteItemBlock className="eventpromoteitem">
            {filteredEvents.slice(0, visibleCount).map((e) => (
              <div key={e.eventNum}>
                <Link to={`/event/promote/${e.eventNum}`}>
                  <img src={e.eventImg} alt={e.eventTitle} />
                  <EventPromoteInfoBlock>
                    <p>{e.eventTitle}</p>
                    <p className="textdate">
                      {e.startEventDate} ~ {e.endEventDate}
                    </p>
                  </EventPromoteInfoBlock>
                </Link>
              </div>
            ))}
          </EventPromoteItemBlock>
        )}
        {visibleCount < filteredEvents.length && (
          <ShowMoreButton onClick={handleShowMore}>
            더보기
            <DownArrowImage src="../../arrow_down.png" />
          </ShowMoreButton>
        )}
      </EventPromoteContainerBlock>
    </EventPromoteContentBlock>
  );
};

export default EventPromoteCompots;
