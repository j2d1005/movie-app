import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as headerActions from "../modules/header";
import Header from "../components/Header"


const HeaderContainer = ({ }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const navOpen = () => {
        {(isOpen)
            ? setIsOpen(false)
            : setIsOpen(true)
        }
    }

    return (
            <Header 
                isOpen={isOpen}
                navOpen={navOpen}
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
