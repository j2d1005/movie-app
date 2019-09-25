import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as movieActions from "../modules/movie";

import { moviesApi } from "../api"

import List from '../components/List';
import PaginationContainer from './PaginationContainer'

const ListContainer = ({ current, match }) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [movies, setMovies] = useState([]); // movie 안에 api 데이타 담는다
    const [currentPage, setCurrentPage] = useState(current); // current번째 페이지만 보인다. 
    const urlpath = match.path
    const [ pageLength, setPageLength ] = useState(); 

    // 각 list 가져오기 
    const movieList = async (path, currentPage) => {
        setIsLoading(true);
        const { data : { results : movieList } } = await moviesApi.callList(path, currentPage);  
        const { data : { total_pages : totalPage } } = await moviesApi.callList(path);   // 총 페이지수 가져오기 data.totla_pages를 totalPage에 담는다는 뜻
        // console.log(movieList);
        setMovies([...movieList]);
        setIsLoading(false);

        // console.log(totalPage);
        setPageLength(totalPage);
    };

    //각 list 에서 currentpage 셋팅 
    const currentPageSetting = (page) => {
        setCurrentPage(page);
    };
    

    useEffect(()=>{
        movieList(urlpath, currentPage);
    }, [urlpath, currentPage]);

    return (
        <>  
            <List 
                isLoading = {isLoading}
                movies = {movies}
                path = {match.path}
            />
            {!isLoading &&
                <PaginationContainer 
                    currentPageSetting={currentPageSetting}
                    currentPage={currentPage}
                    pageLength={pageLength}
                />
            }            
        </>
    )
}

const mapStateToProps = ({movie}) => ({
    current: movie.current
});
const mapDispatchToProps = dispatch => ({
    movieActions: bindActionCreators(movieActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListContainer);
