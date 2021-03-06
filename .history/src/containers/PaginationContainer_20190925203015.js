import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as movieActions from "../modules/movie";
import Pagination from '../components/Pagination';

const PaginationContainer = ({ pageLength, currentPage, currentPageSetting, start, end, movieActions }) => {
    const array = [];
    for (let i=0; i<pageLength; i++){
        array.push(i+1);
    }
    // console.log(array);

    const target = array.slice(start, end);

    //actions
    const updateCurrent = (page) => {
        movieActions.updateCurrentPage(page);
        currentPageSetting(page);
    }
    const updateStartEnd = (start, end) => {
        movieActions.updateStartEndPage(start, end);
    }


    const prevPage = () => {
        if( currentPage === 1 ) return alert("첫번째 페이지 입니다.");
        if( currentPage % 5 === 1 ){ // 5로 나누고 나머지가 1일 때 , 6 11 16 
            const s = start - 5;
            const e = end - 5;
            updateStartEnd(s,e);
            console.log(s,e)
        }
        currentPageSetting(currentPage - 1);
    };

    const nextPage = () => {
        if( currentPage === pageLength ) return alert("마지막 페이지 입니다.");
        if( currentPage % 5 === 0 ){ // 5로 나누고 나머지가 0일 때 5 10 15 20 
            const s = start + 5;
            const e = end + 5;
            updateStartEnd(s,e);
        }
        currentPageSetting(currentPage + 1);
    };

    const goFirst = () => {
        if( currentPage === 1 ) return alert("첫번째 페이지 입니다.");
        currentPageSetting(currentPage = 1);
        updateStartEnd(0,5);
    };
//
    const goLast = () => {
        if( currentPage === pageLength ) return alert("마지막 페이지 입니다.");
        currentPageSetting(currentPage = pageLength);
        const s = (pageLength - (pageLength % 5) );
        const e = pageLength;
        updateStartEnd(s ,e);
    };

    useEffect( () =>{
        updateCurrent(1);
        updateStartEnd(start, end);
    },[urlpath]); // 라우터 바뀔때마다 페이지네이션 초기화 1페이지로 


    return (
        <Pagination
            currentPage={currentPage}
            target={target}
            updateCurrentPage={updateCurrent}
            prevPage={prevPage}
            nextPage={nextPage}
            goFirst={goFirst}
            goLast={goLast}
        />
    )
}

const mapStateToProps = ({movie}) => ({
    current: movie.current,
    start: movie.start,
    end: movie.end,
});

const mapDispatchToProps = dispatch => ({
    movieActions: bindActionCreators(movieActions, dispatch),
});
// const mapDispatchToProps = { updateCurrentPage, updateStartEndPage };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaginationContainer);
