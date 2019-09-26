import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import * as headerActions from "../modules/header";
import Header from "../components/Header"
import { withRouter } from "react-router-dom";


const HeaderContainer = ({ isOpen, headerActions, location: { pathname } }) => {

    const navOpenToggle = () => {
        headerActions.navOpen();
    }
    console.log(pathname);
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
)(HeaderContainer);
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(HeaderContainer);
