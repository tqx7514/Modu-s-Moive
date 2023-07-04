import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Moviedetail from '../../components/movie/Moviedetail';
import {readDetail, imageDetail, videoDetail, creditDetail} from '../../modules/moviedetail';

const DetailContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {moviedetail, images, videos, credits, credit, genres} = useSelector((state) => ({
        moviedetail: state.moviedetail.moviedetail,
        genres: state.moviedetail.moviedetail.genres,
        images: state.moviedetail.images,
        videos: state.moviedetail.videos,
        credit: state.moviedetail.credit,
        credits: state.moviedetail.credits,
    }));

    useEffect(() => {
        dispatch(readDetail(id));
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(imageDetail(id));
    },[dispatch, id]);

    useEffect(() => {
        dispatch(videoDetail(id));
    },[dispatch, id]);

    useEffect(() => {
        dispatch(creditDetail(id));
    },[dispatch, id]);

    return <Moviedetail moviedetail={moviedetail} images={images} videos={videos} credits={credits} credit={credit} genres={genres}/>
}
export default DetailContainer;