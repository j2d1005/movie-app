import React, { useState } from 'react';
import styled from "styled-components";

import Loading from './Loading'
import Card from './Card';

const Container = styled.div`
    width:100%;
    max-width:1024px;
    margin:0 auto;
    .category {
        padding:30px 0;
        font-size:30px;
        text-align:center;
    }
    .list{
        display:block;
        :after{
            content:"";display:block;clear:both;
        }
    }
`;


const List = ({ isLoading, movies, category, path }) => {

    let [ desc, setDesc ] = useState(''); // 라우터에 따라 desc값을 다르게 주고 싶어서 사용
                
    if(path === '/' || path === '/UpComing'){
        setDesc=(movie.release_date);
    }else if(path === '/TopRated'){
        setDesc=(movie.vote_average);
    }else if(path === '/Popular'){
        setDesc=(movie.popularity);
    }
    return (
        <>
            {isLoading
                ? <Loading />
                : 
                <Container>
                    <h2 className="category">{category}</h2>
                    <ul className="list">
                        {movies.map( movie => {                            
                            return (
                                <Card 
                                key = {movie.id}
                                id = {movie.id}
                                title = {movie.title}
                                desc = {desc}
                                poster = {movie.poster_path}
                                // date = {movie.release_date} // now_playing일때만 주고싶음
                                />
                            )
                        })}
                    </ul> 
                </Container>                
            }
        </>
    )
}

export default List;