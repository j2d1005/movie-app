import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";
// import {bindActionCreators} from "redux";

// import * as popularActions from "../modules/popular";

import { moviesApi } from "../api"

import List from '../components/List';

const NowPlayingListContainer = ({ current, match }) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [movies, setMovies] = useState([]); // movie 안에 api 데이타 담는다
    const [page] = useState(current); // 첫번째 페이지만 보이게 하려고 
    const urlpath = match.path
    // console.log(urlpath);

    const nowPlayingList = async (path, page) => {
        setIsLoading(true);
        const { data : { results : nowPlayingMovies } } = await moviesApi.callList(path, page);   // 합치기
        // console.log(nowPlayingMovies);
        console.log(nowPlayingMovies);
        setMovies([...nowPlayingMovies]);
        setIsLoading(false);
    };

    useEffect(()=>{
        nowPlayingList(urlpath);
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
)(NowPlayingListContainer);
