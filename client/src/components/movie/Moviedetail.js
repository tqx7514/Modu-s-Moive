import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        width: 250px;
        height: 300px;
    }
`;
const DetailContent = styled.div`
   display: flex;
   div div{
    display: flex;
    
   } 
`;

const Video = styled.div`
    display: flex;
    justify-content: center;
    iframe {
        display: flex;
    }
`



const MovieDetail = () => {
    const [movies, setMovies] = useState(null);
    const [videos, setVideos] = useState([]);
    const [images, setImages] = useState([]);
    const [credits, setCredit] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko`);
                setMovies(response.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchMovie();
    }, [id]);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`)
                setImages(response.data.posters);
            } catch (e) {
                console.log(e)
            }
        }
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
        }
        fetchVideo();
    }, [id]);

    useEffect(() => {
        const fetchCredit = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`);
                setCredit(response.data.cast);
            } catch (e) {
                console.log(e)
            }
        }
        fetchCredit();
    }, [id]);

    if (!movies) {
        return <div>Loading...</div>;
    }
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

    return (
        <DetailContainer>
            <div>
                {images.map((image) => (
                    <img src={IMG_BASE_URL + image.file_path} />
                ))}
                <DetailContent>
                    <img src={IMG_BASE_URL + movies.poster_path} />
                    <div>
                        <h2>{movies.title}</h2>
                        <p>평점: {movies.vote_average}</p>
                        <hr />
                        <div>
                        <p>장르:</p>
                        {movies.genres.map((genre) => (
                            <p>{genre.name}</p>
                        ))}
                        </div>
                        <p>개봉일: {movies.release_date}</p>

                    </div>
                </DetailContent>
                <h1>영화정보</h1>
                <p>{movies.overview}</p>
                <hr />
                <h1>트레일러</h1>
                <Video>
                    {videos.map((video) => (
                        <div key={video.key}>
                            <iframe
                                title={video.name}
                                width="300"
                                height="200"
                                src={`https://www.youtube.com/embed/${video.key}`}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </Video>
            </div>
            {/* {credits.map((credit) => (
                <div>
                    <img src={IMG_BASE_URL + credit.profile_path} />
                    <h4>{credit.name}</h4>
                </div>
            ))} */}
        </DetailContainer>
    );
}

export default MovieDetail;