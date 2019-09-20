import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }){
    return (
        <div class="movie">
            <img class="movie__poster" src={poster} />
            <div class="movie__data">
                <h3 class="movie__title">
                    {title}
                </h3>
                <h4 class="movie__year">
                    {year}
                </h4>
                <p class="movie__summary">
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