import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { AreaItem } from './SelectMovie';


const BtnWrap = styled.div`
  display: flex;
`;
const FilterBtn = styled.button`
  position: relative;
  width: calc(100% / 6);
  height: 50px;
  background: none;
  border: none;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: .3s ease;
  &.selected{
    border-bottom: 2px solid #000;
    &:after{
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #000;
    }
  }
`;

const TimeWrap = styled.ul`

`

const SelectTime = () => {

  const [selectedFilter, setSelectedFilter] = useState('전체');
  const handleFilter = (e) => {
    setSelectedFilter(e.target.textContent);
  }
  const {data, movie} = useSelector(({stepfirst}) => stepfirst);
  console.log('selectData =>', movie);
  // console.log('selectFilter =>',selectedFilter)
  return (
    <>
      <BtnWrap>
        <FilterBtn
          onClick={handleFilter}
          className={selectedFilter === '전체' ? 'selected' : ''}
        >
          전체
        </FilterBtn>
        <FilterBtn
          onClick={handleFilter}
          className={selectedFilter === '스페셜관' ? 'selected' : ''}
        >
          스페셜관
        </FilterBtn>
        <FilterBtn
          onClick={handleFilter}
          className={selectedFilter === 'Atmos' ? 'selected' : ''}
        >
          Atmos
        </FilterBtn>
        <FilterBtn
          onClick={handleFilter}
          className={selectedFilter === '13시 이후' ? 'selected' : ''}
        >
          13시 이후
        </FilterBtn>
        <FilterBtn
          onClick={handleFilter}
          className={selectedFilter === '19시 이후' ? 'selected' : ''}
        >
          19시 이후
        </FilterBtn>
        <FilterBtn
          onClick={handleFilter}
          className={selectedFilter === '심야' ? 'selected' : ''}
        >
          심야
        </FilterBtn>
      </BtnWrap>
      <TimeWrap>
      {data.cinema && data.movie && (
          <AreaItem className='movie_list'>
            <span
                className={`${
                  data.movie.age === "all"
                    ? "age_all"
                    : data.movie.age === "12"
                    ? "age_12"
                    : data.movie.age === "15"
                    ? "age_15"
                    : data.movie.age === "19"
                    ? "age_19"
                    : ""
                } age`}
            ></span>
            {data.movie.movie_name}
          </AreaItem>
        )}
      </TimeWrap>
    </>
  );
}

export default SelectTime;