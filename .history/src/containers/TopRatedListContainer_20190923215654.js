import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";
// import {bindActionCreators} from "redux";

// import * as popularActions from "../modules/popular";

import { moviesApi } from "../api"

import List from '../components/List';

const TopRatedListContainer = ({ current }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [movies, setMovies] = useState([]); // movie 안에 api 데이타 담는다
    const [page] = useState(current); // 첫번째 페이지만 보이게 하려고 

    const topRated = async (page) => {
        const { data : { results : topRatedMovies } } = await moviesApi.topRated(page);
        // console.log(topRatedMovies);
        setMovies([...topRatedMovies]);
        setIsLoading(false);
    };

    useEffect(()=>{
        topRated(page);
    }, [page]);

    return (
        <>  
            <List 
                category = {'TopRated Movies'}
                isLoading = {isLoading}
                movies = {movies}
            />
        </>
    )
}

const mapStateToProps = ({movie}) => ({
    current: movie.current
});


export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(TopRatedListContainer);
