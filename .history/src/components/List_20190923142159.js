import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { moviesApi } from "../api"

const List = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [movies, setMovies] = useState([]);

    const popularList = async () => {
        const { data : { results : result } } = await moviesApi.popular();
        console.log(result);
        setMovies([...result]);
    };

    useEffect(()=>{
        
    });

    return (
        <>
            hahahaha
        </>        
    )
}

export default List;