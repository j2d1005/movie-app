import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster }){
    return (
        <div className="movie">
            <img className="movie__poster" src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">
                    {title}
                </h3>
                <h4 className="movie__year">
                    {year}
                </h4>
                <p className="movie__summary">
                    {summary}
                </p>
            </div>
        </div>
    )
    
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;