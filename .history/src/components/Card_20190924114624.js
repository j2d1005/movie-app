import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Item = styled.li`
    float:left;
    width:20%;
    padding:0 10px;
    margin-bottom:20px;
      img {
          width:100%;
      }
      .movie__data {
        //   text-align:center;

          .movie__title{
              min-height:50px;
          }
          .movie__desc {
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
                    <p className="movie__desc">
                        {desc}
                    </p>
                </div>
            </Link>
        </Item>
    )
    
}


export default Card;