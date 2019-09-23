import React, { useState, useEffect } from 'react';
import { moviesApi } from "../api";

import Detail from "../components/Detail"


const DetailContainer = ({ match }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ movieData, setMovieData ] = useState(null);
    const movieId = match.params.id

    const getMovieDetail = async () => {
        const movieDetail = await moviesApi.getDetail(movieId);
        // console.log(movieDetail.data);
        setMovieData(movieDetail.data);
        setIsLoading(false);
    };

    useEffect(()=>{
        getMovieDetail();
    }, []); // [] 해줘야 한번만 실행한다.

    return (
        <div>
            Detail Page{movieId}
            {console.log(movieData)}
            <Detail 
                isLoading = {isLoading}
                movieData = {movieData}
            />

        </div>
    )
    
}


export default DetailContainer;