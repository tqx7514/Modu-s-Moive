import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import axios from '../../../node_modules/axios/index';
import MovieList from '../../containers/movie/MovieContainer';

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

  ${({ active }) => active && css`
    background: white;
  `}
`;

const AreaUl = styled.ul`
    display: flex;
    height: calc(100% - 116px);
`
const AreaLi = styled.li`
    width: 50%;
    height: 100%;
    background: #f5f5f5;
    overflow-y: scroll;
`;

const StepFirst = () => {
    const [click, setClick] = useState(false);
    
    const handleCinemaBtnClick = () => {
        setClick((prevState) => !prevState)
    }

    const handleListClick = (e) => {
        e.preventDefault();
    }

    const [cinemaArea, setCinemaArea] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:3005/ticket/cinema');
                setCinemaArea(response.data);
            } catch(e){
                console.error(e);
            }
        };
        fetchData();
    }, []);

    // const areaGrade = cinemaArea.filter((grade) => )
    
    return (
            <FirstContents>
                <StepArea>
                    <Title>영화관</Title>
                    <div style={{display: 'flex'}}>
                        <CinemaBtn active={!click} onClick={handleCinemaBtnClick}>전체</CinemaBtn>
                        <CinemaBtn active={click} onClick={handleCinemaBtnClick} style={{background: "white"}}>스페셜관</CinemaBtn>
                    </div>
                    <AreaUl>
                        <AreaLi style={{overflow: 'inherit'}}>
                        <ul>
                            <li>
                                <a href="#" onClick={handleListClick}>MY 영화관<span>()</span></a>
                            </li>
                            <li>
                                <a href="#" onClick={handleListClick}>서울<span>()</span></a>
                            </li>
                            <li>
                                <a href="#" onClick={handleListClick}>경기/인천<span>()</span></a>
                            </li>
                            <li>
                                <a href="#" onClick={handleListClick}>충청/대전<span>()</span></a>
                            </li>
                            <li>
                                <a href="#" onClick={handleListClick}>전라/광주<span>()</span></a>
                            </li>
                            <li>
                                <a href="#" onClick={handleListClick}>경북/대구<span>()</span></a>
                            </li>
                            <li>
                                <a href="#" onClick={handleListClick}>경남/부산/울산<span>()</span></a>
                            </li>
                            <li>
                                <a href="#" onClick={handleListClick}>강원<span>()</span></a>
                            </li>
                            <li>
                                <a href="#" onClick={handleListClick}>제주<span>()</span></a>
                            </li>
                        </ul>
                        </AreaLi>
                        <AreaLi style={{background: 'white'}}>
                        <ul>
                            {cinemaArea.map((cinema) => (
                                <li key={cinema.cinema_num}>
                                    <a href="#">{cinema.cinema}</a>
                                </li>
                            ))}
                        </ul>
                        </AreaLi>
                    </AreaUl>
                </StepArea>
                <StepCinema>
                    <Title>영화 선택</Title>                  
                </StepCinema>
                <StepDateTime>
                    <Title style={{borderRight: 0}}>2023-06-26(오늘)</Title>
                </StepDateTime>
            </FirstContents>
    );
};

export default StepFirst;