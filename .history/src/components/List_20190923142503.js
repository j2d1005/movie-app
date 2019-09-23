import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { moviesApi } from "../api"

const List = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const popularList = async (page) => {
        const { data : { results : result } } = await moviesApi.popular(page);
        console.log(result);
        setMovies([...result]);
    };

    useEffect(()=>{
        popularList(page);
    });

    return (
        <>
            hahahaha
        </>        
    )
}

export default List;