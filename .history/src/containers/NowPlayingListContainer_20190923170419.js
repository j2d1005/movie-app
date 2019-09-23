import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";
// import {bindActionCreators} from "redux";

// import * as popularActions from "../modules/popular";

import { moviesApi } from "../api"

import List from '../components/List';

const NowPlayingListContainer = ({ current }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [movies, setMovies] = useState([]); // movie 안에 api 데이타 담는다
    const [page, setPage] = useState(current); // 첫번째 페이지만 보이게 하려고 

    const NowPlayingList = async (page) => {
        const { data : { results : NowPlayingMovies } } = await moviesApi.NowPlaying(page);
        console.log(NowPlayingMovies);
        setMovies([...NowPlayingMovies]);
        setIsLoading(false);
    };

    useEffect(()=>{
        NowPlayingList(page);
    }, [page]);

    return (
        <>  
            <List 
                isLoading = {isLoading}
                movies = {movies}
            />
        </>
    )
}

const mapStateToProps = ({movie}) => ({
    current: movie.current
});

// const mapDispatchToProps = dispatch => ({
//     NowPlayingActions: bindActionCreators(NowPlayingActions, dispatch),
// });

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(NowPlayingListContainer);
