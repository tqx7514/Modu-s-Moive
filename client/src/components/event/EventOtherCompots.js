import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EventCategory from "./EventCategory";

const EventOtherInfoBlock = styled.div`
  text-align: center;
  font-size: 12px;
  .textdate {
    margin-bottom: 10px;
  }
`;

const EventOtherItemBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;
  justify-content: center;
  p {
    text-align: center;
  }
`;

const EventOtherContainerBlock = styled.div`
  width: 980px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  h2 {
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

const EventOtherContentBlock = styled.div`
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
  margin: 10px 0px 10px 0px;
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

  const filteredEvents = sortedEvents.filter((e) => e.categoryId === "기타");

  return (
    <EventOtherContentBlock>
      <EventCategory />
      <EventOtherContainerBlock className="eventothercontainer">
        <h2>기타</h2>
        {filteredEvents && filteredEvents.length > 0 && (
          <EventOtherItemBlock className="eventotheritem">
            {filteredEvents.slice(0, visibleCount).map((e) => (
              <div key={e.eventNum}>
                <Link to={`/event/other/${e.eventNum}`}>
                  <img src={e.eventImg} alt={e.eventTitle} />
                  <EventOtherInfoBlock>
                    <p>{e.eventTitle}</p>
                    <p className="textdate">
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
