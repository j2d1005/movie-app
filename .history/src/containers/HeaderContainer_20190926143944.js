import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as headerActions from "../modules/header";
import Header from "../components/Header"


const HeaderContainer = ({ isOpen }) => {

    const navOpenToggle = () => {
        headerActions.navOpen();
    }
    console.log(navOpenToggle);
    console.log(isOpen);
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);
