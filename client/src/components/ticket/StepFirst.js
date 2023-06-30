import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import axios from '../../../node_modules/axios/index';
import {MdDensityMedium, MdWindow} from 'react-icons/md' ;
import { useSelector } from 'react-redux';
const FirstContents = styled.div`
    display: flex;
    width: calc(100% - 76px);
    height: 100%;
    background: aqua;
`;

const StepArea = styled.div`
    width: 30%;
    height: 100%;
    border: 1px solid;
    div{
        display: flex;
    }
`;
const StepCinema = styled.div`
    width: 30%;
    height: 100%;
    border: 1px solid;
`;
const StepDateTime = styled.div`
    width: 40%;
    height: 100%;
    border: 1px solid;
    background: #fff;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 55px;
    color: #fff;
    background: #000;
    font-size: 18px;
    font-weight: 400;
    vertical-align: middle;
    border-right: 1px solid #888;
`;

const CinemaBtn = styled.button`
  display: block;
  width: 50%;
  height: 61px;
  text-align: center;
  background: #f5f5f5;
  color: ${({ active }) => (active ? '#000' : '#7f7f7f')};
  border: none;
  border-bottom: ${({ active }) => (active ? '2px solid #000' : '1px solid #ddd')};
  transition: border .1s ease-in-out;
  cursor: pointer;

  ${({ active }) => active && css`
    background: white;
  `}
`;

const AreaUl = styled.ul`
    display: flex;
    height: calc(100% - 116px);
`;
const AreaLi = styled.li`
    width: 50%;
    height: 100%;
    background: #f5f5f5;
    overflow-y: scroll;
`;

const AreaItem = styled.li`
    padding: 10px 16px;
    cursor: pointer;
    font-size: 13px;
    &.selected{
        position: relative;
        background: #fff;
        &:after{
            content: '';
            position: absolute;
            right: 5px;
            top: 2px;
            background: url('/check.png') no-repeat;
            width: 18px;
            height: 14px;
        }
    }
    span{
        font-size: 11px;
        color: #666;
    }
`;

const FilterList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 61px;
    border-bottom: 1px solid #ddd;
`;



const StepFirst = ({region, selected,onSelectRegion}) => {
    console.log("11111111->",region);
    const [titleCinema, setTitleCinema] = useState('영화관');
    const [movies, setMovies] = useState([]);
    const [titleMovie, setTitleMovie] = useState('영화 선택');
    const [SelectedMovie, setSelectedMovie] = useState(null);


    const handleSelectMovie = (e, movie) => {
        setTitleMovie(movie);
        setSelectedMovie(movie);
    }

    useEffect(() => {
        const showMovie = async () => {
            const response = await axios.get('http://localhost:3005/ticket/movie');
            setMovies(response.data)
        }
        showMovie();
    }, [])


    return (
            <FirstContents>
                <StepArea>
                    <Title>{titleCinema}</Title>
                    <div>
                        <CinemaBtn>전체</CinemaBtn>
                        <CinemaBtn style={{background: "white"}}>스페셜관</CinemaBtn>
                    </div>
                    <AreaUl>
                        <AreaLi style={{overflow: 'inherit'}}>
                        <ul>
                            {region && region.map((r) => (
                            <AreaItem 
                                key={r.grade}
                                href="#none" 
                                className={selected === r.grade ? 'selected' : ''}
                                onClick={() => onSelectRegion(r.grade)}
                            >
                                {r.region}
                            </AreaItem>
                            ))}
                        </ul>
                        </AreaLi>
                        <AreaLi style={{background: 'white'}}>
                        <ul>
                            {/* {cinema && cinema.map((c) => (
                                <AreaItem 
                                    key={c.cinema_num} 
                                >
                                    {c.cinema}
                                </AreaItem>
                            ))} */}
                        </ul>
                        </AreaLi>
                    </AreaUl>
                </StepArea>
                <StepCinema style={{background: '#f5f5f5'}}>
                    <Title>{titleMovie}</Title>
                    <FilterList>
                        <select>
                            <option value={'예매순'}>예매순</option>
                            <option value={'관객순'}>관객순</option>
                            <option value={'평점순'}>평점순</option>
                            <option value={'예정작'}>예정작</option>
                        </select>
                        <div>
                            <MdDensityMedium/>
                            <MdWindow/>
                        </div>
                    </FilterList>
                    <ul>
                        {movies.map((movie) => (
                            <AreaItem 
                                key={movie.movie_num}
                                onClick={(e) => handleSelectMovie(e, movie.movie_name)}
                                className={SelectedMovie === movie.movie_name ? 'selected' : ''}
                            >
                                {movie.movie_name}
                            </AreaItem>
                        ))}
                    </ul>
                </StepCinema>
                <StepDateTime>
                    <Title style={{borderRight: 0}}>2023-06-26(오늘)</Title>
                </StepDateTime>
            </FirstContents>
    );
};

export default StepFirst;