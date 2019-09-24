import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";
// import {bindActionCreators} from "redux";

// import * as popularActions from "../modules/popular";

import { moviesApi } from "../api"

import List from '../components/List';

const NowPlayingListContainer = ({ current, match }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [movies, setMovies] = useState([]); // movie 안에 api 데이타 담는다
    const [page] = useState(current); // 첫번째 페이지만 보이게 하려고 

    const nowPlayingList = async (page) => {
        const { data : { results : nowPlayingMovies } } = await moviesApi.nowPlaying(page);
        // console.log(nowPlayingMovies);
        setMovies([...nowPlayingMovies]);
        setIsLoading(false);
    };

    useEffect(()=>{
        nowPlayingList(page);
    }, [page]);

    return (
        <>  
            <List 
                category = {'NowPlaying Movies'}
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
)(NowPlayingListContainer);
