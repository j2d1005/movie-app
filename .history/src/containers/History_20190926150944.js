import { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {bindActionCreators, compose} from "redux";
import * as headerActions from "../modules/header";
import * as popularActions from "../modules/popular";

const History = ({children, isOpen, location: { pathname }, headerActions }) => {
    const navClose = () => {
        headerActions.navClose();
    };

    useEffect(()=>{ //  url과 pathname를 비교해서 다르면 nav를 클로즈 시킨다. 모바일일떄!
        if(url!==pathname){
            navClose();
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
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(History); // compose를 사용해서 withRouter를 사용하고 connect도 같이 사용할 수 있다.