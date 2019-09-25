import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as movieActions from "../modules/movie";
import Pagination from '../components/Pagination';

const PaginationContainer = ({ pageLength, current, start, end }) => {

    const array = [];
    for (let i=0; i<pageLength; i++){
        array.push(i+1);
    }
    // console.log(array);

    const target = array.slice(start, end);

    return (
        <Pagination />
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaginationContainer);
