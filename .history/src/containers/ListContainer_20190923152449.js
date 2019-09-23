import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { moviesApi } from "../api";
import List from "../components/List";

const ListContainer = ({  }) => {
    return (
        <List />
    )
}

const mapStateToProps = ({}) => ({
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListContainer);