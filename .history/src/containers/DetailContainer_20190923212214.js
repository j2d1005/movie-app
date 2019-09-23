import React, { useState, useEffect } from 'react';
import { moviesApi } from "../api";


const DetailContainer = ({ match }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const { movieData, setMovieData } = useState([]);
    const movieId = match.params.id

    const getMovieDetail = async () => {
        const movieDetail = await moviesApi.getDetail(movieId);
        console.log(movieDetail);
        setMovieData([...movieDetail]);
        setIsLoading(false);
        console.log(movieData);
    };

    useEffect(()=>{
        getMovieDetail();
    });

    return (
        <div>
            Detail Page{match.params.id}

        </div>
    )
    
}


export default DetailContainer;