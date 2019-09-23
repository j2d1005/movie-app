import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { moviesApi } from "../api";
import List from "../components/List";

const ListContainer = ({  }) => {
    return (
        
    )
}

const mapStateToProps = ({setting}) => ({
    page: setting.page,
    contents: setting.contents,
    lastId: setting.lastId,
    homePos: setting.homePos,
});

const mapDispatchToProps = dispatch => ({
    SetActions: bindActionCreators(setActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);