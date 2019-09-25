import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";
// import {bindActionCreators} from "redux";

// import * as popularActions from "../modules/popular";

import { moviesApi } from "../api"

import List from '../components/List';

const ListContainer = ({ current, match }) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [movies, setMovies] = useState([]); // movie 안에 api 데이타 담는다
    const [page] = useState(current); // 첫번째 페이지만 보이게 하려고 
    const urlpath = match.path
    // console.log(urlpath);

    const movieList = async (path, page) => {
        setIsLoading(true);
        const { data : { results : movieList } } = await moviesApi.callList(path, page);  
        const  { data : { total_pages : totalPage } }   = await moviesApi.callList(path;  
        // console.log(movieList);
        console.log(totalPage);
        setMovies([...movieList]);
        setIsLoading(false);
    };

    useEffect(()=>{
        movieList(urlpath);
    }, [urlpath]);

    return (
        <>  
            <List 
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


export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(ListContainer);
