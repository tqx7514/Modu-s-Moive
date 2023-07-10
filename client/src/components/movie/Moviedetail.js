import styled from "styled-components";
import React, { useState } from "react";
import ImageCarousel from "../common/ImageCarousel";
import VideoCarousel from "../common/VideoCarousel";
import MovieVideoModal from "./MovieVideoModal";
import { MdOutlineWatchLater, MdOutlineArrowRight } from "react-icons/md";

const DetailContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`;

const DetailContent = styled.div`
  display: flex;
  width: 980px;
  margin: 0 auto;
  padding: 50px 0 0 0;
`;
const DetailTop = styled.div`
  display: flex;
  min-height: 460px;
  margin-bottom: 15px;
`;

const PosterInfo = styled.div`
  img {
    width: 316px;
    height: 468px;
    border-radius: 20px;
  }
`;

const MovieContent1 = styled.div`
  padding-left: 50px;
`;

const MovieInfo1 = styled.div`
  display: flex;
  margin-top: 10px;
  .movielist1 {
    padding-left: 12px;
    margin-left: 12px;
  }
`;

const MovieInfo2 = styled.div`
  display: flex;
  margin-top: 50px;
  button {
    font-size: 19px;
  }
`;

const MovieInfo3 = styled.div`
  margin: 20px 0 27px;
  overflow-y: scroll;
  height: 115px;
  line-height: 1.6;
  font-size: 18px;
  border: 0;
  padding: 0 20px 0 0;
`;

const Button1 = styled.button`
  width: 323px;
  height: 58px;
  font-size: 24px;
  border-radius: 60px;
  border: 1px solid #ff243e;
  background-color: #ff243e;
  color: white;
`;

const Clickevent = styled.div`
  text-align: center;
  button {
    width: 490px;
    background-color: white;
    cursor: pointer;
    border: none;
    font-size: 30px;
    border-bottom: 1px solid #ccc;
  }
`;

const MovieContentInfo = styled.div`
  background-color: #f8f8f8;
  margin-bottom: 45px;
  .MovieContentInfo {
    width: 980px;
    margin: 0 auto;
  }
  .MovieContentInfo1 {
    padding: 50px 0;
  }
`;

const Genre = styled.div`
  display: flex;
`;

const Director = styled.div`
  display: flex;
`;

const Talent = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;

const VideoImageInfo = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const Video = styled.div`
  display: block;
  justify-content: center;
  iframe {
    display: flex;
  }
`;

const Image = styled.div``;

const Reviews = styled.div`
  background: #f8f8f8;
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
const Title = styled.div`
  width: 980px;
  margin: 0 auto;
  div {
    padding: 30px;
    margin-top: -30px;
    background: #f8f8f8;
  }
`;

const Star = styled.div``;

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
  const [isOpen, setIsOpen] = useState(false);
  if (!moviedetail) {
    return <div>Loading...</div>;
  }
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

  

  const openModal = () => {
    setIsOpen(true);
  };
  const oncloseModal = () => {
    setIsOpen(false);
  };

  

  return (
    <DetailContainer>
      <div>
        <DetailContent>
          <DetailTop>
            <PosterInfo>
              <img
                src={IMG_BASE_URL + moviedetail.poster_path}
                alt={moviedetail.title}
              />
            </PosterInfo>
            <MovieContent1>
              <h2>{moviedetail.title}</h2>
              <MovieInfo1>
                <p>{moviedetail.release_date} 개봉</p>
                <p className="movielist1">
                  <MdOutlineWatchLater />
                  {moviedetail.runtime}분
                </p>
                <p className="movielist1">{moviedetail.popularity}명</p>
              </MovieInfo1>
              <MovieInfo2>
                <button onClick={openModal}>
                  <MdOutlineArrowRight /> 예고편 재생
                </button>
                <button>3,749</button>
                <button>
                  <img src="btn_icon_share.svg" />
                </button>
              </MovieInfo2>
              <MovieInfo3>
                <span>{moviedetail.overview}</span>
              </MovieInfo3>
              <Button1>예매하기</Button1>
            </MovieContent1>
          </DetailTop>
        </DetailContent>
        <Clickevent>
          <button onClick={handleShowInfo}>영화정보</button>
          <button onClick={handleShowReviews}>평점 및 관람평</button>
        </Clickevent>
        {showInfo && (
          <div>
            <MovieContentInfo>
              <div className="MovieContentInfo">
                <div ClassName="MovieContentInfo1">
                  <h1>영화정보</h1>
                  <Genre>
                    <p>장르:</p>
                    {genres &&
                      genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
                  </Genre>
                  <Director>
                    <p>감독:</p>
                    {credit &&
                      credit.map((credit) => {
                        if (credit.job === "Director") {
                          return <p key={credit.id}>{credit.name}</p>;
                        }
                        return null;
                      })}
                  </Director>
                  <Talent>
                    <ul>
                      <p>출연:</p>
                      {credits &&
                        credits.map((credit) => (
                          <li key={credit.id}>
                            {credit.profile_path &&
                              credit.known_for_department === "Acting" && (
                                <>
                                  <p>{credit.name}</p>
                                </>
                              )}
                          </li>
                        ))}
                    </ul>
                  </Talent>
                </div>
              </div>
            </MovieContentInfo>
            <VideoImageInfo>
              <h1>트레일러({videos.length})</h1>
              <Video>
                <VideoCarousel videos={videos} />
              </Video>
              <Image>
                <h1>스틸컷({images.length})</h1>
                <ImageCarousel images={images} />
              </Image>
            </VideoImageInfo>
          </div>
        )}
        {showReviews && (
          <Reviews>
            <Title>
              <div>
                <div>평점 & 관람평 작성</div>

                <Star></Star>

                <div>영화 관람 후 관람평 작성 시 L.POINT 50P 적립</div>
                <input></input>
                <button>관람평 작성</button>
              </div>
            </Title>
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
      {isOpen && 
        <MovieVideoModal oncloseModal={oncloseModal} videos={videos} />
      }
    </DetailContainer>
  );
};

export default MovieDetail;
