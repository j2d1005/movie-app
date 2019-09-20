import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }){
    return(
        <h4>{title}</h4>
    )
}

Movie.propTypes = {
    id: PropTypes.nember.isRequired,
    year: PropTypes.nember.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;