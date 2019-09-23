import React from "react";
import PropTypes from "prop-types";

function Card({title, popularity, poster }){
    return (
        <div className="movie">
            <img className="movie__poster" src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">
                    {title}
                </h3>
                <h4 className="movie__popularity">
                    {popularity}
                </h4>
                {/* <h4 className="movie__year">
                    {year}
                </h4> */}
                {/* <ul className="movie__genres">
                    {genres.map( (genre, index) => { // map의 두번째 인자는 각 item의 인덱스(넘버)
                        return(
                            <li className="genre" key={index}>{genre}</li>
                        )
                    })}                
                </ul>
                <p className="movie__summary">
                    {summary}
                </p> */}
            </div>
        </div>
    )
    
}

Card.propTypes = {
    popularity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}

export default Card;