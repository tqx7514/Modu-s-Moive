import styled from 'styled-components';
import React from 'react';
import Button from '../common/Button';
import ImageCarousel from '../common/ImageCarousel';
import VideoCarousel from '../common/VideoCarousel';

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
   div{
    margin: 20px;

   }
    div div {
    display: flex;
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
    li{
        margin: 10px;
    }
    

    img {
        width: 150px;
        height: 150px;
        border-radius: 70%;
    }
`;

const MovieDetail = ({moviedetail, images, videos, credits, credit, genres}) => {

    if (!moviedetail) {
        return <div>Loading...</div>;
    }

    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

    return (
        <DetailContainer>
            <div>
                <ImageCarousel images={images} />
                <DetailContent>
                    <img src={IMG_BASE_URL + moviedetail.poster_path} alt={moviedetail.title} /> 
                    <div>
                        <h2>{moviedetail.title}</h2>
                        <p>평점: {moviedetail.vote_average}</p>
                        <p>좋아요: {moviedetail.vote_count}</p>
                        <hr />
                        <div>
                            <p>장르:</p>
                            {genres && genres.map((genre) => (
                                <p key={genre.id}>{genre.name}</p>
                            ))}
                            <hr/>
                            <p>개봉일: {moviedetail.release_date}</p>
                            <hr/>
                            <p>{moviedetail.runtime}분</p>
                        </div>
                        <div>
                        <p>감독:</p>
                        {credit &&credit.map((credit) => {
                            if (credit.job === "Director") {
                                return <p key={credit.id}>{credit.name}</p> 
                            }
                            return null;
                        })}
                        </div>
                        <Button>예매하기</Button>
                    </div>
                </DetailContent> 
                <button>영화정보</button>
                <button>평점 및 관람평</button>
                <hr/>
                <p>{moviedetail.overview}</p>
                <h1>트레일러</h1>
                <Video>
                    <VideoCarousel videos={videos} />
                </Video>
                <h1>배우</h1>
                <hr />
                <Talent>
                    <ul>
                        {credits && credits.map((credit) => (
                            <li key={credit.id}>
                                {credit.profile_path && credit.known_for_department === "Acting" && (
                                    <>
                                        <img src={IMG_BASE_URL + credit.profile_path} alt={credit.name} />
                                        <h4>{credit.name}</h4>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </Talent>
            </div>
        </DetailContainer>
    );
};

export default MovieDetail;
