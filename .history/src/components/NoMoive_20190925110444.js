import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Text = styled.p`
   color:#fff;
`;

const NoMovies = ({ path }) => {
    let [message, setMessage] = useState('');
    
    useEffect(()=>{
        if( path === '/now_playing' ){ // 라우터별로 desc를 다르게 넘김 
            setCategory('Now Playing Movies');
        }else if( path === '/upcoming' ){
            setCategory('UpComing Movies');
        }else if( path === '/top_rated' ){
            setCategory('Top Rated Movies');
        }else if( path === '/popular' ){
            setCategory('Popular Movies');
        }else if( path === '/search' ){
            setCategory(`Search By ${searched}`);
        }
    }, []);

    return (
        <Text>
            영화가 없습니다.
        </Text>
    )
    
}


export default NoMovies;