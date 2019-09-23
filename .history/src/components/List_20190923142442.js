import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { moviesApi } from "../api"

const List = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(3);

    const popularList = async (1) => {
        const { data : { results : result } } = await moviesApi.popular(1);
        console.log(result);
        setMovies([...result]);
    };

    useEffect(()=>{
        popularList(1);
    });

    return (
        <>
            hahahaha
        </>        
    )
}

export default List;