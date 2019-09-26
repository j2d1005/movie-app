import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import * as headerActions from "../modules/header";
import Header from "../components/Header"
import { withRouter } from "react-router-dom"; 
// redux에서 compose를 불러오고 router에서 withRouter를 불러오면 route가연결이 안되어있어도  location을 불러올 수 있다.

let url = "";
const HeaderContainer = ({ isOpen, headerActions, location: { pathname } }) => {
    

    const navOpenToggle = () => {
        headerActions.navToggle();
    };
    // const navClose = () => {
    //     headerActions.navClose();
    // };
    return (
            <Header 
                isOpen={isOpen}
                navOpenToggle={navOpenToggle}
            />
    )
    
}

const mapStateToProps = ({header}) => ({
    isOpen : header.isNavOpen
});

const mapDispatchToProps = dispatch => ({
    headerActions: bindActionCreators(headerActions, dispatch),
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer); // compose를 사용해서 withRouter를 사용하고 connect도 같이 사용할 수 있다.