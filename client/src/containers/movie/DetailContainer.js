import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Moviedetail from '../../components/movie/Moviedetail';
import {readDetail, unloadDetail} from '../../modules/moviedetail';

const DetailContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const moviedetail = useSelector(state => state.moviedetail.readDetail);
    const images = useSelector(state => state.images.imageDetail);

    useEffect(() => {
        dispatch(readDetail(id));
        return () => {
            dispatch(unloadDetail());
        };
    }, [dispatch, id]);

    return <Moviedetail moviedetail={moviedetail} />
}
export default DetailContainer;