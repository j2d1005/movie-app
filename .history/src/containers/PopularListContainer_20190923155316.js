import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";
import {bindActionCreators} from "redux";
// import * as popularActions from "../modules/popular";

import { moviesApi } from "../api"

import List from '../components/List';
import Card from '../components/Card';

const List = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [movies, setMovies] = useState([]); // movie 안에 api 데이타 담는다
    const [page, setPage] = useState(1); // 첫번째 페이지만 보이게 하려고 

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
        <section>
            {isLoading
                ? <div><span>로딩중..</span></div>
                : <div className="movies">
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