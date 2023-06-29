import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Movie from '../../components/movie/Movie';
import axios from 'axios';

const AppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`;

const CategoriesBlock = styled.div`
    display: flex;
`;

const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    ${props =>
        props.active && css`
            border-bottom: 2px solid black;
        `};

    & + & {
        margin-left: 1rem;
    }
`;

const categories = [
    {
        name: 'now_playing',
        text: '현재 상영작',
        api: 'https://api.themoviedb.org/3/movie/now_playing?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR'
    },
    {
        name: 'upcoming',
        text: '상영 예정작',
        api: 'https://api.themoviedb.org/3/movie/upcoming?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR'
    }
];

const MovieList = () => {
    const [items, setItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState('now_playing');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(categories.find(c => c.name === activeCategory).api);
                setItems(response.data.results);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [activeCategory]);

    const handleCategoryClick = (categoryName) => {
        setActiveCategory(categoryName);
    };

    return (
        <div>
            <CategoriesBlock>
                {categories.map(c => (
                    <Category key={c.name} onClick={() => handleCategoryClick(c.name)}>{c.text}</Category>
                ))}
            </CategoriesBlock>
            <AppContainer>
                {
                    items.map((item) => (
                        <Movie
                            title={item.title}
                            poster_path={item.poster_path}
                            vote_average={item.vote_average}
                            id={item.id}
                        />
                    ))
                }
            </AppContainer>
        </div>
    )
}
export default MovieList;