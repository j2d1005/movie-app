import React, { useState, useEffect } from 'react';
import { moviesApi } from "../api";

import Detail from "../components/Detail"


const DetailContainer = ({ match }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ movieData, setMovieData ] = useState([]);
    const movieId = match.params.id

    const getMovieDetail = async () => {
        const movieDetail = await moviesApi.getDetail(movieId);
        // console.log(movieDetail.data);
        setMovieData([movieDetail.data]);
        setIsLoading(false);
    };

    useEffect(()=>{
        getMovieDetail();
    }, []); // [] 해줘야 한번만 실행한다.

    return (
            <Detail 
                isLoading = {isLoading}
                movieData = {movieData}
                movieId = {movieId}
            />
    )
    
}


export default DetailContainer;