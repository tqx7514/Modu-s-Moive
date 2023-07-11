import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EventPromoteInfoBlock = styled.div`
  text-align: center;
`;

const EventPromoteItemBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  p {
    text-align: center;
  }
`;

const EventPromoteContainerBlock = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 12px;

  h2 {
    margin-bottom: 10px;
  }
`;

const EventPromoteContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 980px;
  margin: 0 auto;
  align-items: center;
`;

const ShowMoreButton = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid gray;
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

  const filteredEvents = sortedEvents.filter((e) => e.categoryId === 2);

  return (
    <EventPromoteContentBlock>
      <EventPromoteContainerBlock className="eventpromotecontainer">
        <h2>제휴/할인</h2>
        {filteredEvents && filteredEvents.length > 0 && (
          <EventPromoteItemBlock className="eventpromoteitem">
            {filteredEvents.slice(0, visibleCount).map((e) => (
              <div key={e.eventNum}>
                <Link to={`/event/promote/${e.eventNum}`}>
                  <EventPromoteInfoBlock>
                    <img src={e.eventImg} alt="제휴/할인 이벤트" />
                    <p>{e.eventTitle}</p>
                    <p>
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
