import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Text = styled.p`
   color:#fff;
`;

const NoMovies = ({ path }) => {
    let [message, setMessage] = useState('');
    
    if( path === '/now_playing' || path === '/upcoming' ){ // 라우터별로 desc를 다르게 넘김 
        desc = movie.release_date
    }else if( path === '/top_rated' ){
        desc = movie.vote_average 
    }else if( path === '/popular' ){
        desc = movie.popularity
    }else if( path === '/search' ){
        desc = null
    }

    return (
        <Text>
            영화가 없습니다.
        </Text>
    )
    
}


export default NoMovies;