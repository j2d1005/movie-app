import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as movieActions from "../modules/movie";
import Pagination from '../components/Pagination';

const PaginationContainer = ({ pageLength, currentPage, currentPage, currentPageSetting, start, end, movieActions }) => {
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


    const onPrevPage = () => {
        if( currentPage === 1 ) return alert("첫번째 페이지 입니다.");
        if( currentPage % 5 === 1 ){
            const s = start - 5;
            const e = end - 5;
            updateStartEnd(s,e);
        }
        currentPageSetting(currentPage - 1);
    };


    return (
        <Pagination
            currentPage={currentPage}
            target={target}
            updateCurrentPage={updateCurrent}
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
