import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movie from '../../components/movie/Movie';
import { Link } from "react-router-dom";
import axios from 'axios';

const AppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const MovieList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR');
                setItems(response.data.results);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);



    return (
        <div>
            <h1>현재 상영작</h1>
            <h1>상영 예정작</h1>
            <AppContainer>
                {
                    items.map((item) => (
                        <Link to={`/detail/${item.id}`} key={item.id}>
                            <Movie
                                title={item.title}
                                poster_path={item.poster_path}
                                vote_average={item.vote_average}
                            />
                        </Link>
                    ))
                }
            </AppContainer>
        </div>
    )
}
export default MovieList;