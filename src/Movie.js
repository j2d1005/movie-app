import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres }){
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
                <ul className="movie__genres">
                    {genres.map( (genre, index) => { // map의 두번째 인자는 각 item의 인덱스(넘버)
                        return(
                            <li className="genre" key={index}>{genre}</li>
                        )
                    })}                
                </ul>
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
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;