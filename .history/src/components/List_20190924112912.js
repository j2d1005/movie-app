import React from 'react';
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
    return (
        <>
            {isLoading
                ? <Loading />
                : 
                <Container>
                    <h2 className="category">{category}</h2>
                    <ul className="list">
                        {movies.map( movie => {            
                            console.log(path)
                            // const desc ={
                            //     if(path === '/' || path === '/Upcoming'){
                            //         desc = movie.release_date
                            //     }else if(path === '/TopRated'){
                            //         desc = movie.vote_average 
                            //     }else if(path === '/Popular'){
                            //         desc = movie.popularity
                            //     }
                            // }

                            return (
                                <Card 
                                key = {movie.id}
                                id = {movie.id}
                                title = {movie.title}
                                // desc = {desc}
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