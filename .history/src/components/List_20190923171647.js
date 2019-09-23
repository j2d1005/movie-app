import React from 'react';
import styled from "styled-components";
import Card from './Card';

const Container = styled.div`
    width:100%;
    max-width:1024px;
    margin:0 auto;
    .category {
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


const List = ({ isLoading, movies, category }) => {
    return (
        <Container>
            {isLoading
                ? <div><span>로딩중..</span></div>
                : 
                <>
                <h2 className="category">{category}</h2>
                <ul className="list">
                    {movies.map( movie => {
                        console.log(movie);
                        return (
                            <Card 
                            key = {movie.id}
                            title = {movie.title}
                            popularity = {movie.popularity}
                            poster = {movie.poster_path}
                            // date = {movie.release_date} // now_playing일때만 주고싶음
                            />
                        )
                    })}
                </ul> 
                </>
            }
        </Container>
    )
}

export default List;