import styled from "styled-components";
import React from "react";
import Button from "../common/Button";
import ImageCarousel from "../common/ImageCarousel";
import VideoCarousel from "../common/VideoCarousel";

const DetailContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
    height: 300px;
  }
`;

const DetailContent = styled.div`
  display: flex;
  div {
    margin: 20px;
  }
  div div {
    display: flex;
  }
`;

const Clickevent = styled.div`
  text-align: center;
  button {
    margin: 10px;
    background-color: white;
    cursor: pointer;
    border: none;
    font-size: 30px;
    &:hover {
      background-color: #495057;
    }
  }
`;

const Video = styled.div`
  display: block;
  justify-content: center;
  iframe {
    display: flex;
  }
`;

const Talent = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    margin: 10px;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 70%;
  }
`;

const Reviews = styled.div`
  text-align: center;
  input {
    width: 800px;
    height: 100px;
  }
  button {
    background-color: #666;
    color: white;
    height: 100px;
    border: none;
  }
`;

const MovieDetail = ({
  moviedetail,
  images,
  videos,
  credits,
  credit,
  genres,
  showInfo,
  showReviews,
  handleShowInfo,
  handleShowReviews,
}) => {
  if (!moviedetail) {
    return <div>Loading...</div>;
  }

  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

  return (
    <DetailContainer>
      <div>
        <ImageCarousel images={images} />
        <DetailContent>
          <img
            src={IMG_BASE_URL + moviedetail.poster_path}
            alt={moviedetail.title}
          />
          <div>
            <h2>{moviedetail.title}</h2>
            <p>평점: {moviedetail.vote_average}</p>
            <p>좋아요: {moviedetail.vote_count}</p>
            <hr />
            <div>
              <p>장르:</p>
              {genres &&
                genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
              <hr />
              <p>개봉일: {moviedetail.release_date}</p>
              <hr />
              <p>{moviedetail.runtime}분</p>
            </div>
            <div>
              <p>감독:</p>
              {credit &&
                credit.map((credit) => {
                  if (credit.job === "Director") {
                    return <p key={credit.id}>{credit.name}</p>;
                  }
                  return null;
                })}
            </div>
            <Button>예매하기</Button>
          </div>
        </DetailContent>
        <Clickevent>
          <button onClick={handleShowInfo}>영화정보</button>
          <button onClick={handleShowReviews}>평점 및 관람평</button>
        </Clickevent>
        <hr />
        {showInfo && (
          <div>
            <p>{moviedetail.overview}</p>
            <h1>트레일러</h1>
            <Video>
              <VideoCarousel videos={videos} />
            </Video>
            <h1>배우</h1>
            <hr />
            <Talent>
              <ul>
                {credits &&
                  credits.map((credit) => (
                    <li key={credit.id}>
                      {credit.profile_path &&
                        credit.known_for_department === "Acting" && (
                          <>
                            <img
                              src={IMG_BASE_URL + credit.profile_path}
                              alt={credit.name}
                            />
                            <h4>{credit.name}</h4>
                          </>
                        )}
                    </li>
                  ))}
              </ul>
            </Talent>
          </div>
        )}
        {showReviews && (
          <Reviews>
            {/* <Title>
              <div>평점 & 관람평 작성</div>
            </Title>
            <Star>
                <button>별1점</button>
                <button>별2점</button>
                <button>별3점</button>
                <button>별4점</button>
                <button>별5점</button>
                <button>별6점</button>
                <button>별7점</button>
                <button>별8점</button>
                <button>별9점</button>
                <button>별10점</button>
            </Star> */}
            <div>영화 관람 후 관람평 작성 시 L.POINT 50P 적립</div>
            <input></input>
            <button>관람평 작성</button>
            <div>
              <p>관람객 관람평</p>
              <div>
                <p>총1,200건</p>
                <p>최신순</p>
                <p>공감순</p>
              </div>
            </div>
            <hr />
            <div>
                <h1>이모티콘</h1>
                <div>
                    <div>
                    <p>이준영</p>
                    <p>2023.07.04</p>
                    </div>
                    <p>별10점</p>
                    <p>역사를써 온 해리슨 포드님 존경!</p>
                </div>
                
            </div>
          </Reviews>
        )}
      </div>
    </DetailContainer>
  );
};

export default MovieDetail;
