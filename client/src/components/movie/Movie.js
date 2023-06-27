import styled from "styled-components";
import Button from "../common/Button";
import {MdStarRate} from 'react-icons/md';


const MovieBlock = styled.div`
    width: 250px;
    margin: 16px;
    background-color: black;
    color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba( 0, 0, 0, 0.1);
    border: 1px solid black;
    
    img{
        max-width: 100%;
    }
`;
const MovieInfo = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    
    h4{
        margin: 0;
        font-size: 12px;
    }
    span{
        
        /* margin-left: 3px; */
    }
    
`;




const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280"
  
export default function Movie({ title, poster_path, vote_average}) {
    return (
        <div>
            
        <MovieBlock>
            <img src={IMG_BASE_URL + poster_path} alt="영화포스터"/>
            <MovieInfo>
                <h4>{title}</h4>
                <MdStarRate/><span>{vote_average}</span>
            </MovieInfo>
        </MovieBlock>
        </div>
    )
}