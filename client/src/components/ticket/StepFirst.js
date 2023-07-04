import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import axios from '../../../node_modules/axios/index';
import {MdDensityMedium, MdWindow} from 'react-icons/md' ;

const FirstContents = styled.div`
    display: flex;
    width: calc(100% - 76px);
    height: 100%;
`;

const StepArea = styled.div`
    width: 30%;
    height: 100%;
    div{
        display: flex;
    }
`;
const StepCinema = styled.div`
    width: 30%;
    height: 100%;
`;
const StepDateTime = styled.div`
    width: 40%;
    height: 100%;
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
    border-right: 1px solid #222;
`;

const CinemaBtn = styled.button`
  display: block;
  width: 50%;
  height: 61px;
  text-align: center;
  background: #f5f5f5;
  color: ${({ active }) => (active ? '#000' : '#7f7f7f')};
  border: none;
  border-bottom: ${({ active }) => (active ? '2px solid #000' : '1px solid #ccc')};
  transition: border .1s ease-in-out;
  cursor: pointer;
  border-right: 1px solid #ddd;
  &:first-child{
    border-right: none;
  }

  ${({ active }) => active && css`
    background: white;Invalid Date
  `}
`;

const AreaUl = styled.ul`
    display: flex;
    height: calc(100% - 116px);
    border-right: 1px solid #ddd;
`;
const AreaLi = styled.li`
    width: 50%;
    height: 100%;
    background: #f5f5f5;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 5px;
    }
    &::-webkit-scrollbar-thumb{
        background: none;
        border-radius: 5px;
    }
    &:hover{
        &::-webkit-scrollbar-thumb{
            background: #888;
            border-radius: 5px;
        transition: all .3s ease;

        }
    }
`;

const AreaItem = styled.li`
    padding: 10px 16px;
    cursor: pointer;
    font-size: 13px;
    &.movie_list{
        display: flex;
        align-items: center;
    }
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
        &.age{
            width: 22px;
            height: 22px;
            display: inline-block;
        }
        &.age_all{
            background: url('/age_all.png') no-repeat;
        }
        &.age_12{
            background: url('/age_12.png') no-repeat;
        }
        &.age_15{
            background: url('/age_15.png') no-repeat;
        }
        &.age_19{
            background: url('/age_19.png') no-repeat;
        }
    }
`;

const MovieUl = styled.ul`
    height: calc(100% - 116px);
    border-right: 1px solid #ddd;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 5px;
    }
    &::-webkit-scrollbar-thumb{
        background: none;
        border-radius: 5px;
    }
    &:hover{
        &::-webkit-scrollbar-thumb{
            background: #888;
            border-radius: 5px;
        transition: all .3s ease;

        }
    }
`

const FilterList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 61px;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ddd;
`;



const StepFirst = ({region, cinema, movie, onSelectRegion}) => {
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [selectedCinema, setSelectedCinema] = useState('영화관');
    const [titleMovie, setTitleMovie] = useState('영화 선택');
    const [SelectedMovie, setSelectedMovie] = useState(null);

    const handleSelectRegion = (grade) => {
        setSelectedRegion(grade);
        onSelectRegion(grade);
    };
    useEffect(() => {
        setSelectedRegion(1);
    }, []);
    const handleSelectCinema = (e, cinema) => {
        setSelectedCinema(cinema);
    }
    const handleSelectMovie = (e, movie) => {
        setTitleMovie(movie);
        setSelectedMovie(movie);
    }


    return (
            <FirstContents>
                <StepArea>
                    <Title>{selectedCinema}</Title>
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
                                className={selectedRegion === r.grade ? 'selected' : ''}
                                onClick={() => handleSelectRegion(r.grade)}
                            >
                                {r.region}<span>({r.cinemas.length})</span>
                            </AreaItem>
                            ))}
                        </ul>
                        </AreaLi>
                        <AreaLi style={{background: 'white'}}>
                        <ul>
                            {cinema && cinema.map((c) => (
                                <AreaItem 
                                    key={c.cinema_num} 
                                    onClick={(e) => handleSelectCinema(e, c.cinema)}  
                                    className={selectedCinema === c.cinema ? 'selected' : ''}
                                >
                                    {c.cinema}
                                </AreaItem>
                            ))}
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
                    <MovieUl style={{display:'block'}}>
                        {movie.map((m) => (
                            <AreaItem 
                                key={m.movie_num}
                                onClick={(e) => handleSelectMovie(e, m.movie_name)}
                                className={`${SelectedMovie === m.movie_name ? 'selected' : ''} movie_list`}
                            >
                                <span className={`${m.age === 'all' ? 'age_all' : (m.age === '12' ? 'age_12' : (m.age === '15' ? 'age_15' : (m.age === '19' ? 'age_19' : '')))} age`}></span>{m.movie_name}

                            </AreaItem>
                        ))}
                    </MovieUl>
                </StepCinema>
                <StepDateTime>
                    <Title>2023-06-26(오늘)</Title>
                </StepDateTime>
            </FirstContents>
    );
};

export default StepFirst;