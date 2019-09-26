import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as headerActions from "../modules/header";
import Header from "../components/Header"

const HeaderContainer = ({ isOpen, headerActions }) => {
    

    const navOpenToggle = () => {
        headerActions.navToggle();
    };
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