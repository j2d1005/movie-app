import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Movie from '../Movie';
import { moviesApi } from "../api"

const List = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [movies, setMovies] = useState([]); // movie 안에 api 데이타 담는다
    const [page, setPage] = useState(1); // 1페이지만 보이게 하려고 

    const popularList = async (page) => {
        const { data : { results : popularMovie } } = await moviesApi.popular(page);
        console.log(popularMovie);
        setMovies([...popularMovie]);
        setIsLoading(false);
    };

    useEffect(()=>{
        popularList(page);
    }, [page]);

    return (
        <section className="List" >
            {isLoading
                ? <div><span>로딩중..</span></div>
                : <div className="movies">
                    hahahaha 
                    {this.popularMovie.map( movie => {
                    console.log(movie);
                    return (
                        <Movie 
                        key = {movie.id}
                        year = {movie.year}
                        title = {movie.title}
                        />
                    )
                    })}
                </div> 
            }
        </section>
    )
}

export default List;