import { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {bindActionCreators, compose} from "redux";
import * as headerActions from "../modules/header";
import * as movieActions from "../modules/movie";

let url = "";
const History = ({children, location: { pathname }, headerActions, movieActions }) => {
    
    
    const navClose = () => {
        headerActions.navClose();
    };

    const setCurrent = (current) => {
        movieActions.setDefaultCurrent(current);
    };
    const setStartEnd = (start,end) => {
        movieActions.setDefaultStartEnd(start,end);
    };


    useEffect(()=>{ //  url과 pathname를 비교해서 다르면 nav를 클로즈 시킨다. 모바일일떄!
        if(url!==pathname){
            navClose();
            setCurrent(1);
            setStartEnd(0,5);
            url=pathname;
        }
    });
    
    return children || null;
};

const mapStateToProps = ({header}) => ({
    isOpen : header.isNavOpen
});

const mapDispatchToProps = dispatch => ({
    headerActions: bindActionCreators(headerActions, dispatch),
    movieActions: bindActionCreators(movieActions, dispatch),
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(History); // compose를 사용해서 withRouter를 사용하고 connect도 같이 사용할 수 있다.