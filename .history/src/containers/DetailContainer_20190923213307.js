import React, { useState, useEffect } from 'react';
import { moviesApi } from "../api";


const DetailContainer = ({ match }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ movieData, setMovieData ] = useState();
    const movieId = match.params.id

    const getMovieDetail = async () => {
        const movieDetail = await moviesApi.getDetail(movieId);
        setMovieData(movieDetail.data);
        setIsLoading(false);
        console.log(movieData);
    };

    useEffect(()=>{
        getMovieDetail();
    }, []); // [] 해줘야 한번만 실행한다.

    return (
        <div>
            Detail Page{match.params.id}

        </div>
    )
    
}


export default DetailContainer;