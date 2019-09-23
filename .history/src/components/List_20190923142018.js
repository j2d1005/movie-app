import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { movieApi } from "../api"

const List = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [movies, setMovies] = useState([]);

    const popularList = async () => {
        const { data : { results : result } } = await movieApi.popular();
        console.log(result);
        setMovies([...result]);
    };

    return (
        <>
            hahahaha
        </>        
    )
}

export default List;