import React from "react";
import PropTypes from "prop-types";

function Movie(){
    return(
        <h1></h1>
    )
}

Movie.propTypes = {
    id: PropTypes.nember.isRequired,
    year: PropTypes.nember.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}