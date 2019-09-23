import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";
// import {bindActionCreators} from "redux";

// import * as popularActions from "../modules/popular";

import { moviesApi } from "../api"

import List from '../components/List';

const UpCommingListContainer = ({ current }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [movies, setMovies] = useState([]); // movie 안에 api 데이타 담는다
    const [page, setPage] = useState(current); // 첫번째 페이지만 보이게 하려고 

    const upComming = async (page) => {
        const { data : { results : upCommingMovies } } = await moviesApi.upComming(page);
        console.log(upCommingMovies);
        setMovies([...upCommingMovies]);
        setIsLoading(false);
    };

    useEffect(()=>{
        upComming(page);
    }, [page]);

    return (
        <>  
            <List 
                category = {'UpComming Movies'}
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
)(UpCommingListContainer);
