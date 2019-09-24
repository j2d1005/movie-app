import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Item = styled.li`
    float:left;
    width:20%;
    padding:0 10px;
      img {
          width:100%;
      }
      .movie__data {
          min-height:100px;

          .movie__popularity {
              margin-top:5px;
          }
      }
      a {
          color:inherit;
          text-decoration:none;
      }
`;

const Card = ({ id, title, desc, poster }) => {
    return (
        <Item>
            <Link to={`/Detail/${id}`}>
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">
                        {title}
                    </h3>
                    <p className="movie__popularity">
                        {desc}
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
            </Link>
        </Item>
    )
    
}


export default Card;