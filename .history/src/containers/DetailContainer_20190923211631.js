import React, { useState, useEffect } from 'react';
import { moviesApi } from "../api";


const DetailContainer = ({ match, id, }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const { movieData, setMovieData } = useState([]);


    const getMovieDetail = async (id) => {
        const { data : { results : movieDetail } } = await moviesApi.getDetail(id);
        console.log(movieDetail);
        setMovieData([...movieDetail]);
        setIsLoading(false);
    };


    return (
        <div>
            Detail Page{match.params.id}
        </div>
    )
    
}


export default Detail;