import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { moviesApi } from "../api"

const List = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [movies, setMovies] = useState([]); // movie 안에 api 데이타 담는다
    const [page, setPage] = useState(1); // 1페이지만 보이게 하려고 

    const popularList = async (page) => {
        const { data : { results : popularMovie } } = await moviesApi.popular(page);
        console.log(movie);
        setMovies([...popularMovie]);
    };

    useEffect(()=>{
        popularList(page);
    }, [page]);

    return (
        <>
            hahahaha
        </>        
    )
}

export default List;