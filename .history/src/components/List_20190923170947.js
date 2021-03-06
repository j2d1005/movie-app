import React from 'react';
import styled from "styled-components";
import Card from './Card';

const Container = styled.div`
    width:100%;
    max-width:1024px;
    margin:0 auto;
    .list{
        display:block;
        :after{
            content:"";display:block;clear:both;
        }
    }
`;


const List = ({ isLoading, movies }) => {
    return (
        <Container>
            {isLoading
                ? <div><span>로딩중..</span></div>
                : 
                <ul className="list">
                    {movies.map( movie => {
                        console.log(movie);
                        return (
                            <Card 
                            key = {movie.id}
                            title = {movie.title}
                            popularity = {movie.popularity}
                            poster = {movie.poster_path}
                            date = {movie.release_date}
                            />
                        )
                    })}
                </ul> 
            }
        </Container>
    )
}

export default List;