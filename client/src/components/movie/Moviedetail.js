import styled from "styled-components";
import React, { useState } from "react";
import ImageCarousel from "../common/ImageCarousel";
import VideoCarousel from "../common/VideoCarousel";
import MovieVideoModal from "./MovieVideoModal";
import { MdOutlineWatchLater, MdOutlineArrowRight } from "react-icons/md";
import StarRating from "./StarRating";

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
  justify-content: center;
  display: flex;
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
  .comment {
    background: #f8f8f8;
  }
  input {
    width: 800px;
    height: 100px;
  }
`;
const Title = styled.div`
  width: 980px;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
  .starInfo {
    position: relative;
    margin-top: 30px;
    padding-top: 70px;
  }
  .starInfo1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Star = styled.div``;

const InputBox = styled.div`
  height: 119px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  .review-write-box {
    width: 799px;
    background: #fff;
    float: left;
  }
  textarea {
    height: 100px;
    border: none;
    width: 100%;
    line-height: 1.5;
    box-sizing: border-box;
    padding: 13px 18px;
    resize: none;
    font-size: 14px;
  }
  span {
    margin: 0 10px 5px 0;
    margin-top: -3px;
    background: #fff;
    display: block;
    text-align: right;
    font-size: 10px;
    color: #666;
  }
  strong {
    color: #000;
    font-weight: bold;
  }
  button {
    float: left;
    height: 119px;
    margin-bottom: 20px;
    background-color: #414141;
    width: 119px;
    border: none;
    margin: -1px -1px 0 0;
    padding: 0;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
  }
`;

const Comment = styled.div`
  width: 980px;
  margin: 0 auto;
  .Comment1 {
    padding-top: 30px;
    display: block;
    align-items: center;
    margin-bottom: 8px;
    /* width: 100%; */
  }
  .CommentHeader {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    width: 100%;
  }
  .sortright {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .sortList{
    display: flex;
    position: relative;
    margin-left: 5px;
    float: right;
    list-style: none;
    margin: 0;
    padding: 0;
    li{
      margin-left: 15px;
    }
  }
`;

const ReviewComent = styled.ul`
    margin: 0;
    padding: 0;
    li{
      border-color: #ccc;
      position: relative;
      padding: 20px 0 15px 68px;
      border-top: 1px solid #eee;
    }
    .img{
    display: block;
    position: absolute;
    top: 15px;
    left: 10px;
    width: 42px;
    height: 42px;
  }
  img{
    width: 42px;
    height: 42px;
  }
`;
const ReviewTopInfo = styled.div`
  display: block;
  position: relative;
  margin-bottom: 6px;
  span{
    display: block;
    font-size: 14px;
    padding-bottom: 8px;
  }
  .btn_good{
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 12px;
    line-height: 24px;
    padding: 5px;
    cursor: pointer;
  }
`;
const ReviewInfo = styled.div`

`

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
  onPublish,
  content,
  onChange,
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

  const handleRate = (rating) => {
    console.log("별점:", rating);
    // 여기에 별점을 처리하는 로직을 추가하세요.
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
            <div className="comment">
              <Title>
                <div className="starInfo">
                  <div className="starInfo1">
                    <Star>
                      <StarRating onRate={handleRate} />
                    </Star>
                    <img src="/temp_reviewcharacterbig_01.png" />
                  </div>
                  <div>영화 관람 후 관람평 작성 시 L.POINT 50P 적립</div>
                </div>
                <InputBox>
                  <div className="review-write-box">
                    <textarea onChange={onChange} value={content} placeholder="평점 및 영화 관람평을 작성해 주세요. (최소 10글자 이상)"></textarea>
                    <span>
                      <strong>0</strong>/<em>220</em>
                    </span>
                  </div>
                  <button onClick={onPublish} >관람평 작성</button>
                </InputBox>
              </Title>
            </div>
            <Comment>
              <div className="Comment1">
                <div className="CommentHeader">
                  <div className="sortright">
                    <ul className="sortList">
                      <li>최신순</li>
                      <li>공감순</li>
                    </ul>
                  </div>
                </div>
                <ReviewComent>
                    <li>
                      <span className="img">
                        <img src="/temp_reviewcharacterbig_01.png" alt="" />
                      </span>
                      <ReviewTopInfo>
                        <span>이준영</span>
                        <span>2023.07.11 01:53</span>
                        <button className="btn_good">좋아요</button>
                      </ReviewTopInfo>
                      <div>asdfjlksdfj!</div>
                    </li>
                  
                </ReviewComent>
              </div>
            </Comment>
          </Reviews>
        )}
      </div>
      {isOpen && (
        <MovieVideoModal oncloseModal={oncloseModal} videos={videos} />
      )}
    </DetailContainer>
  );
};

export default MovieDetail;
