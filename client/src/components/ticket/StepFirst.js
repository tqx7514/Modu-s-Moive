import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import axios from '../../../node_modules/axios/index';
import {MdDone} from 'react-icons/md' ;

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

const AreaItem = styled.li`
    padding: 10px; 16px;
    cursor: pointer;
    &.selected{
        position: relative;
        background: #fff;
        &:after{
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            background: url('./check.png') no-repeat;
            width: 10px;
            height: 5px;
        }
    }
`

const StepFirst = () => {
    const [click, setClick] = useState(false);
    const [regions, setRegions] = useState([]);
    const [cinemas, setCinemas] = useState([]);
    const [cine, setCine] = useState([]);
    const [Selected, setSelected] = useState(null);
    
    
    const handleCinemaBtnClick = () => {
        setClick((prevState) => !prevState)
    };

    const handleListClick = async (e, grade) => {
        e.preventDefault();
        setSelected(grade);
        console.log('111111111111111111111111',Selected);
        try{
            const response = await axios.get(`http://localhost:3005/ticket/cinema?grade=${grade}`);
            setCinemas(response.data);
        } catch(e){
            console.error(e);
        }
    };

    useEffect(() => {
        const showRegion = async () => {
            try{
                const response = await axios.get('http://localhost:3005/ticket/region');
                setRegions(response.data.region);
                setCine(response.data.cinema)
            } catch(e){
                console.error(e);
            }
        };
        showRegion();
    }, []);
    useEffect(() => {
        const showCinema = async () => {
            try{
                const response = await axios.get('http://localhost:3005/ticket/cinema');
                setCinemas(response.data);
            } catch(e){
                console.error(e);
            }
        };
        showCinema();
    }, []);

    useEffect(()=>{
        const firstSelect = async()=>{
            const response = await axios.get(`http://localhost:3005/ticket/cinema?grade=1`);
            setCinemas(response.data);
            setSelected(1);
        }
        firstSelect();
    },[])
    return (
            <FirstContents>
                <StepArea>
                    <img src="check.png"/>
                    <Title>영화관</Title>
                    <div style={{display: 'flex'}}>
                        <CinemaBtn active={!click} onClick={handleCinemaBtnClick}>전체</CinemaBtn>
                        <CinemaBtn active={click} onClick={handleCinemaBtnClick} style={{background: "white"}}>스페셜관</CinemaBtn>
                    </div>
                    <AreaUl>
                        <AreaLi style={{overflow: 'inherit'}}>
                        <ul>
                            {regions.map((region) => (
                                <AreaItem 
                                    key={region.grade}
                                    href="#none" 
                                    onClick={(e) => handleListClick(e, region.grade)}
                                    className={Selected === region.grade ? 'selected' : ''}
                                    >
                                        {region.region} <span>({cine.filter(cinema => cinema.grade === region.grade).length})</span>
                                </AreaItem>
                            ))}
                        </ul>
                        </AreaLi>
                        <AreaLi style={{background: 'white'}}>
                        <ul>
                            {cinemas.map((cinema) => (
                                <AreaItem key={cinema.cinema_num}>
                                    {cinema.cinema}
                                </AreaItem>
                            ))}
                        </ul>
                        </AreaLi>
                    </AreaUl>
                </StepArea>
                <StepCinema style={{background: '#f5f5f5'}}>
                    <Title>영화 선택</Title>
                </StepCinema>
                <StepDateTime>
                    <Title style={{borderRight: 0}}>2023-06-26(오늘)</Title>
                </StepDateTime>
            </FirstContents>
    );
};

export default StepFirst;