import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { eventmovielist } from "../../lib/api/event";

const EventMovieInfoBlock = styled.div`
  text-align: center;
`;

const EventMovieItemBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  p {
    text-align: center;
  }
`;

const EventMovieContainerBlock = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 12px;

  h2 {
    margin-bottom: 10px;
  }
`;

const EventMovieContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 980px;
  margin: 0 auto;
  align-items: center;
`;

const ShowMoreButton = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  border: 1px solid gray;
  margin: 0 auto;
  height: 30px;
`;

const DownArrowImage = styled.img`
  width: 10px;
  height: 10px;
  margin-left: 4px;
  align-items: center;
`;

const EventMovieCompots = ({ events }) => {
  const eventlist = events.eventlist;
  const [visibleCount, setVisibleCount] = useState(9);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        await eventmovielist();
      } catch (error) {
        console.error(error);
      }
    };
    fetchInitialData();
  }, []);

  const handleShowMore = () => {
    setVisibleCount(visibleCount + 9);
  };

  const handleEventClick = (eventNum) => {
    navigate(`/event/movie/${eventNum}`);
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

  const filteredEvents = sortedEvents.filter((e) => e.categoryId === 1);

  return (
    <EventMovieContentBlock>
      <EventMovieContainerBlock className="eventmoviecontainer">
        <h2>영화</h2>
        {filteredEvents && filteredEvents.length > 0 && (
          <EventMovieItemBlock className="eventmovieitem">
            {filteredEvents.slice(0, visibleCount).map((e) => (
              <div
                key={e.eventNum}
                onClick={() => handleEventClick(e.eventNum)}
              >
                <Link to={`/event/movie/${e.eventNum}`}>
                  <EventMovieInfoBlock>
                    <img src={e.eventImg} alt="영화 이벤트" />
                    <p>{e.eventTitle}</p>
                    <p>
                      {e.startEventDate} ~ {e.endEventDate}
                    </p>
                  </EventMovieInfoBlock>
                </Link>
              </div>
            ))}
          </EventMovieItemBlock>
        )}
        {visibleCount < filteredEvents.length && (
          <ShowMoreButton onClick={handleShowMore}>
            더보기
            <DownArrowImage src="../../arrow_down.png" />
          </ShowMoreButton>
        )}
      </EventMovieContainerBlock>
    </EventMovieContentBlock>
  );
};

export default EventMovieCompots;
