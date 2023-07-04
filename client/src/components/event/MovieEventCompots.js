import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const MovieEventBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const MovieItemBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-content: center;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PageButton = styled.button`
  margin: 0. 0.5rem;
`;

const MovieEventCompots = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3005/event/movie");
      const sortedEvents = response.data
        .filter((event) => event.categoryId === 1)
        .sort((a, b) => {
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

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const visibleEvents = events.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(events.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <MovieEventBlock>
      {visibleEvents.length > 0 && (
        <div className="container">
          <h2>영화</h2>
          <ul>
            <MovieItemBlock>
              {visibleEvents.map((event) => (
                <li key={event.eventNum}>
                  <Link to={`/event/${event.eventNum}`}>
                    <img src={event.eventImg} alt={event.eventTitle} />
                    <p>{event.eventTitle}</p>
                    <p>
                      {event.startEventDate} ~ {event.endEventDate}
                    </p>
                  </Link>
                </li>
              ))}
            </MovieItemBlock>
          </ul>
          <Pagination>
            {currentPage > 1 && (
            <PageButton onClick={() => handlePageChange(currentPage - 1)}>
              이전
            </PageButton>
            )}
            {pageNumbers.map((pageNumber) => (
              <PageButton
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={pageNumber === currentPage}
              >
                {pageNumber}
              </PageButton>
            ))}
            {currentPage < totalPages && (
              <PageButton onClick={() => handlePageChange(currentPage + 1)}>
                다음
              </PageButton>
            )}
          </Pagination>
        </div>
      )}
    </MovieEventBlock>
  );
};

export default MovieEventCompots;
