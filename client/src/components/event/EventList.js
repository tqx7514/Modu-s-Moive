import React from "react";
import { Link } from "react-router-dom";

const EventList = () => {
  const movieEventList = [
    { id: 1, title: "영화 이벤트 1", imageUrl: "영화 이벤트 1.jpg" },
    { id: 2, title: "영화 이벤트 2", imageUrl: "영화 이벤트 2.jpg" },
    { id: 3, title: "영화 이벤트 3", imageUrl: "영화 이벤트 3.jpg" },
  ];

  const promotionEventList = [
    { id: 1, title: "제휴/할인 이벤트 1", imageUrl: "제휴/할인 이벤트 1.jpg" },
    { id: 2, title: "제휴/할인 이벤트 2", imageUrl: "제휴/할인 이벤트 2.jpg" },
    { id: 3, title: "제휴/할인 이벤트 3", imageUrl: "제휴/할인 이벤트 3.jpg" },
  ];

  const twinkleEventList = [
    { id: 1, title: "반짝반짝 이벤트 1", imageUrl: "반짝반짝 이벤트 1.jpg" },
    { id: 2, title: "반짝반짝 이벤트 2", imageUrl: "반짝반짝 이벤트 2.jpg" },
    { id: 3, title: "반짝반짝 이벤트 3", imageUrl: "반짝반짝 이벤트 3.jpg" },
  ];

  return (
    <div>
      <h2>영화</h2>
      <Link to="/movieevent">더보기</Link>
      <ul>
        {movieEventList.map((movieEvent) => (
          <li key={movieEvent.id}>
            <Link to={`/movieevent/${movieEvent.id}`}>
            <img src={movieEvent.imageUrl} alt={movieEvent.title} />
            <span>{movieEvent.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h2>제휴/할인</h2>
      <Link to="/promotionevent">더보기</Link>
      <ul>
        {promotionEventList.map((promotionEvent) => (
          <li key={promotionEvent.id}>
            <Link to={`/promotionevent/${promotionEvent.id}`}>
            <img src={promotionEvent.imageUrl} alt={promotionEvent.title} />
            <span>{promotionEvent.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      
      <h2>반짝반짝</h2>
      <Link to="/twinkleevent">더보기</Link>
      <ul>
        {twinkleEventList.map((twinkleEvent) => (
          <li key={twinkleEvent.id}>
            <Link to={`/twinkleevent/${twinkleEvent.id}`}>
            <img src={twinkleEvent.imageUrl} alt={twinkleEvent.title} />
            <span>{twinkleEvent.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default EventList;
