import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";
// import {bindActionCreators} from "redux";

// import * as popularActions from "../modules/popular";

import { moviesApi } from "../api"

import List from '../components/List';

const PopularListContainer = ({ current, match }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [movies, setMovies] = useState([]); // movie 안에 api 데이타 담는다
    const [page] = useState(current); // 첫번째 페이지만 보이게 하려고 

    const popularList = async (page) => {
        const { data : { results : popularMovies } } = await moviesApi.popular(page);
        // console.log(popularMovies);
        setMovies([...popularMovies]);
        setIsLoading(false);
    };

    useEffect(()=>{
        popularList(page);
    }, [page]);

    return (
        <>  
            <List 
                category = {'Popular Movies'}
                isLoading = {isLoading}
                movies = {movies}
                path = {match.path}
            />
        </>
    )
}

const mapStateToProps = ({movie}) => ({
    current: movie.current
});

// const mapDispatchToProps = dispatch => ({
//     PopularActions: bindActionCreators(popularActions, dispatch),
// });

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(PopularListContainer);
