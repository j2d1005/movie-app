import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Card from './Card';

const Container = styled.div`
    width:100%;
    max-width:1024px;
    margin:0 auto;
`;


const List = ({ isLoading, movies }) => {
    return (
        <Container>
            {isLoading
                ? <div><span>로딩중..</span></div>
                : 
                <div className="list">
                    {movies.map( movie => {
                        console.log(movie);
                        return (
                            <Card 
                            key = {movie.id}
                            title = {movie.title}
                            popularity = {movie.popularity}
                            poster = {movie.poster_path}
                            />
                        )
                    })}
                </div> 
            }
        </Container>
    )
}

export default List;