import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const item = styled.li`
    flaot:left;
    width:20%;
    margin:0 auto;
`;

function Card({ title, popularity, poster }){
    return (
        <item>
            <img className="movie__poster" src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">
                    {title}
                </h3>
                <p className="movie__popularity">
                    {popularity}
                </p>
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
        </item>
    )
    
}

Card.propTypes = {
    popularity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}

export default Card;