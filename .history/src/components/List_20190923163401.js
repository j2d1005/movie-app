import React, { useState, useEffect } from 'react';
// import styled from "styled-components";
import Card from './Card';

// const Container = styled.div`
//     width:100%;
//     max-width:1440px;
//     margin:0 auto;
// `;


const List = ({ isLoading, movies }) => {
    return (
        <section>
            {isLoading
                ? <div><span>로딩중..</span></div>
                : 
                <div className="popular">
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
        </section>
    )
}

export default List;