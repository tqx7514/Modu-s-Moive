import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EventOtherInfoBlock = styled.div`
  text-align: center;
`;

const EventOtherItemBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  p {
    text-align: center;
  }
`;

const EventOtherContainerBlock = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 12px;

  h2 {
    margin-bottom: 10px;
  }
`;

const EventOtherContentBlock = styled.div`
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

const EventOtherCompots = ({ events }) => {
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

  const filteredEvents = sortedEvents.filter((e) => e.categoryId === 3);

  return (
    <EventOtherContentBlock>
      <EventOtherContainerBlock className="eventothercontainer">
        <h2>기타</h2>
        {filteredEvents && filteredEvents.length > 0 && (
          <EventOtherItemBlock className="eventotheritem">
            {filteredEvents.slice(0, visibleCount).map((e) => (
              <div key={e.eventNum}>
                <Link to={`/event/other/${e.eventNum}`}>
                  <EventOtherInfoBlock>
                    <img src={e.eventImg} alt="기타 이벤트" />
                    <p>{e.eventTitle}</p>
                    <p>
                      {e.startEventDate} ~ {e.endEventDate}
                    </p>
                  </EventOtherInfoBlock>
                </Link>
              </div>
            ))}
          </EventOtherItemBlock>
        )}
        {visibleCount < filteredEvents.length && (
          <ShowMoreButton onClick={handleShowMore}>
            더보기
            <DownArrowImage src="../../arrow_down.png" />
          </ShowMoreButton>
        )}
      </EventOtherContainerBlock>
    </EventOtherContentBlock>
  );
};

export default EventOtherCompots;
