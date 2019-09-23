import React, { useState, useEffect } from 'react';
import { moviesApi } from "../api";


const DetailContainer = ({ match }) => {
    const getMovieDetail = async (id) => {
        const { data : { results : nowPlayingMovies } } = await moviesApi.getDetail(id);
        console.log(nowPlayingMovies);
        setMovies([...nowPlayingMovies]);
        setIsLoading(false);
    };


    return (
        <div>
            Detail Page{match.params.id}
        </div>
    )
    
}


export default Detail;