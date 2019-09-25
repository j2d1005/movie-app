import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Text = styled.p`
   color:#fff;
`;

const NoMovies = ({ path }) => {
    let [message, setMessage] = useState('');
    
    useEffect(()=>{
        if( path === '/now_playing' ){ // 라우터별로 desc를 다르게 넘김 
            setMessage('Now Playing Movies');
        }else if( path === '/upcoming' ){
            setMessage('UpComing Movies');
        }else if( path === '/top_rated' ){
            setMessage('Top Rated Movies');
        }else if( path === '/popular' ){
            setMessage('Popular Movies');
        }else if( path === '/search' ){
            setMessage(`Search By ${}`);
        }
    }, []);

    return (
        <Text>
            영화가 없습니다.
        </Text>
    )
    
}


export default NoMovies;