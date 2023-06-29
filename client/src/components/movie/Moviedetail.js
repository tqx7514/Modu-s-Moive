import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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

const MovieDetail = () => {
    const [movies, setMovies] = useState(null);
    const [videos, setVideos] = useState([]);
    const [images, setImages] = useState([]);
    const [credits, setCredits] = useState({ crew: [], cast: [] });
    
    let { id } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko`);
                setMovies(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchMovie();
    }, [id]);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`);
                setImages(response.data.posters);
            } catch (e) {
                console.log(e);
            }
        };
        fetchImage();
    }, [id]);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko`);
                const fetchedVideos = response.data.results;
                if (fetchedVideos.length > 0) {
                    setVideos(fetchedVideos.slice(1, 6));
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchVideo();
    }, [id]);

    useEffect(() => {
        const fetchCredit = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`);
                setCredits({
                    crew: response.data.crew,
                    cast: response.data.cast
                });
            } catch (e) {
                console.log(e);
            }
        };
        fetchCredit();
    }, [id]);

    if (!movies) {
        return <div>Loading...</div>;
    }

    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

    return (
        <DetailContainer>
            <div>
                <ImageCarousel images={images} />
                <DetailContent>
                    <img src={IMG_BASE_URL + movies.poster_path} alt={movies.title} /> 
                    <div>
                        <h2>{movies.title}</h2>
                        <p>평점: {movies.vote_average}</p>
                        <p>좋아요: {movies.vote_count}</p>
                        <hr />
                        <div>
                            <p>장르:</p>
                            {movies.genres.map((genre) => (
                                <p key={genre.id}>{genre.name}</p>
                            ))}
                            <hr/>
                            <p>개봉일: {movies.release_date}</p>
                            <hr/>
                            <p>{movies.runtime}분</p>
                        </div>
                        <div>
                        <p>감독:</p>
                        {credits.crew.map((credit) => {
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
                <p>{movies.overview}</p>
                <h1>트레일러</h1>
                <Video>
                    <VideoCarousel videos={videos} />
                </Video>
                <h1>배우</h1>
                <hr />
                <Talent>
                    <ul>
                        {credits.cast.map((credit) => (
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
