import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Text = styled.p`
   color:#fff;
`;

const NoMovies = ({ path }) => {
    let [message, setMessage] = useState('');
    
    useEffect(()=>{
        if( path === '/now_playing' || path === '/upcoming' || path === '/top_rated' || path === '/popular' ){ // 라우터별로 desc를 다르게 넘김 
            setMessage('영화가 없습니다.');
        }else if( path === '/search' ){
            setMessage('검색 결과가 없습니다.');
        }
    }, []);

    return (
        <Text>
            영화가 없습니다.
        </Text>
    )
    
}


export default NoMovies;