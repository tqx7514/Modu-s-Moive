import React, { useState } from 'react';
import styled from "styled-components";
import Button from "../common/Button";
import { MdStarRate } from 'react-icons/md';
import { Link } from "react-router-dom";

const MovieBlock = styled.div`
    width: 250px;
    margin: 16px;
    background-color: white;
    color: black;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba( 0, 0, 0, 0.1);
    border: 1px solid black;
    position: relative;

    Button{
        display: flex;
        text-align: center;
        justify-content: center;
        background-color: inherit;
        border: 1px solid white;
        margin-bottom: 10%;

        &:hover{
            background-color: inherit;
        }
    
    }
    
    img{
        max-width: 100%;
        position: relative;
    }
`;
const MovieInfo = styled.div`
    display: block;
    padding: 20px;
    text-align: center;
    align-items: center;
    
    h4{
        margin: 0; 
    }
`;

const Movieimg = styled.div`
    background: rgba(0,0,0,0.7);
    width: 248px;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    

    div{
        margin-top: 60%;
        margin-left: 30%;
        }
`;

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280"

const Movie = ({ title, poster_path, vote_average, id }) => {


    const [showButton, setShowButton] = useState(false);

    const handleMouseEnter = () => {
        setShowButton(true);
    };

    const handleMouseLeave = () => {
        setShowButton(false);
    };

    return (
        <div className='movie-poster' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <MovieBlock>
                <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
                {showButton && (
                    <Movieimg showButton={String(showButton)}>
                        <div>
                            <Link to={'/ticket'}>
                            <Button>예매하기</Button>
                            </Link>
                            <Link to={`/detail/${id}`}>
                                <Button>상세정보</Button>
                            </Link>
                        </div>
                    </Movieimg>
                )}
                <MovieInfo>
                    <h4>{title}</h4>
                    <MdStarRate /><span>{vote_average}</span>
                </MovieInfo>
            </MovieBlock>
        </div>
    )
}

export default Movie;