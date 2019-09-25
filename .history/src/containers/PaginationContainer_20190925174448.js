import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as movieActions from "../modules/movie";
import Pagination from '../components/Pagination';

const PaginationContainer = ({ pageLength, currentPageSetting, start, end, movieActions }) => {
    //  currentPage,
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


    return (
        <Pagination
            // currentPage={currentPage}
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
